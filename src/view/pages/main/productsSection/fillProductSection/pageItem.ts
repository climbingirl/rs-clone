import { IResCard, IResCredit } from '../../../../../model/types/responceTypes';
import createElement from '../../../../helpers/elements/element';
import createItemTextContainer from './itemComponents/itemTextContainer';
import createItenRate from './itemComponents/itemRate';

const createPageItem = (item: IResCard | IResCredit) => {
  const pageItem = createElement('div', 'page-item');
  const itemDescription = createElement('div', 'item-description');
  const itemImgContainer = createElement('div', 'item-img-container');
  const itemTextContainer = createItemTextContainer(item);

  pageItem.appendChild(itemDescription);
  itemDescription.appendChild(itemImgContainer);
  itemDescription.appendChild(itemTextContainer);

  if (item.type === 'credit') {
    itemDescription.appendChild(
      createItenRate((<IResCredit>item).rate));
  }

  pageItem.style.display = 'none';
  return pageItem;
};

export default createPageItem;
