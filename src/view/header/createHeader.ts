import logoHeader from '../../assets/images/rs_school.svg';

import './header.scss'

const createHeader = () => {
    return `
        <header class="header">
            <div class="header__logo">
                <img src=${logoHeader} class="header__logo-svg">
            </div>
            <nav class="menu">
                <ul class="menu__list">
                    <li class="menu__item">
                        <a class="menu__link">Главная</a>
                    </li>
                    <li class="menu__item">
                        <a class="menu__link">Платежи</a>
                    </li>
                    <li class="menu__item">
                        <a class="menu__link">Переводы</a>
                    </li>
                    <li class="menu__item">
                        <a class="menu__link">История</a>
                    </li>
                    <li class="menu__item">
                        <a class="menu__link">Все продукты</a>
                    </li>
                </ul>
            </nav>
            <div class="cabinet">
                <div class="cabinet__logo"></div>
                <h5 class="cabinet__name">RSS</h5>
                <button class="cabinet__out"></button>
            </div>
        </header>
    `
}

export default createHeader;