import { IResCard, IResCredit } from '../../../../../model/types/responceTypes';
import { Currency } from '../../../../../model/types/types';
import createElement from '../../../../helpers/elements/element';

function payLoanValidation(e: Event, card: IResCard | undefined,
  loan: IResCredit | undefined, sum: number, minSumValues: { [key in Currency]: number; }): boolean {
  let isValid = true;
  const form = <HTMLFormElement>e.target;
  let errorMessage = '';

  const cardSelect = <HTMLSelectElement>form.querySelector('.card-select');
  const loanSelect = <HTMLSelectElement>form.querySelector('.loan-select');
  const sumInput = <HTMLInputElement>form.querySelector('.pay-loan-sum');
  const errorMessageEl = <HTMLElement>form.querySelector('.pay-loan-message');

  clearErrors(errorMessageEl, cardSelect, loanSelect, sumInput);

  if (card && loan) {
    const debtSum = getDebtSum(loan);
    const sumDifference = subtractSum(sum, debtSum);

    if (sumDifference > 0) {
      isValid = false;
      sumInput?.classList.add('invalid-field');
      errorMessage += 'Сумма списания не должна быть больше суммы долга. ';
      errorMessageEl.innerText = errorMessage;
    }
  }

  if (!card) {
    isValid = false;
    cardSelect?.classList.add('invalid-field');
    showError(cardSelect, 'Карта не выбрана');
  }

  if (!loan) {
    isValid = false;
    loanSelect?.classList.add('invalid-field');
    showError(loanSelect, 'Кредит не выбран');
  }

  if (sumInput.value.length === 0) {
    isValid = false;
    sumInput?.classList.add('invalid-field');
    showError(sumInput, 'Не указана сумма');
  }

  if (sumInput.value.includes('.')) {
    const decimals = sumInput.value.split('.');
    if (decimals.length > 2 || decimals[1].length > 2) {
      isValid = false;
      sumInput?.classList.add('invalid-field');
      showError(sumInput, 'После точки допускается не более двух цифр');
    }
  }

  if (card) {
    if (sum > card.balance) {
      isValid = false;
      sumInput?.classList.add('invalid-field');
      errorMessage += 'Не достаточно средств на карте.';
      errorMessageEl.innerText = errorMessage;
    }

    if (sum) {
      const minSum = minSumValues[card.currency.toLowerCase() as Currency];
      if (sum < minSum) {
        isValid = false;
        sumInput?.classList.add('invalid-field');
        showError(sumInput, `Минимальная сумма ${minSum}.00 ${card.currency.toLowerCase()}`);
      }
    }
  }

  return isValid;
}

function showError(element: HTMLElement, errorText: string): void {
  const parentLabel = <HTMLLabelElement>element.parentNode;
  const error = createElement('div', 'field-error');
  error.textContent = errorText;
  parentLabel.append(error);
}

function removeError(element: HTMLElement): void {
  const parentLabel = <HTMLLabelElement>element.parentNode;
  const errors = <NodeListOf<Element>>parentLabel.querySelectorAll('.field-error');
  if (errors.length > 0) {
    for (const error of errors) {
      error.remove();
    }
  }
}

function clearErrors(errorMessageElement : HTMLElement, ...formElements: HTMLElement[]) {
  errorMessageElement.innerText = '';
  formElements.map(el => {
    el.classList.remove('invalid-field');
    removeError(el);
  });
}

function getDebtSum(loan: IResCredit): number {
  return ((+loan.totalSum.toFixed(2) * 100) - (+loan.paid.toFixed(2) * 100)) / 100;
}

function subtractSum(a: number, b: number): number {
  return ((+a.toFixed(2) * 100) - (+b.toFixed(2) * 100)) / 100;
}

export default payLoanValidation;