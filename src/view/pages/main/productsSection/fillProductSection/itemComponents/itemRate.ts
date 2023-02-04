import createElement from '../../../../../helpers/elements/element';

const createItemRate = (rate: number) => {
  const itemRate = createElement('h2', 'item-rate');
  itemRate.textContent = `${rate}%`;
  return itemRate;
};

export default createItemRate;
