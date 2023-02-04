import { IResCard, IResCredit } from './../../../../../../model/types/responceTypes';
import createElement from '../../../../../helpers/elements/element';

const createItemBalance = (item: IResCard | IResCredit) => {
  const balanceContainer = createElement('div', 'item-balance-container');
  const itemBalance = createElement('p', 'item-balance');

  itemBalance.textContent = `${
    item.type === 'credit'
      ? `Остаток: ${(<IResCredit>item).totalSum - (<IResCredit>item).paid}`
      : ` ${(<IResCard>item).balance}`
  } ${item.currency}`;

  balanceContainer.appendChild(itemBalance);

  balanceContainer.style.display = 'flex';
  
  return balanceContainer;
};

export default createItemBalance;
