import createElement from './helpers/elements/element';
import './container.scss';


const createApp = () => {
  const app = createElement('div', 'app');
  const container = createElement('div', 'container');
  app.appendChild(container);

  return app;
};

export default createApp;
