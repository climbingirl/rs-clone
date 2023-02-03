export interface ICard {
  type: string;
  name: string;
  date: string;
  iban: string;
  moneyBack?: number;
}

export interface IMoneyAccounts {
  type: string;
  name: string;
  date: string;
  iban: string;
  rate: number;
}

export interface CurrencyStateConverter {
    baseCurrency: string,
    convertCurrency: string,
    baseQuantity: number,
    usd: number,
    eur: number,
}