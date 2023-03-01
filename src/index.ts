import createApp from './view/app';
import './assets/styles/common.scss';
import './assets/styles/normalize.css';
import { router } from './model/router';


const root = document.querySelector('#root');
const app = createApp();

//const head = document.getElementsByTagName('head')[0];
// const mapScript = <HTMLScriptElement>createElement('script');
// mapScript.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=c9970c09-bdbc-48c2-bcdd-4a295f696dc9';
//head.append(mapScript);
// ymaps.ready(init);

if (root) root.append(app);

// Update router
history.pushState('', '', '/login');
window.addEventListener('popstate', router);
window.addEventListener('DOMContentLoaded', router);



//router();
// initCurrenciesControls();
// initMetalsControls();
