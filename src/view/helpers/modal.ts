import createElement from './elements/element';

export const createModal = (idName: string): HTMLElement => {
  const modal = createElement('div', 'modal', idName);
  const message = createElement('div', 'modal__message', `${idName}__message`);
  const closeBtn = createElement('div', 'modal__close-btn', 'modal__close-btn');
  closeBtn.innerHTML = '&#10006;';

  modal.append(closeBtn);
  modal.append(message);

  closeBtn.addEventListener('click', closeModal);

  return modal;
};

export const closeModal = (): void => {
  const modal = <HTMLElement>document.querySelector('.modal.open');
  const overlay = <HTMLElement>document.getElementById('overlay');
  const message = <HTMLElement>modal.querySelector('.modal__message');
  modal.classList.remove('open');
  overlay.classList.remove('open');
  message.innerText = '';
};
