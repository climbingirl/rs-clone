import { createMetalsPage } from '../view/main/pages/metalsPage/metalsChart';
import createMainPage from '../view/main/pages/mainPage/page';

import createLoginPage from '../view/main/pages/loginPage/loginPage';
import createMain from '../view/main/createMain';
import createHeader from '../view/header/createHeader';
import createSidebar from '../view/right-sidebar/sidebar';
import createServicesPage from '../view/main/pages/servicesPage/servicesPage';

export const router = () => {
  const path = window.location.pathname;
  const container = document.querySelector('.container');
  if (!container) return;

  if (path === '/login') {
    container.innerHTML = '';

    const loginPage = createLoginPage();
    container.appendChild(loginPage);
  } else {
    let main = document.querySelector('.main');
    if (!main) {
      container.innerHTML = '';
      main = createMain();

      const header = createHeader();
      const sidebar = createSidebar();

      container.appendChild(main);
      container.insertAdjacentHTML('beforeend', sidebar);
      container.insertAdjacentElement('afterbegin', header);
    }

    main.innerHTML = '';

    if (path === '/') {
      const mainPage = createMainPage();
      main.appendChild(mainPage);
    } else if (path === '/services') {
      const servicesPage = createServicesPage();
      main.append(servicesPage);
    } else if (path === '/metals') {
      const metalsPage = createMetalsPage();
      main.append(metalsPage);
    } else {
      const mainPage = createMainPage();
      main.appendChild(mainPage);
    }
  }
};

// // Update router
// window.addEventListener('popstate', router);
// window.addEventListener('DOMContentLoaded', router);
