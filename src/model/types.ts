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
