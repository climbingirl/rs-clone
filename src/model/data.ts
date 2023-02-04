import { ICard, IMoneyAccounts } from './types';

export const cards: Array<ICard> = [
  { type: 'card', name: 'Visa', date: '01.01.22', iban: '111111111111', moneyBack: 2 },
  { type: 'card', name: 'Visa2', date: '01.01.22', iban: '111111111111' },
  { type: 'card', name: 'Visa3', date: '01.01.22', iban: '111111111111' },
  { type: 'card', name: 'Visa4', date: '01.01.22', iban: '111111111111' },
];

export const moneyAccounts: Array<IMoneyAccounts> = [
  {
    type: 'IMoneyAccounts',
    name: 'ЛПЦ Карточный счет физических лиц (BYN)',
    date: '22.10.11',
    iban: 'BY83BPSB3014F000000005813344',
    rate: 2,
  },
  {
    type: 'IMoneyAccounts',
    name: 'ЛПЦ Карточный счет физических лиц (BYN)2',
    date: '02.10.11',
    iban: 'BY83BPSB3014F000000005813344',
    rate: 4.5,
  },
];
