import handleGetLoan from "../../../../../controller/services-controllers/loan-controller";
import { ILoan } from "../../../../../model/types/types";
import { getCurrentDate } from "../../../../../model/utils";
import createElement from "../../../../helpers/elements/element";

const loans: {
  [key: string]: ILoan;
} = {
  'any': { porpose: 'на любые цели', rate: 8, minSum: 30000, maxSum: 20000000, minTerm: 3, maxTerm: 60, },
  'car': { porpose: 'на авто',rate: 5, minSum: 100000, maxSum: 15000000, minTerm: 3, maxTerm: 120, },
  'studying': { porpose: 'на учёбу',rate: 3, minSum: 30000, maxSum: 10000000, minTerm: 3, maxTerm: 180, },
  'realty': { porpose: 'на недвижимость',rate: 11, minSum: 100000, maxSum: 30000000, minTerm: 6, maxTerm: 360, },
}

let selectedPurpose: string = 'any';

const createLoanForm = (): HTMLElement => {
  const form = createElement('form', 'get-loan-form', 'get-loan-form');
  const labelPurpose= createElement('label');
  const selectPurpose = <HTMLSelectElement>createElement('select', 'loan-purpose', 'loan-purpose');
  const loanInfo = createElement('div', 'loan__info', 'loan__info');
  labelPurpose.innerText = 'Цель кредита ';
  selectPurpose.required = true;
  loanInfo.innerHTML = renderLoanInfo();

  for (const key of Object.keys(loans)) {
    const option = new Option(loans[key].porpose, key);
    if (key === selectedPurpose) option.selected = true;
    selectPurpose.append(option);
  }

  labelPurpose.append(selectPurpose);
  form.prepend(labelPurpose);
  form.append(loanInfo);

  selectPurpose.addEventListener('change', (event: Event): void => {
    const selectedOption = (<HTMLOptionElement>event.target).value;
    selectedPurpose = selectedOption;
    loanInfo.innerHTML = renderLoanInfo();
  });

  form.addEventListener('submit', handleGetLoan);

  return form;
}

function renderLoanInfo(): string {
  return `
    <div class="form__item">
      <label for="loan-sum">Сумма кредита</label>
      <input class="loan-sum" id="loan-sum" type="number"
      min="${loans[selectedPurpose].minSum}" max="${loans[selectedPurpose].maxSum}"
      placeholder="от ${(loans[selectedPurpose].minSum) / 1000} тыс до ${(loans[selectedPurpose].maxSum) / 1000000} млн" required>
    </div>
    <div class="form__item">
      <label for="loan-term">Срок кредита (в месяцах)</label>
      <input class="loan-term" id="loan-term" type="number"
        min="${loans[selectedPurpose].minTerm}" max="${loans[selectedPurpose].maxTerm}"
        placeholder="от ${loans[selectedPurpose].minTerm} до ${loans[selectedPurpose].maxTerm}" required>
    </div>
    <div class="loan-rate" id="loan-rate">Годовая ставка: ${loans[selectedPurpose].rate}%</div>
    <div class="loan-date" id="loan-date">Дата получения кредита: ${getCurrentDate()}</div>
    <button class="button form__btn btn">Получить кредит</button>
  `;
}

export default createLoanForm;