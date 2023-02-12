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
  baseCurrency: string;
  convertCurrency: string;
  baseQuantity: number;
  usd: number;
  eur: number;
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
