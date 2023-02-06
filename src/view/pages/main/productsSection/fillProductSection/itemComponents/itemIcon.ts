
import { IResCard, IResCredit } from '../../../../../../model/types/responceTypes';
import createElement from '../../../../../helpers/elements/element';
import creditIcon from '../../../../../../assets/images/logo.svg';
import getLastCardFigures from '../../../../../../controller/cardNumber/getLastCardFigures';

const createItemIcon = (item: IResCard | IResCredit) => {
  const iconContainer = createElement('div', 'item-icon-container');
  if (item.type === 'card') {
    iconContainer.style.background = 'red';

    const cardNumber = createElement('p', 'icon-card-number', 'card-icon-item');
    cardNumber.textContent = getLastCardFigures(item._id);

    cardNumber.style.position = 'absolute';
    cardNumber.style.bottom = '-15px';
    cardNumber.style.right = '2px';

    iconContainer.appendChild(cardNumber);
  } else {
    const itemIcon = <HTMLImageElement>createElement('img', 'item-icon');
    itemIcon.src = creditIcon;
    iconContainer.appendChild(itemIcon);
  }

  iconContainer.style.position = 'relative';
  iconContainer.style.width = item.type === 'card' ? '70px' : '40px';
  iconContainer.style.height = '40px';
  return iconContainer;
};

export default createItemIcon;
