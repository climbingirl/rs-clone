import { createMetalsPage } from '../view/main/pages/metalsPage/metalsChart';
import createMainPage from '../view/main/pages/mainPage/page';

import createLoginPage from '../view/main/pages/loginPage/loginPage';
import createMain from '../view/main/createMain';
import createHeader from '../view/header/createHeader';
import createSidebar from '../view/right-sidebar/sidebar';
import createServicesPage from '../view/main/pages/servicesPage/servicesPage';
import createElement from '../view/helpers/elements/element';
import { closeModal } from '../view/helpers/modal';

export const router = () => {
  const path = window.location.pathname;
    const app = document.querySelector('.app')
  const container = document.querySelector('.container');
  if (!container) return;

  if (path === '/login' && app) {
    // container.innerHTML = '';

    const loginPage = createLoginPage();
    app.appendChild(loginPage);
    app.removeChild(container)
  } else {
    let main = document.querySelector('.main');
    if (!main) {
      container.innerHTML = '';
      main = createMain();

      const header = createHeader();
      const sidebar = createSidebar();
      const overlay = createElement('div', 'overlay', 'overlay');

      container.appendChild(main);
      container.insertAdjacentHTML('beforeend', sidebar);
      container.insertAdjacentElement('afterbegin', header);
      container.append(overlay);
      overlay.addEventListener('click', closeModal);
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
