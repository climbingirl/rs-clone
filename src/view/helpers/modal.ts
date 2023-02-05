import createButton from "./elements/button";
import createElement from "./elements/element";


const createModal = (idName: string): HTMLElement => {
  const modal = createElement('div', 'modal', idName);
  const message = createElement('div', 'modal__message');
  const closeBtn = createButton('X', 'modal__close-btn');

  modal.style.display = 'none';
  modal.append(closeBtn);
  modal.append(message);

  closeBtn.addEventListener('click', (event) => {
    const modal = <HTMLElement>(<HTMLElement>event.target).closest('.modal');
    modal.style.display = 'none';

  });

  return modal;
};

export default createModal;