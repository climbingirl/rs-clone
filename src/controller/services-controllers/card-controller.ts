import { IReqCard } from '../../model/types/types';
import { createItem } from '../../model/requests';
import { importUserId } from '../../model/userId';
import generateCardCvv from '../cardNumber/generateCardCvv';

const handleCreateCard = async (event: Event): Promise<void> => {
  event.preventDefault();
  const form = <HTMLElement>event.target;
  const cardName = <HTMLInputElement>document.getElementById('card-name');
  const cardType = <HTMLSelectElement>document.getElementById('card-type');
  const cardCashback = <HTMLElement>document.getElementById('card-cashback__info');
  const cardDate = <HTMLElement>document.getElementById('card-date__info');
  const cardCurrency = <HTMLInputElement>document.getElementById('card-currency');
  const message = <HTMLElement>document.getElementById('create-card-modal__message');

  const cardData: IReqCard = {
    user_id: importUserId(),
    cardType: cardType.options[cardType.selectedIndex].innerText,
    name: cardName.value,
    date: cardDate.innerText,
    currency: cardCurrency.value.toUpperCase(),
    balance: 0,
    cvv: generateCardCvv(),
  };

  if (cardCashback.innerText === 'есть') cardData.moneyBack = 0;
  await createItem('cards', cardData);

  form.style.display = 'none';
  cardName.value = '';
  message.innerText = `Поздравляем вы создали карту ${cardData.name}!`;
};

export default handleCreateCard;
