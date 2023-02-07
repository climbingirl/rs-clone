import createElement from '../helpers/elements/element';
import createNavList from './navList';

const createNav = () => {
  const nav = createElement('nav', 'menu');
  const navList = createNavList();

  nav.appendChild(navList);
  return nav;
};

export default createNav;
