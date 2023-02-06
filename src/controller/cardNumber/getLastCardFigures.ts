import getCardNumber from './getFullCardNumber';

const getLastCardFigures = (itemId: string) => {
  const cardNumber = getCardNumber(itemId);
  return cardNumber.substring(cardNumber.length - 4);
};

export default getLastCardFigures;
