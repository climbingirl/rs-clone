import { getCurrentDate } from './../../model/utils';
import { createItem } from './../../model/requests';
import { IReqHistory } from './../../model/types/types';
import { currencyConverterState } from '../sidebar/currencyConverterController';
import { updateItem } from '../../model/requests';
import { Currency, IReqCard } from '../../model/types/types';
import { IResCard } from '../../model/types/responceTypes';
import { importUserId } from '../../model/userId';
import getCardNumber from '../cardNumber/getFullCardNumber';

let rates: {
  [key in Currency]: number;
};

const handleTransfersCard = async (cardFrom: IResCard, cardTo: IResCard, sum: number): Promise<void> => {
  const detailsInner = <HTMLElement>document.getElementById('details__inner');

  rates = {
    usd: currencyConverterState.usd,
    eur: currencyConverterState.eur,
    rub: 1,
  };

  const baseCurrency = cardFrom.currency.toLowerCase();
  const convertCurrency = cardTo.currency.toLowerCase();
  const transferBaseCurrencySum: number = sum;
  const transferConvertCurrencySum: number = baseCurrency === convertCurrency ? sum :
    convertSum(baseCurrency, convertCurrency, transferBaseCurrencySum);
  const cardFromBalance: number = subtractSum(cardFrom.balance, transferBaseCurrencySum);
  const cardToBalance: number = addSum(cardTo.balance, transferConvertCurrencySum);

  const cardFromData: IReqCard = {
    user_id: cardFrom.user_id,
    cardType: cardFrom.cardType,
    name: cardFrom.name,
    date: cardFrom.date,
    currency: cardFrom.currency,
    balance: cardFromBalance,
    cvv: cardFrom.cvv,
  };

  const cardToData: IReqCard = {
    user_id: cardTo.user_id,
    cardType: cardTo.cardType,
    name: cardTo.name,
    date: cardTo.date,
    currency: cardTo.currency,
    balance: cardToBalance,
    cvv: cardTo.cvv,
  };

  const historyData: IReqHistory = {
    user_id: importUserId(),
    cardNumber: +getCardNumber(cardFrom._id),
    cardName: cardFrom.name,
    paymentName: 'перевод между картами',
    sum: sum,
    data: getCurrentDate(),
  };

  await updateItem('cards', cardFrom._id, cardFromData);
  await updateItem('cards', cardTo._id, cardToData);
  detailsInner.innerHTML = 'Операция произведена успешно!';
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

export default handleTransfersCard;