import logoHeader from '../../assets/images/logo.svg';

import './header.scss';

const createHeader = () => {
  return `
        <header class="header">
            <div class="header__logo">
                <img src=${logoHeader} class="header__logo-svg">
            </div>
            <div class="cabinet">
                <div class="cabinet__logo"></div>
                <h5 class="cabinet__name">RSS</h5>
                <button class="cabinet__out"></button>
            </div>
        </header>
    `;
};

export default createHeader;
