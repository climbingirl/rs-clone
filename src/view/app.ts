import createHeader from './header/createHeader';
import createElement from './helpers/elements/element';
import createMain from './main/createMain';
import createLoginPage from './main/pages/loginPage/loginPage';
import createSidebar from './right-sidebar/sidebar';


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

  return app;
};

export default createApp;
