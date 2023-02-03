import { ICard, IMoneyAccounts } from '../../../model/types';
import createElement from '../../helpers/elements/element';
import createProductsSection from './productsSection/productsSection';


const createMainPage = (cards: Array<ICard>, moneyAccounts: Array<IMoneyAccounts>) => {
  const mainPage = createElement('div', 'main-page');
  const productsSection = createProductsSection(cards, moneyAccounts);

  mainPage.appendChild(productsSection);
  return mainPage;
};

export default createMainPage;
