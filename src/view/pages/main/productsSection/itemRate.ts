import createElement from '../../../helpers/elements/element';

const createItenRate = (rate: number) => {
  const interestRate = createElement('h2', 'item-rate');
  interestRate.textContent = `${rate}%`;
  return interestRate;
};

export default createItenRate;
