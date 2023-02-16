import createElement from '../../../../helpers/elements/element';
import { createModal } from '../../../../helpers/modal';
import createCardForm from './createCard';
import createDepositForm from './createDeposit';
import createLoanForm from './createLoan';

const createModals = (items: object): HTMLElement => {
  const modals = createElement('div', 'madals', 'modals');
  const modalsItem = Object.keys(items).map((item) => createModal(`${item}-modal`));
  const [modalCard, modalDeposit, modalLoan] = modalsItem;

  modalCard.prepend(createCardForm());
  modalDeposit.prepend(createDepositForm());
  modalLoan.prepend(createLoanForm());

  modals.append(...modalsItem);
  return modals;
};

export default createModals;