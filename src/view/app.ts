import { cards, moneyAccounts } from "../model/data";
import createHeader from "./header/createHeader";
import createMain from "./main/createMain";
import createMainPage from "./pages/main/page";
import createSidebar from "./right-sidebar/sidebar";

const createApp = () => {
    const app = document.createElement('div');
    app.classList.add('app');
    const container = document.createElement('div');
    container.classList.add('container');
    const header = createHeader();
    const main = createMain();
    const sidebar = createSidebar();
    container.insertAdjacentHTML('beforeend', sidebar);
    container.insertAdjacentHTML('afterbegin', main);
    app.insertAdjacentHTML('afterbegin', header);
    app.insertAdjacentElement('beforeend', container)
    const mainPage = createMainPage(cards, moneyAccounts);
    container.insertAdjacentElement('afterbegin', mainPage)
    return app;
}

export default createApp;