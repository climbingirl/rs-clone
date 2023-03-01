import { IResDeposit } from './../../../../../../../model/types/responceTypes';

import { IResCard, IResCredit } from '../../../../../../../model/types/responceTypes';
import openArrow from '../../../../../../../assets/images/open-arrow.svg';
import createElement from '../../../../../../helpers/elements/element';

const createItemBalance = (item: IResCard | IResCredit | IResDeposit) => {
  const balanceContainer = createElement('div', 'item-balance-container');
  const itemBalance = createElement('p', 'item-balance');
  const itemArrowComtainer = createElement('div', 'item-arrow-container');
  const itemArrow = <HTMLImageElement>createElement('img', 'item-arrow');

  itemBalance.textContent = `${
    item.type === 'credit'
      ? `Остаток: ${(<IResCredit>item).totalSum - (<IResCredit>item).paid}`
      : ` ${(<IResCard>item).balance}`
  } ${item.currency}`;
  itemArrow.src = openArrow;

  balanceContainer.appendChild(itemBalance);
  balanceContainer.appendChild(itemArrowComtainer);
  itemArrowComtainer.appendChild(itemArrow);

  balanceContainer.style.display = 'flex';
  itemArrowComtainer.style.height = '22px';
  itemArrowComtainer.style.width = '22px';
  itemArrowComtainer.style.marginLeft = '30px';
  itemArrowComtainer.style.border = '1px solid black';
  itemArrow.style.padding = '3px';
  
  
  return balanceContainer;
};

export default createItemBalance;
