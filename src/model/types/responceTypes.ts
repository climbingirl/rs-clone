export interface IResCard {
  _id: string;
  type: string;
  name: string;
  date: string;
  currency: string;
  balance: number;
  moneyBack?: number;
  iban: string;
  __v: number;
}

export interface IResCredit {
  _id: string;
  type: string; //Credit
  name: string; //На недвижимость
  date: string; // 22.12.12
  term: number; // 10 (month)
  rate: number; //3(%)
  currency: string; //USD
  totalSum: number; // 40000
  paid: number; // 200
  iban: string;
  __v: number;
}

export interface IResMoneyAccounts {
  type: string;
  name: string;
  date: string;
  iban: string;
  rate: number;
}

export interface IMetalData {
    Date: string,
    MetalId: number,
    Value: number
}
