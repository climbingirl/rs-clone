import { IReqCard } from './../../../../model/types/types';
import { Categoryes, getItem, getItems, updateItem } from './../../../../model/requests';
import createElement from '../../../helpers/elements/element';
import { createModal } from './../../../helpers/modal';
import getCardPrivateNumber from '../../../../controller/cardNumber/getCardPrivateNumber';
import createInput from '../../../helpers/elements/input';
import { IResCard } from '../../../../model/types/responceTypes';
import createButton from '../../../helpers/elements/button';
import getLastCardFigures from '../../../../controller/cardNumber/getLastCardFigures';

export const createtePaymentModal = () => {
  const modal = createModal('payments');

  const select = createCardSelect();
  const sumInput = createSumInput();
  const input = createPhoneIntput();
  const paymentBtn = createPaymentdBtn(modal, select);
  modal.append(select, sumInput, input, paymentBtn);
  return modal;
};

const createCardSelect = () => {
  const select = <HTMLSelectElement>createElement('select', 'card-select');

  (async () => {
    const cards = await getItems<IResCard>(Categoryes.Cards);
    cards.forEach((card) => {
      const cardOption = <HTMLOptionElement>createElement('option', 'card-option');
      cardOption.textContent = 
        `С карты: ${card.name} ${getLastCardFigures(card._id)}; ${card.balance} ${card.currency}`;
      cardOption.value = card._id;
      select.append(cardOption);
    });
  })();

  return select;
};

const createPhoneIntput = () => {
  const input = createInput('phone', 'phone-input');
  input.placeholder = 'Введите номер';
  return input;
};

const createSumInput = () => {
  const input = createInput('number', 'sum-input');
  input.placeholder = 'Введите сумму';
  return input;
};

const createPaymentdBtn = (modal: HTMLElement, select: HTMLSelectElement) => {
  const pay = async () => {
    const amountEntered = +(<HTMLInputElement>document.querySelector('.sum-input'))?.value;
    const cardId = select.value;
    const card = await getItem<IResCard>(Categoryes.Cards, +cardId);
    const modlaMsg =  modal.querySelector('.modal__message');
    if (!modlaMsg || !amountEntered) return;

    if (amountEntered && amountEntered < card.balance) {
      card.balance = card.balance - amountEntered;
      modlaMsg.innerHTML = 'Операция прошла успешно';
      updateItem(Categoryes.Cards, cardId, <IReqCard>card);
    } else {
      modlaMsg.innerHTML = 'Недостаточно стредств';
    }
  };

  const btn = createButton('pay', 'payment-btn');

  btn.addEventListener('click', () => pay());
  return btn;
};
