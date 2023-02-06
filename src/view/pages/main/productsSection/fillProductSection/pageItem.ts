import { IResCard, IResCredit } from '../../../../../model/types/responceTypes';
import createElement from '../../../../helpers/elements/element';
import createItemTextContainer from './itemComponents/itemTextContainer';
import createItemRate from './itemComponents/itemRate';
import createItemBalance from './itemComponents/itemBalance';
import createItemIcon from './itemComponents/itemIcon';

const createPageItem = (item: IResCard | IResCredit) => {
  const pageItem = createElement('div', 'page-item');
  const itemDescription = createElement('div', 'item-description');
  const itemIcon = createItemIcon(item);
  const itemTextContainer = createItemTextContainer(item);
  const itemBalance = createItemBalance(item);

  pageItem.appendChild(itemDescription);
  pageItem.appendChild(itemIcon);
  itemDescription.appendChild(itemIcon);
  itemDescription.appendChild(itemTextContainer);
  if (item.type !== 'card') {
    pageItem.appendChild(createItemRate((<IResCredit>item).rate));
  }
  pageItem.appendChild(itemBalance);

  pageItem.style.display = 'none';

  return pageItem;
};

export default createPageItem;
