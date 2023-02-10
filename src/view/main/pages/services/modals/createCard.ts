import handleCreateCard from "../../../../../controller/services-controllers/card-controller";
import { getCurrentDate } from "../../../../../model/utils";
import createElement from "../../../../helpers/elements/element";

const createCardForm = (): HTMLElement => {
  const form = createElement('form', 'create-card-form', 'create-card-form');
  form.innerHTML = `
    <div class="form__item">
      <label for="card-name">Название карты</label>
      <input class="card-name" id="card-name" type="text" required>
    </div>
    <div class="form__item">
      <label for="card-currency">Валюта карты</label>
      <select class="card-currency" id="card-currency" required>
        <option value="usd" selected>USD</option>
        <option value="eur">EUR</option>
        <option value="rub">RUB</option>
      </select>
    </div>
    <div class="form__item">
      <div class="card-date" id="card-date">Дата открытия карты: ${getCurrentDate()}</div>
    </div>
    <button class="form__btn btn-primary">Открыть карту</button>
  `;

  form.addEventListener('submit', handleCreateCard);

  return form;
}

export default createCardForm;