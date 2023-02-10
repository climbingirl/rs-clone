import getCardNumber from './getFullCardNumber';

const getCardPrivateNumber = (cardId: string) => {
  const cardNumber = getCardNumber(cardId);
  return cardNumber.split('').map((char, index) => (index > 4 && index < cardNumber.length - 4) ? '*' : char).join('');
};

export default getCardPrivateNumber;
