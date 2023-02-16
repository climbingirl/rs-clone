import createElement from '../../../helpers/elements/element';

const createServicesItem = (idName: string, text: string): HTMLElement => {
  const item = createElement('div', 'services__item', idName);
  item.innerText = text;
  item.addEventListener('click', (): void => {
    const modal = <HTMLElement>document.getElementById(`${idName}-modal`);
    const form = <HTMLElement>document.getElementById(`${idName}-form`);
    const overlay = <HTMLElement>document.getElementById('overlay');

    if (modal) {
      form.style.display = 'block';
      modal.classList.add('open');
      overlay.classList.add('open');
    }
  });

  return item;
};

export default createServicesItem;