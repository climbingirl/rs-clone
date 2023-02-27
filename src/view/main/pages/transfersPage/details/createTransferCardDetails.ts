import { Currency } from './../../../../../model/types/types';
import { IResCard } from './../../../../../model/types/responceTypes';
import createElement from '../../../../helpers/elements/element';
import getLastCardFigures from '../../../../../controller/cardNumber/getLastCardFigures';
import createButton from '../../../../helpers/elements/button';
import handleTransfersCard from '../../../../../controller/transfers-controllers/transfers-cards-controller';
import transferCardValidation from './transfer-card-validation';

const minSum: {
  [key in Currency]: number;
} = {
  rub: 50,
  usd: 1,
  eur: 1,
};

const createTransfersCardDetails = (tarnsferIdName: string, cards: IResCard[]): HTMLElement => {
  const transfersCardDetails = createElement('div', 'details__item', `${tarnsferIdName}-details`);
  const form = createElement('form', `${tarnsferIdName}-details__form`, `${tarnsferIdName}-details__form`);
  const labelCardFrom = createElement('label');
  const labelCardTo = createElement('label');
  const cardFromSelect = <HTMLSelectElement>createElement('select', 'card-select__from');
  const cardToSelect = <HTMLSelectElement>createElement('select', 'card-select__to');
  const labelSum = createElement('label');
  const inputSum = <HTMLInputElement>(createElement('input', `${tarnsferIdName}-sum`, `${tarnsferIdName}-sum`));
  const currencySpan = <HTMLSpanElement>(createElement('span',
    `${tarnsferIdName}-currency`, `${tarnsferIdName}-currency`));
  const errorMessage = createElement('div', `${tarnsferIdName}-message`, `${tarnsferIdName}-message`);
  const formBtn = <HTMLButtonElement>createButton('Продолжить', 'form__btn', 'btn-primary');
  let selectedCardFrom: IResCard | undefined = undefined;
  let selectedCardTo: IResCard | undefined = undefined;

  cards.map(card => cardFromSelect.append(createCardOption(card)));
  cards.map(card => cardToSelect.append(createCardOption(card)));
  cardFromSelect.prepend(new Option('Выберите карту', 'choos-card', true, true));
  cardToSelect.prepend(new Option('Выберите карту', 'choos-card', true, true));

  inputSum.type = 'text';
  inputSum.placeholder = `не менее ${minSum.rub}.00`;
  currencySpan.innerText = ' RUB';
  labelCardFrom.innerText = 'С карты';
  labelCardTo.innerText = 'На карту';
  labelSum.innerText = 'Сумма перевода ';
  labelCardFrom.append(cardFromSelect);
  labelCardTo.append(cardToSelect);
  labelSum.append(inputSum, currencySpan);
  form.prepend(labelCardFrom, labelCardTo, labelSum, errorMessage, formBtn);
  transfersCardDetails.prepend(form);

  cardFromSelect.addEventListener('change', (e: Event): void => {
    selectedCardFrom = setSelectedCard(e, cards);
    setSumInfo(inputSum, currencySpan, selectedCardFrom?.currency);
  });
  cardToSelect.addEventListener('change', (e: Event): void => {selectedCardTo = setSelectedCard(e, cards);});
  form.addEventListener('submit', (e: Event) => submitForm(e, selectedCardFrom, selectedCardTo, +inputSum.value));
  inputSum.addEventListener('input', (e: Event) => {
    const input = <HTMLInputElement>e.target;
    input.value = input.value.replace(/[^\d\\.]/g, '');
  });

  return transfersCardDetails;
};

function createCardOption(card: IResCard): HTMLElement {
  const optionText = `${card.name} ****${getLastCardFigures(card._id)} | ${card.balance.toFixed(2)} ${card.currency}`;
  const option = new Option(optionText);
  option.dataset.cardName = card.name;
  option.dataset.cardId = card._id;

  return option;
}

function setSelectedCard(event: Event, cards: IResCard[]): IResCard | undefined {
  const select = <HTMLSelectElement>event.target;
  const cardId = select.options[select.selectedIndex].dataset.cardId;
  const selectedCard = cards.find(card => card._id === cardId);
  return selectedCard;
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

function submitForm(e: Event, cardFrom: IResCard | undefined, cardTo: IResCard | undefined, sum: number) {
  e.preventDefault();
  if (transferCardValidation(e, cardFrom, cardTo, sum, minSum)) {
    handleTransfersCard(cardFrom as IResCard, cardTo as IResCard, sum);
  }
}

export default createTransfersCardDetails;
