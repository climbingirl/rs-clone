import createApp from './view/app';
import '../src/app.scss';
import initCurrenciesControls from './controller/currency-converter';

const root = document.querySelector('#root');
const app = createApp();

if (root) root.append(app);

initCurrenciesControls();
