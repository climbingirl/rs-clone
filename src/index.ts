import { cards, moneyAccounts } from './model/data';
import createMainPage from './view/pages/main/page';

const root = document.querySelector('#root');

const mainPage = createMainPage(cards, moneyAccounts);

if (root) root.appendChild(mainPage);