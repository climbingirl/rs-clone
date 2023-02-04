import createElement from '../../../helpers/elements/element';
import fillProductsSection from './fillProductSection/fillProductsSection';


const createProductsSection = () => {
  const productsSection = createElement('section', 'page-proudcts');

  fillProductsSection(productsSection);

  return productsSection;
};

export default createProductsSection;
