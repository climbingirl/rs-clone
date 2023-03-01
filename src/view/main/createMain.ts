import createElement from '../helpers/elements/element';
import './main.scss';

const createMain = () => {
  const main = createElement('main', 'main');
  const mainWr = createElement('div', 'main__inner');
  main.insertAdjacentElement('afterbegin', mainWr);
  return main;
};

export default createMain;
