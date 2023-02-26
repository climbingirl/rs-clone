import createElement from '../../../../helpers/elements/element';

const createPaymentItem = (itemTitle: string, modal: HTMLElement) => {
  const pyamentItem = createElement('p', 'payments-item');
  pyamentItem.textContent = itemTitle;

  pyamentItem.addEventListener('click', (): void => {
    modal.style.display = modal.style.display === 'none' ? 'block' : 'none';

    const overlay = document.querySelector<HTMLElement>('overlay');
    if (overlay) overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
  });

  return pyamentItem;
};

export default createPaymentItem;
