import createApp from "./view/app";
import { cards, moneyAccounts } from './model/data';
import createMainPage from './view/pages/main/page';
import initCurrenciesControls from "./controller/currency-converter";
import '../src/app.scss'


const root = document.querySelector('#root');
const app = createApp();
const mainPage = createMainPage(cards, moneyAccounts);

if (root) root.appendChild(mainPage);
if (root) root.append(app)

initCurrenciesControls()





