import createApp from './view/app';
import initCurrenciesControls from './controller/currency-converter';
import './assets/styles/normalize.css';
import './assets/styles/common.scss';
import { router } from './model/router';

const root = document.querySelector('#root');
const app = createApp();

if (root) root.append(app);

// Update router
window.addEventListener('popstate', router);
window.addEventListener('DOMContentLoaded', router);

initCurrenciesControls();
