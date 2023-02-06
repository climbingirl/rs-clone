import changePath from '../../controller/changePath';
import createElement from '../helpers/elements/element';

const createNavItem = (text: string, path: string) => {
  const navItem = createElement('li', 'menu__item');
  navItem.textContent = text;
  navItem.dataset.path = path;

  navItem.addEventListener('click', (e) => changePath(e));

  return navItem;
};

export default createNavItem;
