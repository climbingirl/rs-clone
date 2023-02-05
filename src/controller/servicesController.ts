import { IReqCard } from '../model/types/types';
import { createItem } from './../model/requests';

const handleCreateCard = async (event: Event): Promise<void> => {
  event.preventDefault();
  const form = <HTMLElement>event.target;

  const cardData: IReqCard = {
    type: 'card',
    name: (<HTMLInputElement>document.getElementById('card-name')).value,
    date: (<HTMLInputElement>document.getElementById('card-date')).value,
    currency: (<HTMLInputElement>document.getElementById('card-currency')).value,
    balance: +(<HTMLInputElement>document.getElementById('card-balance')).value,
    moneyBack: 0,
    iban: "BY000000001023425",
  };

  await createItem('cards', cardData);

  form.style.display = 'none';
  const message = <HTMLElement>document.getElementById('modal__message');
  message.innerText = `Поздравляем вы создали карту ${cardData.name}!`;
}

export default handleCreateCard;