import createMainPage from '../view/main/pages/mainPage/page';
import createServicesPage from '../view/main/pages/services/servicesPage';

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
  } else {
    const mainPage = createMainPage();
    main.appendChild(mainPage);
  }
};



// // Update router
// window.addEventListener('popstate', router);
// window.addEventListener('DOMContentLoaded', router);