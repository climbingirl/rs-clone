import createHeader from './header/createHeader';
import createMain from './main/createMain';
import createSidebar from './right-sidebar/sidebar';
import createElement from './helpers/elements/element';
import { closeModal } from './helpers/modal';

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
  app.insertAdjacentElement('afterbegin', header);
  app.insertAdjacentElement('beforeend', container);

  overlay.addEventListener('click', closeModal);

  return app;
};

export default createApp;
