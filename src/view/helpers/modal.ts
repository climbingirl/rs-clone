import createButton from "./elements/button";
import createElement from "./elements/element";

export const createModal = (idName: string): HTMLElement => {
  const modal = createElement("div", "modal", idName);
  const message = createElement("div", "modal__message", "modal__message");
  const closeBtn = createButton("X", "modal__close-btn");

  modal.append(closeBtn);
  modal.append(message);

  closeBtn.addEventListener("click", closeModal);

  return modal;
};

export const closeModal = (): void => {
  const modal = <HTMLElement>document.querySelector(".modal.open");
  const overlay = <HTMLElement>document.getElementById("overlay");
  const message = <HTMLElement>document.getElementById("modal__message");
  modal.classList.remove("open");
  overlay.classList.remove("open");
  message.innerText = "";
}
