import changePath from '../../../../controller/changePath';
import initCurrenciesControls from '../../../../controller/sidebar/currencyConverterController';
import { initMetalsControls } from '../../../../controller/sidebar/metallsController';
import Store from '../../../../model/store';
import { getUserId } from '../../../../model/userId';
import createButton from '../../../helpers/elements/button';
import createElement from '../../../helpers/elements/element';
import createInput from '../../../helpers/elements/input';
import { createLoginAppBlock, createFirstScreen, createSecondScreen } from './firstPage';
import './login.scss';


const createLoginPage = () => {
//   const store = new Store();

   const page = createElement('div', 'registration-page');
//   const form = createElement('div', 'registration-form');
//   const loginMsg = createElement('p', 'login-msg');
//   const loginInput = createInput('email', 'login-input');
//   const passwordInput = createInput('password', 'password-input');
//   const loginBtn = createButton('Вход', 'login-btn');
// const spanEnter = createElement('span')
//     spanEnter.textContent = "Вход"
//   const registrationBtn = createButton('Регистрация', 'registration-btn');

//   (async () => {
//     if (localStorage.getItem('token')) await store.checkAuth();
//     loginMsg.textContent = store.isAuth ? `Вы авторизированы как ${store.user.email}` : 'Требуется авторизация';
//   })();

//   loginInput.placeholder = 'Email';
//   passwordInput.placeholder = 'Password';

//   loginBtn.addEventListener('click', () => {
//     store.login(loginInput.value, passwordInput.value);
//     getUserId(store.user.id);
//     changePath('/');
//     initCurrenciesControls();
//     initMetalsControls();
//   });
//   registrationBtn.addEventListener('click', () => store.registration(loginInput.value, passwordInput.value));
    const fistScreen = createFirstScreen()
    const secondScreen = createSecondScreen()
    const aboutBlock = createLoginAppBlock()
    page.append(fistScreen)
    
    page.append(secondScreen)
    page.append(aboutBlock)
//   page.appendChild(form);
//   form.appendChild(loginMsg);
//   form.appendChild(loginInput);
//   form.appendChild(passwordInput);
//   form.appendChild(loginBtn);
//   form.appendChild(registrationBtn);


  return page;
};

export default createLoginPage;
