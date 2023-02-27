import createElement from '../helpers/elements/element';
import createNavItem from './navItem';

const createNavList = () => {
  const navList = createElement('ul', 'menu__list');

  navList.appendChild(createNavItem('Главная', '/'));
  navList.appendChild(createNavItem('Услуги', '/services'));
  navList.appendChild(createNavItem('Переводы', '/transfers'));
  navList.appendChild(createNavItem('История', ''));
  navList.appendChild(createNavItem('Все продукты', ''));
  return navList;
};

export default createNavList;
