import { createMetalsPage } from '../view/main/pages/metalsPage/metalsChart';
import createMainPage from '../view/main/pages/mainPage/page';
import createLoginPage from '../view/main/pages/loginPage/loginPage';
import createMain from '../view/main/createMain';
import createHeader from '../view/header/createHeader';
import createSidebar from '../view/right-sidebar/sidebar';
import createServicesPage from '../view/main/pages/servicesPage/servicesPage';
import createElement from '../view/helpers/elements/element';
import { closeModal } from '../view/helpers/modal';
import createTransfersPage from '../view/main/pages/transfersPage/transfersPage';
import { createFooter } from '../view/footer/createFooter';

export const router = () => {
  const path = window.location.pathname;
  const app = document.querySelector('.app');
  const container = document.querySelector('.container');
  if (!app) return;

  if (path === '/login' && app && container) {
    const loginPage = createLoginPage();
    container.innerHTML = '';
    app.appendChild(loginPage);

  } else {
    app.innerHTML='';
    if (container) {
      app.appendChild(container);
      const footer = createFooter();
      app.insertAdjacentElement('beforeend', footer);
    }

    let main = document.querySelector('.main');

    if (!main && container) {
      main = createMain();
      const header = createHeader();

      const sidebar = createSidebar();
      const overlay = createElement('div', 'overlay', 'overlay');
      container.append(main);

      container.insertAdjacentHTML('beforeend', sidebar);
      container.insertAdjacentElement('afterbegin', header);

      container.append(overlay);
      overlay.addEventListener('click', closeModal);
    }
    if (main) {
      main.innerHTML = '';
      if (path === '/') {
        const mainPage = createMainPage();
        main.appendChild(mainPage);
      } else if (path === '/services') {
        const servicesPage = createServicesPage();
        main.append(servicesPage);
      } else if (path === '/transfers') {
        const transfersPage = createTransfersPage();
        main.append(transfersPage);
      } else if (path === '/metals') {
        const metalsPage = createMetalsPage();
        main.append(metalsPage);
      } else {
        const mainPage = createMainPage();
        main.appendChild(mainPage);
      }
    }
  }
};

// // Update router
// window.addEventListener('popstate', router);
// window.addEventListener('DOMContentLoaded', router);
