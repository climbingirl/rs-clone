import createElement from '../../../helpers/elements/element';
import renderDetails from './details/renderDetals';

const transfers: {
  [key: string]: string;
} = {
  'transfer-card': 'Перевод между своими картами',
  'pay-loan': 'Оплата кредита',
};

const createTransfersSection = (): HTMLElement => {
  const transfersSection = createElement('div', 'transfers');
  const transfersTitle = createElement('h2', 'transfers__title');
  const transfersInner = createElement('div', 'transfers__inner');
  const transfersItems: HTMLElement[] = Object.entries(transfers).map((el): HTMLElement => {
    const item = createElement('div', 'transfers__item', el[0]);
    item.innerText = el[1];
    return item;
  });

  transfersTitle.innerText = 'Переводы и платежи';
  transfersInner.append(...transfersItems);
  transfersSection.prepend(transfersTitle);
  transfersSection.append(transfersInner);

  transfersInner.addEventListener('click', (event: Event) => {
    const target = <HTMLElement>event.target;
    renderDetails(target.id);
  });

  return transfersSection;
};

export default createTransfersSection;