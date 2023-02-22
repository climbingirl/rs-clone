
import createElement from '../../../helpers/elements/element';
import { createLoginAppBlock, createFirstScreen, createSecondScreen } from './firstPage';
import './login.scss';


const createLoginPage = () => {
    const page = createElement('div', 'registration-page');
    const fistScreen = createFirstScreen()
    const secondScreen = createSecondScreen()
    const aboutBlock = createLoginAppBlock()
    // page.append(fistScreen)
    // page.append(secondScreen)
    page.append(aboutBlock)

    return page;
};

export default createLoginPage;
