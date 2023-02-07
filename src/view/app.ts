import createHeader from './header/createHeader';
import createMain from './main/createMain';
import createSidebar from './right-sidebar/sidebar';
import createNav from './nav/nav';


const createApp = () => {
  const app = document.createElement('div');
  app.classList.add('app');
  const container = document.createElement('div');
  container.classList.add('container');
  const header = createHeader();
  const nav = createNav();
  const main = createMain();
  const sidebar = createSidebar();

  container.prepend(main);
  container.insertAdjacentHTML('beforeend', sidebar);
  app.insertAdjacentHTML('afterbegin', header);
  app.appendChild(nav);
  app.insertAdjacentElement('beforeend', container);

  return app;
};

export default createApp;
