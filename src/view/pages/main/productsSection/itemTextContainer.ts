import { ICard, IMoneyAccounts } from '../../../../model/types';
import createElement from '../../../helpers/elements/element';

const createItemTextContainer = (item: ICard | IMoneyAccounts ) => {
  
  const itemTextContainer = createElement('div', 'item-text-container');
  const itemTitle = createElement('p', 'item-title');
  const itemData = createElement('p', 'item-title');
  const itemIban = createElement('p', 'item-title');

  itemTitle.textContent = item.name;
  itemData.textContent = `Дейстувует ${item.type === 'card' ? 'по' : 'c'} ${item.date}`;
  itemIban.textContent = `IBAN: ${item.iban}`;

  itemTextContainer.appendChild(itemTitle);
  itemTextContainer.appendChild(itemData);
  itemTextContainer.appendChild(itemIban);

  if (item.type === 'card' && (<ICard>item).moneyBack) {
    const itemMoneyBack = createElement('p', 'item-money-back');
    itemMoneyBack.textContent = `Ваш money-back${(<ICard>item).moneyBack}`;
    itemTextContainer.appendChild(itemMoneyBack);
  }

  return itemTextContainer;
};

export default createItemTextContainer;
