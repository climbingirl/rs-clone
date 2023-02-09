import createHeader from './header/createHeader';
import createMain from './main/createMain';
import createSidebar from './right-sidebar/sidebar';


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
  app.insertAdjacentElement('afterbegin', header);
  app.insertAdjacentElement('beforeend', container);

  return app;
};

export default createApp;
