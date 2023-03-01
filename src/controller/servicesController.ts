import { IReqCard } from '../model/types/types';
import { importUserId } from '../model/userId';
import { createItem } from './../model/requests';
import generateCardCvv from './cardNumber/generateCardCvv';

const handleCreateCard = async (event: Event): Promise<void> => {
  event.preventDefault();
  const form = <HTMLElement>event.target;

  const cardData: IReqCard = {
    user_id: importUserId(),
    name: (<HTMLInputElement>document.getElementById('card-name')).value, //name = cardType
    cardType: 'MasterCard Silver',
    date: (<HTMLInputElement>document.getElementById('card-date')).value,
    currency: (<HTMLInputElement>document.getElementById('card-currency')).value,
    balance: +(<HTMLInputElement>document.getElementById('card-balance')).value,
    cvv: generateCardCvv(),
    moneyBack: 0, // moneyBack?
  };

  //if (checkboxMoneyBack.cheked) cardData.moneyBack = 0
  await createItem('cards', cardData);

  form.style.display = 'none';
  const message = <HTMLElement>document.getElementById('modal__message');
  message.innerText = `Поздравляем вы создали карту ${cardData.name}!`;
};

export default handleCreateCard;
