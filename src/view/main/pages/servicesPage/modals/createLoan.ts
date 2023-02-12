import handleGetLoan from "../../../../../controller/services-controllers/loan-controller";
import { currency, ILoan, purpose } from "../../../../../model/types/types";
import { getCurrentDate } from "../../../../../model/utils";
import createElement from "../../../../helpers/elements/element";

const loans: {
  [key in purpose]: ILoan;
} = {
  any: {
    purpose: "на любые цели",
    minTerm: 3,
    maxTerm: 60,
    rub: { rate: 8, minSum: 30000, maxSum: 20000000 },
    usd: { rate: 5, minSum: 500, maxSum: 300000 },
    eur: { rate: 5, minSum: 500, maxSum: 300000 },
  },
  car: {
    purpose: "на авто",
    minTerm: 3,
    maxTerm: 120,
    rub: { rate: 5, minSum: 100000, maxSum: 15000000 },
    usd: { rate: 3, minSum: 1500, maxSum: 250000 },
    eur: { rate: 3, minSum: 1500, maxSum: 250000 },
  },
  studying: {
    purpose: "на учёбу",
    minTerm: 3,
    maxTerm: 180,
    rub: { rate: 3, minSum: 30000, maxSum: 10000000 },
    usd: { rate: 2, minSum: 500, maxSum: 150000 },
    eur: { rate: 2, minSum: 500, maxSum: 150000 },
  },
  realty: {
    purpose: "на недвижимость",
    minTerm: 6,
    maxTerm: 360,
    rub: { rate: 11, minSum: 100000, maxSum: 30000000 },
    usd: { rate: 7, minSum: 1500, maxSum: 500000 },
    eur: { rate: 7, minSum: 1500, maxSum: 500000 },
  },
};

let selectedPurpose: purpose = "any";
let selectedCurrency: currency = "rub";

const createLoanForm = (): HTMLElement => {
  const form = createElement("form", "get-loan-form", "get-loan-form");
  const forItemPurpose = createElement("div", "form__item");
  const labelPurpose = createElement("label");
  const selectPurpose = <HTMLSelectElement>(
    createElement("select", "loan-purpose", "loan-purpose")
  );
  const forItemCurrency = createElement("div", "form__item");
  const labelCurrency = createElement("label");
  const selectCurrency = <HTMLSelectElement>(
    createElement("select", "loan-currency", "loan-currency")
  );
  const loanInfo = createElement("div", "loan__info", "loan__info");
  labelPurpose.innerText = "Цель кредита ";
  labelCurrency.innerText = "Валюта кредита ";
  selectPurpose.required = true;
  selectCurrency.required = true;
  loanInfo.innerHTML = renderLoanInfo(selectedPurpose, selectedCurrency);

  for (const key of Object.keys(loans)) {
    const option = new Option(loans[key as purpose].purpose, key);
    if (key === selectedPurpose) option.selected = true;
    selectPurpose.append(option);
  }

  for (const key of ["rub", "usd", "eur"]) {
    const option = new Option(key.toUpperCase(), key);
    if (key === selectedPurpose) option.selected = true;
    selectCurrency.append(option);
  }

  labelPurpose.append(selectPurpose);
  forItemPurpose.append(labelPurpose);
  labelCurrency.append(selectCurrency);
  forItemCurrency.append(labelCurrency);
  form.prepend(forItemPurpose);
  form.append(forItemCurrency);
  form.append(loanInfo);

  selectPurpose.addEventListener("change", (event: Event): void => {
    const selectedOption = (<HTMLOptionElement>event.target).value as purpose;
    selectedPurpose = selectedOption;
    loanInfo.innerHTML = renderLoanInfo(selectedPurpose, selectedCurrency);
  });

  selectCurrency.addEventListener("change", (event: Event): void => {
    const selectedOption = (<HTMLOptionElement>event.target).value as currency;
    selectedCurrency = selectedOption;
    loanInfo.innerHTML = renderLoanInfo(selectedPurpose, selectedCurrency);
  });

  form.addEventListener("submit", handleGetLoan);

  return form;
};

function renderLoanInfo(
  selectedPurpose: purpose,
  selectedCurrency: currency
): string {
  return `
    <div class="form__item">
      <label for="loan-sum">Сумма кредита</label>
      <input class="loan-sum" id="loan-sum" type="number"
      min="${loans[selectedPurpose][selectedCurrency].minSum}" max="${
    loans[selectedPurpose][selectedCurrency].maxSum
  }"
      placeholder="от ${loans[selectedPurpose][selectedCurrency].minSum} до ${
    loans[selectedPurpose][selectedCurrency].maxSum
  }" required>
    </div>
    <div class="form__item">
      <label for="loan-term">Срок кредита (в месяцах)</label>
      <input class="loan-term" id="loan-term" type="number"
        min="${loans[selectedPurpose].minTerm}" max="${
    loans[selectedPurpose].maxTerm
  }"
        placeholder="от ${loans[selectedPurpose].minTerm} до ${
    loans[selectedPurpose].maxTerm
  }" required>
    </div>
    <div class="loan-rate" id="loan-rate">Годовая ставка: ${
      loans[selectedPurpose][selectedCurrency].rate
    }%</div>
    <div class="form__item">
      <div class="loan-date" id="loan-date">Дата получения кредита: ${getCurrentDate()}</div>
    </div>
    <button class="form__btn btn-primary">Получить кредит</button>
  `;
}

export default createLoanForm;
