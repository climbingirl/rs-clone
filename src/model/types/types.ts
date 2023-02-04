export interface IReqCard {
  type: string;
  name: string;
  date: string;
  currency: string;
  balance: number;
  moneyBack?: number;
  iban: string;
}

export interface IReqCredit {
  type: string; //credit
  name: string; //На недвижимость
  date: string; // 22.12.12
  term: number; // 10 (month)
  rate: number; //3(%)
  currency: string; //USD
  totalSum: number; // 40000
  paid: number; // 200
  iban: string;
}

export interface CurrencyStateConverter {
  baseCurrency: string,
  convertCurrency: string,
  baseQuantity: number,
  usd: number,
  eur: number,
}