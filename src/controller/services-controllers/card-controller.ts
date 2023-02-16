import { IReqCard } from '../../model/types/types';
import { createItem } from '../../model/requests';
import { importUserId } from '../../model/userId';
import generateCardCvv from '../cardNumber/generateCardCvv';

const handleCreateCard = async (event: Event): Promise<void> => {
  event.preventDefault();
  const form = <HTMLElement>event.target;
  const cardName = <HTMLInputElement>document.getElementById('card-name');
  const cardType = <HTMLSelectElement>document.getElementById('card-type');
  const cardDate = <HTMLElement>document.getElementById('card-date');
  const cardCurrency = <HTMLInputElement>document.getElementById('card-currency');

  const cardData: IReqCard = {
    user_id: importUserId(),
    cardType: cardType.options[cardType.selectedIndex].innerText,
    name: cardName.value,
    date: cardDate.innerText,
    currency: cardCurrency.value.toUpperCase(),
    balance: 0,
    cvv: generateCardCvv(),
    // moneyBack: 0,
  };

  // if (meneyBackCheckbox.checked) cardData.moneyBack = 0;
  await createItem('cards', cardData);

  form.style.display = 'none';
  cardName.value = '';
  const message = <HTMLElement>document.getElementById('modal__message');
  message.innerText = `Поздравляем вы создали карту ${cardData.name}!`;
};

export default handleCreateCard;
