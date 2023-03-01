import { createItem } from '../../model/requests';
import { importUserId } from '../../model/userId';
import { IReqDeposit } from './../../model/types/types';

const handleOpenDeposit = async (event: Event): Promise<void> => {
  event.preventDefault();
  const form = <HTMLElement>event.target;
  const depositName = <HTMLInputElement>document.getElementById('deposit-name');
  const depositDate = <HTMLElement>document.getElementById('deposit-date__info');
  const depositTerm = <HTMLInputElement>document.getElementById('deposit-term');
  const depositRate = <HTMLElement>document.getElementById('deposit-rate__info');
  const depositCurrency = <HTMLSelectElement>document.getElementById('deposit-currency');
  const depositSum = <HTMLInputElement>document.getElementById('deposit-sum');
  const message = <HTMLElement>document.getElementById('open-deposit-modal__message');

  const depositData: IReqDeposit = {
    user_id: importUserId(),
    name: depositName.value,
    date: depositDate.innerText,
    term: +depositTerm.value,
    rate: +depositRate.innerText,
    currency: depositCurrency.value.toUpperCase(),
    totalSum: +depositSum.value,
  };

  await createItem('deposits', depositData);

  form.style.display = 'none';
  depositName.value = '';
  depositSum.value = '';
  message.innerText = `Поздравляем вы окрыли вклад ${depositData.name} на сумму ${
    depositData.totalSum} ${depositData.currency}!`;
};

export default handleOpenDeposit;