import { IResCard, IResCredit } from './../model/types/responceTypes';
import { getItems } from './../model/requests';

import createHeader from './header/createHeader';
import createMain from './main/createMain';
import createMainPage from './pages/main/page';
import createSidebar from './right-sidebar/sidebar';
import createServicesPage from './main/pages/services/servicesPage';


const createApp = () => {
  const app = document.createElement('div');
  app.classList.add('app');
  const container = document.createElement('div');
  container.classList.add('container');
  const header = createHeader();
  const main = createMain();
  const sidebar = createSidebar();

  container.prepend(main);
  container.insertAdjacentHTML('beforeend', sidebar);
  app.insertAdjacentHTML('afterbegin', header);
  app.insertAdjacentElement('beforeend', container);

  const mainPage = createMainPage();
  container.insertAdjacentElement('afterbegin', mainPage);

  const servicesPage = createServicesPage();
  main.append(servicesPage);

  return app;
};

export default createApp;
