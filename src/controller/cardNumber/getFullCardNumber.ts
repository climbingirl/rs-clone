const getCardNumber = (cardId: string) => {
  return cardId.replace(/\D/g, '');
};

export default getCardNumber;