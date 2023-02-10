import { IReqCard } from '../../model/types/types';
import { createItem } from '../../model/requests';

const handleCreateCard = async (event: Event): Promise<void> => {
  event.preventDefault();
  const form = <HTMLElement>event.target;
  const cardName = <HTMLInputElement>document.getElementById('card-name');
  const cardDate = <HTMLElement>document.getElementById('card-date');
  const cardCurrency = <HTMLInputElement>document.getElementById('card-currency');

  const cardData: IReqCard = {
    type: 'card',
    name: cardName.value,
    date: cardDate.innerText,
    currency: cardCurrency.value,
    balance: 0,
    moneyBack: 0,
    iban: "BY000000001023425",
  };

  await createItem('cards', cardData);

  form.style.display = 'none';
  cardName.value = '';
  const message = <HTMLElement>document.getElementById('modal__message');
  message.innerText = `Поздравляем вы создали карту ${cardData.name}!`;
}

export default handleCreateCard;