import handleCreateCard from "../../../../../controller/servicesController";
import { getCurrentDate } from "../../../../../model/utils";
import createElement from "../../../../helpers/elements/element";

const createDepositForm = () => {
  const form = createElement('form', 'create-deposit-form', 'create-deposit-form');
  form.innerHTML = `
    <div class="form__item">
      <label for="deposit-name">Название вклада</label>
      <input class="deposit-name" id="deposit-name" type="text" required>
    </div>
    <div class="form__item">
      <label for="deposit-currency">Валюта вклада</label>
      <select class="deposit-currency" id="deposit-currency" required>
        <option value="usd" selected>USD</option>
        <option value="eur">EUR</option>
        <option value="rub">RUB</option>
      </select>
    </div>
    <div class="form__item">
      <label for="deposit-date">Дата открытия вклада</label>
      <input class="deposit-date" id="deposit-date" type="date" value=${getCurrentDate()} disabled>
    </div>
    <button class="button form__btn btn">Открыть вклад</button>
  `;

  form.addEventListener('submit', () => {
    console.log('Create deposit request')
  });

  return form;
}

export default createDepositForm;