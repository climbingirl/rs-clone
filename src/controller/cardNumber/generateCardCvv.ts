const generateCardCvv = () => {
  let cvv = '';
  for (let i = 0; i < 3; i++) {
    cvv += Math.floor(Math.random()).toString();
  }
  return cvv;
};

export default generateCardCvv;
