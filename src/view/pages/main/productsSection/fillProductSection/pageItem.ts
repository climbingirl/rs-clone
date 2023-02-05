import { IResCard, IResCredit } from '../../../../../model/types/responceTypes';
import createElement from '../../../../helpers/elements/element';
import createItemTextContainer from './itemComponents/itemTextContainer';
import createItemRate from './itemComponents/itemRate';
import createItemBalance from './itemComponents/itemBalance';

const createPageItem = (item: IResCard | IResCredit) => {
  const pageItem = createElement('div', 'page-item');
  const itemDescription = createElement('div', 'item-description');
  const itemImgContainer = createElement('div', 'item-img-container');
  const itemTextContainer = createItemTextContainer(item);
  const itemBalance = createItemBalance(item);

  pageItem.appendChild(itemDescription);
  itemDescription.appendChild(itemImgContainer);
  itemDescription.appendChild(itemTextContainer);
  if (item.type !== 'card') {
    pageItem.appendChild(createItemRate((<IResCredit>item).rate));
  }
  pageItem.appendChild(itemBalance);

  pageItem.style.display = 'none';

  return pageItem;
};

export default createPageItem;
