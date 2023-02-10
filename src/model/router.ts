import { createMetalsPage } from '../view/main/pages/metalsPage/metalsChart';
import createMainPage from '../view/main/pages/mainPage/page';
import createServicesPage from '../view/main/pages/servicesPage/servicesPage';

export const router = () => {
  const main = document.querySelector('.main');
  if (!main) return;

  main.innerHTML = '';

  const path = window.location.pathname;

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
};



// // Update router
// window.addEventListener('popstate', router);
// window.addEventListener('DOMContentLoaded', router);