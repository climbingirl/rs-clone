import { IReqCredit } from './../../model/types/types';
import { createItem } from '../../model/requests';

const handleGetLoan = async (event: Event): Promise<void> => {
  event.preventDefault();
  const form = <HTMLElement>event.target;
  const loanName = <HTMLSelectElement>document.getElementById('loan-purpose');
  const loanDate = <HTMLElement>document.getElementById('loan-date');
  const loanTerm = <HTMLInputElement>document.getElementById('loan-term');
  const loanRate = <HTMLElement>document.getElementById('loan-rate');
  const loanSum = <HTMLInputElement>document.getElementById('loan-sum');

  const loanData: IReqCredit = {
    type: 'credit',
    name: loanName.value,
    date: loanDate.innerText,
    rate: +loanRate.innerText,
    term: +loanTerm.value,
    currency: 'RUB',
    totalSum: +loanSum.value,
    paid: 0,
    iban: "BY000000001023425",
  };

  await createItem('credits', loanData);

  form.style.display = 'none';
  loanTerm.value = '';
  loanSum.value = '';
  const message = <HTMLElement>document.getElementById('modal__message');
  message.innerText = `Поздравляем вы получили кредит ${loanData.name} на сумму ${loanData.totalSum} рублей!`;
}

export default handleGetLoan;