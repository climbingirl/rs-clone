import handleCreateCard from "../../../../../controller/servicesController";
import createElement from "../../../../helpers/elements/element";

const createCardForm = () => {
  const form = createElement('form', 'create-form', 'create-card-form');
  form.innerHTML = `
    <div class="form__item">
      <label for="card-name">Название карты</label>
      <input class="card-name" id="card-name" type="text" value="MasterCard" required>
    </div>
    <div class="form__item">
      <label for="card-balance">Баланс карты</label>
      <input class="card-balance" id="card-balance" type="number" value="300" required>
    </div>
    <div class="form__item">
      <label for="card-date">Дата открытия карты</label>
      <input class="card-date" id="card-date" type="date" value="2023-01-05" required>
    </div>
    <div class="form__item">
      <label for="card-currency">Валюта карты</label>
      <input class="card-currency" id="card-currency" type="text" value="USD" required>
    </div>
    <button class="button form__btn btn">Открыть карту</button>
  `;

  form.addEventListener('submit', handleCreateCard);

  return form;
}

export default createCardForm;