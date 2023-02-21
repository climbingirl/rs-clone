export interface IReqCard {
  user_id: string;
  cardType: string;
  name: string;
  date: string;
  currency: string;
  balance: number;
  moneyBack?: number;
  cvv: string;
}

export interface IReqCredit {
  user_id: string;
  name: string; //На недвижимость
  date: string; // 22.12.12
  term: number; // 10 (month)
  rate: number; //3(%)
  currency: string; //USD
  totalSum: number; // 40000
  paid: number; // 200
}

export interface IReqDeposit {
  user_id: string;
  name: string;
  date: string;
  term: number;
  rate: number;
  currency: string;
  totalSum: number;
}

export interface CurrencyStateConverter {
  baseCurrency: string;
  convertCurrency: string;
  baseQuantity: number;
  usd: number;
  eur: number;
}

export type Purpose = 'any' | 'car' | 'studying' | 'realty';

export type Currency = 'rub' | 'usd' | 'eur';

export type CardType = 'RSS Black' | 'RSS Gold' | 'RSS Platinum' | 'RSS Premium';

export type Loan = {
  [key in Currency]: {
    rate: number;
    minSum: number;
    maxSum: number;
  };
} & {
  purpose: string;
  minTerm: number;
  maxTerm: number;
};

export interface IDeposit {
  term: string;
  rate: {
    [key in Currency]: number;
  };
}

export interface IMetalRes {
  label: string;
  data: number[];
  type: string;
  dates: string[];
}

export interface IMetalChartType {
  label: string;
  data: number[];
  //type: string,
}

export type ChartConfig = {
  type: 'line' | 'bar';
  data: {
    datasets: IMetalChartType[];
    labels: string[];
  };
  options?: {};
};

/*data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }*/

export interface IUser {
  email: string;
  isActivated: boolean;
  id: string;
}


export interface IContactsData {
    name: string,
    gitLink: string,
    telegramLink: string
}