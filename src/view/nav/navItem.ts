import changePath from '../../controller/changePath';
import createElement from '../helpers/elements/element';

const createNavItem = (text: string, path: string) => {
  const navItem = createElement('li', 'menu__item');
  navItem.textContent = text;

  navItem.addEventListener('click', () => changePath(path));

  return navItem;
};

export default createNavItem;
