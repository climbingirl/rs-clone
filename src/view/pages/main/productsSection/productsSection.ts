import { ICard, IMoneyAccounts } from '../../../../model/types';
import createElement from '../../../helpers/elements/element';
import createPageComponent from './pageComponent';


const createProductsSection = (cards: Array<ICard>, moneyAccounts: Array<IMoneyAccounts>) => {
  const productsSection = createElement('div', 'page-proudcts');

  productsSection.appendChild(createPageComponent('Карты', cards));
  productsSection.appendChild(createPageComponent('Сбережения', moneyAccounts));
  return productsSection;
};

export default createProductsSection;
