import { currencyConverterState } from './../sidebar/currencyConverterController';
import { updateItem } from '../../model/requests';
import { IReqCard } from '../../model/types/types';
import { IResCard } from './../../model/types/responceTypes';


const handleTransfersCard = async (cardFrom: IResCard, cardTo: IResCard, sum: number): Promise<void> => {
  //const transfersCardDetails = <HTMLElement>document.getElementById('transfer-card-details');
  //const form = <HTMLFormElement>document.getElementById('transfer-card-details__form');
  const usdRate = currencyConverterState.usd;
  const eurRate = currencyConverterState.eur;
  let transferSum: number;
  let cardFromBalance: number;
  let cardToBalance: number;
console.log(50 / usdRate)
  if (cardFrom.currency !== cardTo.currency) {
    // converter
    //transferSum = new;
    // cardFromBalance = new
    // cardToBalance = new
  } else {
    //transferSum = sum;
    // cardFromBalance = new
    // cardToBalance = new
  }

  const cardFromData: IReqCard = {
    user_id: cardFrom.user_id,
    cardType: cardFrom.cardType,
    name: cardFrom.name,
    date: cardFrom.date,
    currency: cardFrom.currency,
    balance: 300563,
    cvv: cardFrom.cvv,
  };

  const cardToData: IReqCard = {
    user_id: cardTo.user_id,
    cardType: cardTo.cardType,
    name: cardTo.name,
    date: cardTo.date,
    currency: cardTo.currency,
    balance: 300563,
    cvv: cardTo.cvv,
  };


  //await updateItem('cards', cardFrom._id, cardFromData);

};

export default handleTransfersCard;