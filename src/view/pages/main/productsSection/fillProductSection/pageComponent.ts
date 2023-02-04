import { IResCard, IResCredit } from '../../../../../model/types/responceTypes';
import createElement from '../../../../helpers/elements/element';
import createPageItem from './pageItem';

const createPageComponent = (name: string, items: Array<IResCard> | Array<IResCredit>) => {
  const showItems = (scope: HTMLElement, e: Event) => {
    const componentsItems = scope.querySelectorAll<HTMLElement>('.page-item');
    const checker = <HTMLElement>e.target;
    if (checker)
      checker.style.writingMode =
        checker.style.writingMode === 'vertical-rl' ? 'horizontal-tb' : 'vertical-rl';
    componentsItems.forEach((item) => {
      item.style.display = item.style.display === 'none' ? 'block' : 'none';
    });
  };

  const pageComponent = createElement('div', 'page-component');
  const componentTitle = createElement('h1', 'page-component-title');
  const componentCheck = createElement('span', 'page-component-controller');

  componentTitle.textContent = name;
  componentCheck.textContent = '>';

  pageComponent.appendChild(componentTitle);
  componentTitle.appendChild(componentCheck);
  items.forEach((item) => {
    pageComponent.appendChild(createPageItem(item));
  });

  componentCheck.addEventListener('click', (e: Event) => showItems(pageComponent, e));

  componentCheck.style.marginLeft = '30px';
  componentCheck.style.writingMode = 'vertical-rl';

  return pageComponent;
};

export default createPageComponent;
