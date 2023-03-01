import createElement from '../../../helpers/elements/element';
import createProductsSection from './productsSection/productsSection';


const createMainPage = () => {
  const mainPage = createElement('div', 'main-page');
  const productsSection = createProductsSection();

  mainPage.appendChild(productsSection);
  return mainPage;
};

export default createMainPage;
