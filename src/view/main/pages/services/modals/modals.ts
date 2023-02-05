import createElement from "../../../../helpers/elements/element";
import createModal from "../../../../helpers/modal";
import createCardForm from "./createCard";


const createModals = (items: object): HTMLElement => {
  const modals = createElement('div', 'madals', 'modals');
  const modalsItem = Object.keys(items).map((item) => createModal(`${item}-modal`));
  const [modalCard] = modalsItem;
  modalCard.prepend(createCardForm());

  modals.append(...modalsItem);
  return modals;
}

export default createModals;