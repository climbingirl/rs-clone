import createPageItem from './pageItem';
import openArrow from '../../../../../../assets/images/open-arrow.svg';
import rotateArrow from '../rotateArrow';
import { IResCard, IResCredit } from '../../../../../../model/types/responceTypes';
import createElement from '../../../../../helpers/elements/element';

const createPageComponent = (name: string, items: Array<IResCard> | Array<IResCredit>) => {

  const showItems = (scope: HTMLElement, e: Event) => {
    rotateArrow(<HTMLImageElement>e.target);

    const componentsItems = scope.querySelectorAll<HTMLElement>('.page-item');  
    componentsItems.forEach((item) => {
      item.style.display = item.style.display === 'none' ? 'flex' : 'none';
    });
  };

  const pageComponent = createElement('div', 'page-component');
  const componentTitle = createElement('h1', 'page-component-title');
  const componentArrow = <HTMLImageElement>createElement('img', 'page-component-arrow');

  componentTitle.textContent = name;
  componentArrow.src = openArrow;

  pageComponent.appendChild(componentTitle);
  componentTitle.appendChild(componentArrow);
  items.forEach((item) => {
    pageComponent.appendChild(createPageItem(item));
  });

  componentArrow.addEventListener('click', (e: Event) => showItems(pageComponent, e));

  componentArrow.style.marginLeft = '30px';

  return pageComponent;
};

export default createPageComponent;
