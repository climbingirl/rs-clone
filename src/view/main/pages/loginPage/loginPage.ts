import Store from '../../../../model/store';
import createButton from '../../../helpers/elements/button';
import createElement from '../../../helpers/elements/element';
import createInput from '../../../helpers/elements/input';

const createLoginPage = () => {
  const store = new Store();

  const page = createElement('div', 'registration-page');

  const form = createElement('div', 'registration-form');
  const loginInput = createInput('email', 'login-input');
  const passwordInput = createInput('password', 'password-input');
  const loginBtn = createButton('Вход', 'login-btn');
  const registrationBtn = createButton('Регистрация', 'registration-btn');
  loginInput.placeholder = 'Email';
  passwordInput.placeholder = 'Password';

  loginBtn.addEventListener('click', () => store.login(loginInput.value, passwordInput.value));
  registrationBtn.addEventListener('click', () => store.registration(loginInput.value, passwordInput.value));

  page.appendChild(form);
  form.appendChild(loginInput);
  form.appendChild(passwordInput);
  form.appendChild(loginBtn);
  form.appendChild(registrationBtn);

  return page;
};

export default createLoginPage;
