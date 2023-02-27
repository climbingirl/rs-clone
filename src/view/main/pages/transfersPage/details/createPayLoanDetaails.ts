import { Currency } from '../../../../../model/types/types';
import { IResCard, IResCredit } from '../../../../../model/types/responceTypes';
import createElement from '../../../../helpers/elements/element';
import getLastCardFigures from '../../../../../controller/cardNumber/getLastCardFigures';
import createButton from '../../../../helpers/elements/button';
import handlePayLoan from '../../../../../controller/transfers-controllers/pay-loan-controller';
import payLoanValidation from './pay-load-validation';

const minSum: {
  [key in Currency]: number;
} = {
  rub: 50,
  usd: 1,
  eur: 1,
};

const createPayLoanDetails = (tarnsferIdName: string, cards: IResCard[], loans: IResCredit[]): HTMLElement => {
  const transfersCardDetails = createElement('div', 'details__item', `${tarnsferIdName}-details`);
  const form = createElement('form', `${tarnsferIdName}-details__form`, `${tarnsferIdName}-details__form`);
  const labelCard = createElement('label');
  const labelLoan = createElement('label');
  const cardSelect = <HTMLSelectElement>createElement('select', 'card-select');
  const loanSelect = <HTMLSelectElement>createElement('select', 'loan-select');
  const labelSum = createElement('label');
  const inputSum = <HTMLInputElement>(createElement('input', `${tarnsferIdName}-sum`, `${tarnsferIdName}-sum`));
  const currencySpan = <HTMLSpanElement>(createElement('span',
    `${tarnsferIdName}-currency`, `${tarnsferIdName}-currency`));
  const errorMessage = createElement('div', `${tarnsferIdName}-message`, `${tarnsferIdName}-message`);
  const formBtn = <HTMLButtonElement>createButton('Продолжить', 'form__btn', 'btn-primary');
  let selectedCard: IResCard | undefined = undefined;
  let selectedloan: IResCredit | undefined = undefined;

  cards.map(card => cardSelect.append(createCardOption(card)));
  loans.map(loan => loanSelect.append(createLoanOption(loan)));
  cardSelect.prepend(new Option('Выберите карту', 'choos-card', true, true));
  loanSelect.prepend(new Option('Выберите кредит', 'choos-loan', true, true));

  inputSum.type = 'text';
  inputSum.placeholder = `не менее ${minSum.rub}.00`;
  currencySpan.innerText = ' RUB';
  labelCard.innerText = 'С карты';
  labelLoan.innerText = 'В счёт кредита';
  labelSum.innerText = 'Сумма перевода ';
  labelCard.append(cardSelect);
  labelLoan.append(loanSelect);
  labelSum.append(inputSum, currencySpan);
  form.prepend(labelCard, labelLoan, labelSum, errorMessage, formBtn);
  transfersCardDetails.prepend(form);

  cardSelect.addEventListener('change', (e: Event): void => {
    selectedCard = setSelectedCard(e, cards);
    setSumInfo(inputSum, currencySpan, selectedCard?.currency);
  });
  loanSelect.addEventListener('change', (e: Event): void => {selectedloan = setSelectedLoan(e, loans);});
  form.addEventListener('submit', (e: Event) => submitForm(e, errorMessage,
    selectedCard, selectedloan, +inputSum.value));
  inputSum.addEventListener('input', (e: Event) => {
    const input = <HTMLInputElement>e.target;
    input.value = input.value.replace(/[^\d\\.]/g, '');
  });

  return transfersCardDetails;
};

function createCardOption(card: IResCard): HTMLElement {
  const optionText = `${card.name} ****${getLastCardFigures(card._id)} | ${card.balance.toFixed(2)} ${card.currency}`;
  const option = new Option(optionText);
  option.dataset.cardId = card._id;
  option.dataset.cardName = card.name;

  return option;
}

function createLoanOption(loan: IResCredit): HTMLElement {
  const optionText = `${loan.name} | долг: ${getDebtSum(loan).toFixed(2)} ${loan.currency}`;
  const option = new Option(optionText);
  option.dataset.loanId = loan._id;
  option.dataset.loanName = loan.name;

  return option;
}

function setSelectedCard(event: Event, cards: IResCard[]): IResCard | undefined {
  const select = <HTMLSelectElement>event.target;
  const cardId = select.options[select.selectedIndex].dataset.cardId;
  const selectedCard = cards.find(card => card._id === cardId);
  return selectedCard;
}

function setSelectedLoan(event: Event, loans: IResCredit[]): IResCredit | undefined {
  const select = <HTMLSelectElement>event.target;
  const loanId = select.options[select.selectedIndex].dataset.loanId;
  const selectedloan = loans.find(loan => loan._id === loanId);
  return selectedloan;
}

function setSumInfo(input: HTMLInputElement, currencySpan: HTMLSpanElement, currency: string | undefined) {
  if (currency) {
    const minValue = minSum[currency.toLowerCase() as Currency];
    input.placeholder = `не менее ${minValue}.00`;
    currencySpan.innerText = ` ${currency}`;
  } else {
    input.placeholder = '';
  }
}

function getDebtSum(loan: IResCredit): number {
  return ((+loan.totalSum.toFixed(2) * 100) - (+loan.paid.toFixed(2) * 100)) / 100;
}

function submitForm(e: Event, errorMessage: HTMLElement,
  card: IResCard | undefined, loan: IResCredit | undefined, sum: number) {
  e.preventDefault();
  if (payLoanValidation(e, card, loan, sum, minSum)) {
    if (card && loan) handlePayLoan(card, loan, sum);
  }
  // проверка суммы долга и суммы перевода
}

export default createPayLoanDetails;
