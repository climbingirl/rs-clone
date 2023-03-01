import { IUser } from './types';

export interface IResHistory {
  type: string;
  user_id: string;
  cardNumber: number;
  cardName: string;
  paymentName: string;
  sum: number;
  data: string;
  __v: number;
}

export interface IResCard {
  _id: string;
  type: string;
  user_id: string;
  cardType: string;
  name: string;
  date: string;
  currency: string;
  balance: number;
  moneyBack?: number;
  cvv: string;
  iban: string;
  __v: number;
}

export interface IResCredit {
  _id: string;
  type: string; //Credit
  user_id: string;
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

export interface IResDeposit {
  _id: string;
  type: string;
  user_id: string;
  name: string;
  date: string;
  term: number;
  rate: number;
  currency: string;
  totalSum: number;
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
  Date: string;
  MetalId: number;
  Value: number;
}

export interface IResAuth {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
