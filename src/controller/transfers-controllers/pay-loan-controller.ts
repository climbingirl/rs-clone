import { IReqCredit, IReqHistory } from './../../model/types/types';
import { currencyConverterState } from '../sidebar/currencyConverterController';
import { createItem, deleteItem, updateItem } from '../../model/requests';
import { Currency, IReqCard } from '../../model/types/types';
import { IResCard, IResCredit } from '../../model/types/responceTypes';
import { importUserId } from '../../model/userId';
import getCardNumber from '../cardNumber/getFullCardNumber';
import { getCurrentDate } from '../../model/utils';

let rates: {
  [key in Currency]: number;
};

const handlePayLoan = async (card: IResCard, loan: IResCredit, sum: number): Promise<void> => {
  const detailsInner = <HTMLElement>document.getElementById('details__inner');

  rates = {
    usd: currencyConverterState.usd,
    eur: currencyConverterState.eur,
    rub: 1,
  };

  const baseCurrency = card.currency.toLowerCase();
  const convertCurrency = loan.currency.toLowerCase();
  const transferBaseCurrencySum: number = sum;
  const transferConvertCurrencySum: number = baseCurrency === convertCurrency ? sum :
    convertSum(baseCurrency, convertCurrency, transferBaseCurrencySum);
  const cardBalance: number = subtractSum(card.balance, transferBaseCurrencySum);
  const loanPaidSum: number = addSum(loan.paid, transferConvertCurrencySum);

  const cardData: IReqCard = {
    user_id: card.user_id,
    cardType: card.cardType,
    name: card.name,
    date: card.date,
    currency: card.currency,
    balance: cardBalance,
    cvv: card.cvv,
  };

  const loanData: IReqCredit = {
    user_id: loan.user_id,
    name: loan.name,
    date: loan.date,
    term: loan.term,
    rate: loan.rate,
    currency: loan.currency,
    totalSum: loan.totalSum,
    paid: loanPaidSum,
  };

  const historyData: IReqHistory = {
    user_id: importUserId(),
    cardNumber: +getCardNumber(card._id),
    cardName: card.name,
    paymentName: 'оплата кредита',
    sum: sum,
    data: getCurrentDate(),
  };

  await updateItem('cards', card._id, cardData);
  await updateItem('credits', loan._id, loanData);

  if (loan.totalSum <= loanPaidSum) {
    await deleteItem('credits', loan._id);
    detailsInner.innerHTML = 'Операция произведена успешно. Поздравляем, вы выплатили всю сумму кредита!';
  } else {
    detailsInner.innerHTML = 'Операция произведена успешно!';
  }

  await createItem('history', historyData);
};

function subtractSum(a: number, b: number): number {
  return ((+a.toFixed(2) * 100) - (+b.toFixed(2) * 100)) / 100;
}

function addSum(a: number, b: number): number {
  return ((+a.toFixed(2) * 100) + (+b.toFixed(2) * 100)) / 100;
}

function convertSum(baseCur: string, convertCur: string, baseSum: number): number {
  const basePrice = rates[baseCur as Currency];
  const convertPrice = rates[convertCur as Currency];
  const convertRate = basePrice / convertPrice;
  const convertedSum = convertRate * baseSum;
  return +convertedSum.toFixed(2);
}

export default handlePayLoan;