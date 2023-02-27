import { IResCard } from '../../../../../model/types/responceTypes';
import { Currency } from '../../../../../model/types/types';
import createElement from '../../../../helpers/elements/element';

function transferCardValidation(e: Event, cardFrom: IResCard | undefined,
  cardTo: IResCard | undefined, sum: number, minSumValues: { [key in Currency]: number; }): boolean {
  let isValid = true;
  const form = <HTMLFormElement>e.target;
  let errorMessage = '';

  const cardFromSelect = <HTMLSelectElement>form.querySelector('.card-select__from');
  const cardToSelect = <HTMLSelectElement>form.querySelector('.card-select__to');
  const sumInput = <HTMLInputElement>form.querySelector('.transfer-card-sum');
  const errorMessageEl = <HTMLElement>form.querySelector('.transfer-card-message');

  clearErrors(errorMessageEl, cardFromSelect, cardToSelect, sumInput);

  if (cardFrom && cardTo && cardFrom?._id === cardTo?._id) {
    isValid = false;
    cardFromSelect?.classList.add('invalid-field');
    cardToSelect?.classList.add('invalid-field');
    errorMessage += 'Карта списания должна отличаться от карты начисления. ';
    errorMessageEl.innerText = errorMessage;
  }

  if (!cardFrom) {
    isValid = false;
    cardFromSelect?.classList.add('invalid-field');
    showError(cardFromSelect, 'Карта не выбрана');
  }

  if (!cardTo) {
    isValid = false;
    cardToSelect?.classList.add('invalid-field');
    showError(cardToSelect, 'Карта не выбрана');
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

  if (cardFrom) {
    if (sum > cardFrom.balance) {
      isValid = false;
      sumInput?.classList.add('invalid-field');
      errorMessage += 'Не достаточно средств на карте.';
      errorMessageEl.innerText = errorMessage;
    }

    if (sum) {
      const minSum = minSumValues[cardFrom.currency.toLowerCase() as Currency];
      if (sum < minSum) {
        isValid = false;
        sumInput?.classList.add('invalid-field');
        showError(sumInput, `Минимальная сумма ${minSum}.00 ${cardFrom.currency.toLowerCase()}`);
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

export default transferCardValidation;