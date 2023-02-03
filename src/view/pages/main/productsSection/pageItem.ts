import { ICard, IMoneyAccounts } from '../../../../model/types';
import createElement from '../../../helpers/elements/element';
import createItemTextContainer from './itemTextContainer';
import createItenRate from './itemRate';

const createPageItem = (item: ICard | IMoneyAccounts) => {
  const pageItem = createElement('div', 'page-item');
  const itemDescription = createElement('div', 'item-description');
  const itemImgContainer = createElement('div', 'item-img-container');
  const itemTextContainer = createItemTextContainer(item);

  pageItem.appendChild(itemDescription);
  itemDescription.appendChild(itemImgContainer);
  itemDescription.appendChild(itemTextContainer);

  if (item.type === 'MoneyAccounts') {
    itemDescription.appendChild(
      createItenRate((<IMoneyAccounts>item).rate));
  }

  pageItem.style.display = 'none';
  return pageItem;
};

export default createPageItem;
