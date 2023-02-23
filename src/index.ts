import createApp from './view/app';
import './assets/styles/common.scss';
import './assets/styles/normalize.css';
import { router } from './model/router';

const root = document.querySelector('#root');
const app = createApp();

if (root) root.append(app);

// Update router
history.pushState('', '', '/login');
window.addEventListener('popstate', router);
window.addEventListener('DOMContentLoaded', router);



//router();
// initCurrenciesControls();
// initMetalsControls();
