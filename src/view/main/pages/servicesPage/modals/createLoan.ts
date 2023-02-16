import handleGetLoan from '../../../../../controller/services-controllers/loan-controller';
import { Currency, Loan, Purpose } from '../../../../../model/types/types';
import { getCurrentDate } from '../../../../../model/utils';
import createElement from '../../../../helpers/elements/element';

const loans: {
  [key in Purpose]: Loan;
} = {
  any: {
    purpose: 'на любые цели',
    minTerm: 3,
    maxTerm: 60,
    rub: { rate: 8, minSum: 30000, maxSum: 20000000 },
    usd: { rate: 5, minSum: 500, maxSum: 300000 },
    eur: { rate: 5, minSum: 500, maxSum: 300000 },
  },
  car: {
    purpose: 'на авто',
    minTerm: 3,
    maxTerm: 120,
    rub: { rate: 5, minSum: 100000, maxSum: 15000000 },
    usd: { rate: 3, minSum: 1500, maxSum: 250000 },
    eur: { rate: 3, minSum: 1500, maxSum: 250000 },
  },
  studying: {
    purpose: 'на учёбу',
    minTerm: 3,
    maxTerm: 180,
    rub: { rate: 3, minSum: 30000, maxSum: 10000000 },
    usd: { rate: 2, minSum: 500, maxSum: 150000 },
    eur: { rate: 2, minSum: 500, maxSum: 150000 },
  },
  realty: {
    purpose: 'на недвижимость',
    minTerm: 6,
    maxTerm: 360,
    rub: { rate: 11, minSum: 100000, maxSum: 30000000 },
    usd: { rate: 7, minSum: 1500, maxSum: 500000 },
    eur: { rate: 7, minSum: 1500, maxSum: 500000 },
  },
};

let selectedPurpose: Purpose = 'any';
let selectedCurrency: Currency = 'rub';

const createLoanForm = (): HTMLElement => {
  const form = createElement('form', 'get-loan-form', 'get-loan-form');
  const formItemPurpose = createElement('div', 'form__item');
  const labelPurpose = createElement('label');
  const selectPurpose = <HTMLSelectElement>(createElement('select', 'loan-purpose', 'loan-purpose'));
  const formItemCurrency = createElement('div', 'form__item');
  const labelCurrency = createElement('label');
  const selectCurrency = <HTMLSelectElement>(createElement('select', 'loan-currency', 'loan-currency'));
  const loanInfo = createElement('div', 'loan__info', 'loan__info');
  labelPurpose.innerText = 'Цель кредита ';
  labelCurrency.innerText = 'Валюта кредита ';
  selectPurpose.required = true;
  selectCurrency.required = true;
  loanInfo.innerHTML = renderLoanInfo(selectedPurpose, selectedCurrency);

  for (const key of Object.keys(loans)) {
    const option = new Option(loans[key as Purpose].purpose, key);
    if (key === selectedPurpose) option.selected = true;
    selectPurpose.append(option);
  }

  for (const key of ['rub', 'usd', 'eur']) {
    const option = new Option(key.toUpperCase(), key);
    if (key === selectedCurrency) option.selected = true;
    selectCurrency.append(option);
  }

  labelPurpose.append(selectPurpose);
  formItemPurpose.append(labelPurpose);
  labelCurrency.append(selectCurrency);
  formItemCurrency.append(labelCurrency);
  form.prepend(formItemPurpose);
  form.append(formItemCurrency);
  form.append(loanInfo);

  selectPurpose.addEventListener('change', (event: Event): void => {
    const selectedOption = <Purpose>(<HTMLOptionElement>event.target).value;
    selectedPurpose = selectedOption;
    loanInfo.innerHTML = renderLoanInfo(selectedPurpose, selectedCurrency);
  });

  selectCurrency.addEventListener('change', (event: Event): void => {
    const selectedOption = <Currency>(<HTMLOptionElement>event.target).value;
    selectedCurrency = selectedOption;
    loanInfo.innerHTML = renderLoanInfo(selectedPurpose, selectedCurrency);
  });

  form.addEventListener('submit', handleGetLoan);

  return form;
};

function renderLoanInfo(
  purpose: Purpose,
  currency: Currency,
): string {
  return `
    <div class="form__item">
      <label for="loan-sum">Сумма кредита</label>
      <input class="loan-sum" id="loan-sum" type="number"
        min="${loans[purpose][currency].minSum}"
        max="${loans[purpose][currency].maxSum}"
        placeholder="от ${loans[selectedPurpose][currency].minSum} до ${
  loans[purpose][currency].maxSum}" required>
    </div>
    <div class="form__item">
      <label for="loan-term">Срок кредита (в месяцах)</label>
      <input class="loan-term" id="loan-term" type="number"
        min="${loans[purpose].minTerm}"
        max="${loans[purpose].maxTerm}"
        placeholder="от ${loans[purpose].minTerm} до ${loans[purpose].maxTerm}"
        required>
    </div>
    <div class="form__item">
      <div class="loan-rate">Годовая ставка:
        <span class="loan-rate__info" id="loan-rate__info">${loans[purpose][currency].rate}</span>%
      </div>
    </div>
    <div class="form__item">
      <div class="loan-date">Дата получения кредита:
        <span class="loan-date__info" id="loan-date__info">${getCurrentDate()}</span>
      </div>
    </div>
    <button class="form__btn btn-primary">Получить кредит</button>
  `;
}

export default createLoanForm;
