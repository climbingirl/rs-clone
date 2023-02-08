import handleCreateCard from "../../../../../controller/servicesController";
import { getCurrentDate } from "../../../../../model/utils";
import createElement from "../../../../helpers/elements/element";

const createCardForm = () => {
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
      <label for="card-date">Дата открытия карты</label>
      <input class="card-date" id="card-date" type="date" value=${getCurrentDate()} disabled>
    </div>
    <button class="button form__btn btn">Открыть карту</button>
  `;

  form.addEventListener('submit', handleCreateCard);

  return form;
}

export default createCardForm;