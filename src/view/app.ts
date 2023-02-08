import { closeModal } from './helpers/modal';
import { IResCard, IResCredit } from './../model/types/responceTypes';
import { getItems } from './../model/requests';

import createHeader from './header/createHeader';
import createMain from './main/createMain';
import createMainPage from './pages/main/page';
import createSidebar from './right-sidebar/sidebar';
import createServicesPage from './main/pages/services/servicesPage';
import createElement from './helpers/elements/element';


const createApp = () => {
  const app = document.createElement('div');
  app.classList.add('app');
  const container = document.createElement('div');
  container.classList.add('container');
  const header = createHeader();
  const main = createMain();
  const sidebar = createSidebar();
  const overlay = createElement('div', 'overlay', 'overlay')

  container.prepend(main);
  container.insertAdjacentHTML('beforeend', sidebar);
  container.append(overlay);
  app.insertAdjacentHTML('afterbegin', header);
  app.insertAdjacentElement('beforeend', container);

  const mainPage = createMainPage();
  container.insertAdjacentElement('afterbegin', mainPage);

  const servicesPage = createServicesPage();
  main.append(servicesPage);

  overlay.addEventListener('click', closeModal);

  return app;
};

export default createApp;
