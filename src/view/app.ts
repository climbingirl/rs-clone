import createHeader from './header/createHeader';
import createElement from './helpers/elements/element';
import createMain from './main/createMain';
import createLoginPage from './main/pages/loginPage/loginPage';
import createSidebar from './right-sidebar/sidebar';
import createElement from './helpers/elements/element';
import { closeModal } from './helpers/modal';

const createApp = () => {

  const app = createElement('div', 'app');
  // const container = createElement('div', 'container');
  // const header = createHeader();
  // const main = createMain();
  // const sidebar = createSidebar();

  // container.prepend(main);
  // container.insertAdjacentHTML('beforeend', sidebar);
  // app.insertAdjacentElement('afterbegin', header);
  // app.insertAdjacentElement('beforeend', container);

  const loginPage = createLoginPage();

  app.appendChild(loginPage);

  //const overlay = createElement('div', 'overlay', 'overlay')



 // overlay.addEventListener('click', closeModal);

  return app;
};

export default createApp;
