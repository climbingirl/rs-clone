import { currency, IDeposit } from "../../../../../model/types/types";
import { getCurrentDate } from "../../../../../model/utils";
import createElement from "../../../../helpers/elements/element";

const deposits: { [key: string]: IDeposit } = {
  1: { term: '1 месяц', rate: { rub: 4.8, usd: 0.1, eur: 0.1 } },
  3: { term: '2 месяца', rate: { rub: 5.25, usd: 0.2, eur: 0.2 } },
  6: { term: '6 месяцев', rate: { rub: 6.2, usd: 0.3, eur: 0.3 } },
  12: { term: '1 год', rate: { rub: 6.8, usd: 0.4, eur: 0.4 } },
  18: { term: '1 год 6 месяцев', rate: { rub: 6.9, usd: 0.5, eur: 0.5 } },
  24: { term: '2 года', rate: { rub: 7, usd: 0.6, eur: 0.6 } },
  36: { term: '3 года', rate: { rub: 7.2, usd: 0.7, eur: 0.7 } },
};

const minSum: { [key in currency]: number } = {
  rub: 100000,
  usd: 1500,
  eur: 1000,
};

let selectedTerm: number = 1;
let selectedCurrency: currency = "rub";

const createDepositForm = (): HTMLElement => {
  const form = createElement('form', 'open-deposit-form', 'open-deposit-form');
  const formItemDepositName = createElement("div", "form__item");
  const labelDepositName = createElement("label");
  const depositName = <HTMLInputElement>(
    createElement("input", "deposit-name", "deposit-name")
  );
  const formItemTerm = createElement("div", "form__item");
  const labelTerm = createElement("label");
  const selectTerm = <HTMLSelectElement>(
    createElement("select", "deposit-term", "deposit-term")
  );
  const formItemCurrency = createElement("div", "form__item");
  const labelCurrency = createElement("label");
  const selectCurrency = <HTMLSelectElement>(
    createElement("select", "deposit-currency", "deposit-currency")
  );
  const depositInfo = createElement("div", "deposit__info", "deposit__info");

  labelDepositName.innerText = 'Название вклада';
  labelTerm.innerText = 'Срок вклада';
  labelCurrency.innerText = 'Валюта вклада';
  depositName.type = 'text';
  depositName.required = true;
  selectTerm.required = true;
  selectCurrency.required = true;
  depositInfo.innerHTML = renderDepositInfo(selectedTerm, selectedCurrency);

  for (const key of Object.keys(deposits)) {
    const option = new Option(deposits[key].term, key);
    if (+key === selectedTerm) option.selected = true;
    selectTerm.append(option);
  }

  for (const key of ["rub", "usd", "eur"]) {
    const option = new Option(key.toUpperCase(), key);
    if (key === selectedCurrency) option.selected = true;
    selectCurrency.append(option);
  }

  labelDepositName.append(depositName);
  formItemDepositName.append(labelDepositName);
  labelTerm.append(selectTerm);
  formItemTerm.append(labelTerm);
  labelCurrency.append(selectCurrency);
  formItemCurrency.append(labelCurrency);
  form.prepend(formItemDepositName);
  form.append(formItemTerm);
  form.append(formItemCurrency);
  form.append(depositInfo);

  selectTerm.addEventListener("change", (event: Event): void => {
    const selectedOption = +(<HTMLOptionElement>event.target).value;
    selectedTerm = selectedOption;
    depositInfo.innerHTML = renderDepositInfo(selectedTerm, selectedCurrency)
  });

  selectCurrency.addEventListener("change", (event: Event): void => {
    const selectedOption = (<HTMLOptionElement>event.target).value as currency;
    selectedCurrency = selectedOption;
    depositInfo.innerHTML = renderDepositInfo(selectedTerm, selectedCurrency)
  });

  form.addEventListener('submit', () => {
    console.log('Create deposit request')
  });

  return form;
}

function renderDepositInfo(
  selectedTerm: number,
  selectedCurrency: currency
): string {
  return `
    <div class="form__item">
      <label>Сумма вклада</label>
      <input class="deposit-sum" id="deposit-sum" type="number" min="${minSum[selectedCurrency]}"
       placeholder="от ${minSum[selectedCurrency]} ${selectedCurrency.toUpperCase()}" required>
    </div>
    <div class="form__item">
      <div class="loan-rate" id="loan-rate">Максимальная ставка: ${deposits[selectedTerm].rate[selectedCurrency]}%</div>
    </div>
    <div class="form__item">
      <div class="deposit-date" id="deposit-date">Дата открытия вклада: ${getCurrentDate()}</div>
    </div>
    <button class="form__btn btn-primary">Открыть вклад</button>
  `;
}

export default createDepositForm;