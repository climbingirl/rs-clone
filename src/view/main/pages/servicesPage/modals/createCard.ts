import { CardType } from './../../../../../model/types/types';
import handleCreateCard from '../../../../../controller/services-controllers/card-controller';
import { getCurrentDate } from '../../../../../model/utils';
import createElement from '../../../../helpers/elements/element';

const cardTypes: CardType[] = ['RSS Black', 'RSS Gold', 'RSS Platinum', 'RSS Premium'];
let selectedCardType: CardType = 'RSS Gold';

const createCardForm = (): HTMLElement => {
  const form = createElement('form', 'create-card-form', 'create-card-form');
  const formItemCardName = createElement('div', 'form__item');
  const labelCardName = createElement('label');
  const cardName = <HTMLInputElement>(createElement('input', 'card-name', 'card-name'));
  const formItemCardType = createElement('div', 'form__item');
  const labelCardType = createElement('label');
  const selectCardType = <HTMLSelectElement>(createElement('select', 'card-type', 'card-type'));
  const formItemCardCashback = createElement('div', 'form__item');
  const cardCashback = createElement('div', 'card-cashback');
  const spanCardCashback = createElement('span', 'card-cashback__info', 'card-cashback__info');


  const cardInfo = `
    <div class="form__item">
      <label for="card-currency">Валюта карты</label>
      <select class="card-currency" id="card-currency" required>
        <option value="rub" selected>RUB</option>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
      </select>
    </div>
    <div class="form__item">
      <div class="card-date">Дата получения кредита:
        <span class="card-date__info" id="card-date__info">${getCurrentDate()}</span>
      </div>
    </div>
    <button class="form__btn btn-primary">Открыть карту</button>
  `;

  labelCardName.innerText = 'Название карты ';
  labelCardType.innerText = 'Тип карты ';
  cardCashback.innerText = 'Кешбэк: ';
  cardName.type = 'text';
  cardName.placeholder = 'Основная карта';
  cardName.required = true;
  selectCardType.required = true;

  for (const key of cardTypes) {
    const option = new Option(key, key);
    if (key === selectedCardType) option.selected = true;
    selectCardType.append(option);
  }

  labelCardName.append(cardName);
  formItemCardName.append(labelCardName);
  labelCardType.append(selectCardType);
  formItemCardType.append(labelCardType);
  spanCardCashback.innerText = setCardCashback(selectedCardType);
  cardCashback.append(spanCardCashback);
  formItemCardCashback.append(cardCashback);
  form.prepend(formItemCardName);
  form.append(formItemCardType);
  form.append(formItemCardCashback);
  form.insertAdjacentHTML('beforeend', cardInfo);

  selectCardType.addEventListener('change', (event: Event): void => {
    const selectedOption = <CardType>(<HTMLOptionElement>event.target).value;
    selectedCardType = selectedOption;
    spanCardCashback.innerText = setCardCashback(selectedCardType);
  });

  form.addEventListener('submit', handleCreateCard);

  return form;
};

function setCardCashback(cardType: CardType): string {
  return cardType === 'RSS Black' ? 'нет' : 'есть';
}

export default createCardForm;