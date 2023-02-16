import { IReqCredit } from './../../model/types/types';
import { createItem } from '../../model/requests';
import { importUserId } from '../../model/userId';

const handleGetLoan = async (event: Event): Promise<void> => {
  event.preventDefault();
  const form = <HTMLElement>event.target;
  const loanName = <HTMLSelectElement>document.getElementById('loan-purpose');
  const loanDate = <HTMLElement>document.getElementById('loan-date__info');
  const loanTerm = <HTMLInputElement>document.getElementById('loan-term');
  const loanRate = <HTMLElement>document.getElementById('loan-rate__info');
  const loanCurrency = <HTMLSelectElement>document.getElementById('loan-currency');
  const loanSum = <HTMLInputElement>document.getElementById('loan-sum');
  const message = <HTMLElement>document.getElementById('get-loan-modal__message');

  const loanData: IReqCredit = {
    user_id: importUserId(),
    name: loanName.options[loanName.selectedIndex].innerText,
    date: loanDate.innerText,
    term: +loanTerm.value,
    rate: +loanRate.innerText,
    currency: loanCurrency.value.toUpperCase(),
    totalSum: +loanSum.value,
    paid: 0,
  };

  await createItem('credits', loanData);

  form.style.display = 'none';
  loanTerm.value = '';
  loanSum.value = '';
  message.innerText = `Поздравляем вы получили кредит ${loanData.name} на сумму ${
    loanData.totalSum} ${loanData.currency}!`;
};

export default handleGetLoan;
