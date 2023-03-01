import createElement from '../../../../helpers/elements/element';
import createHistory from './crateHistory';
import './historyPage.scss';

const createhistoryPage = ():HTMLElement => {
  const historyPage = createElement('div', 'history-page', 'history-page');
  const historyTitle = createElement('h2', 'history__title');
  historyTitle.innerText = 'История операций';
  historyPage.prepend(historyTitle);
  createHistory();
  return historyPage;
};


export default createhistoryPage;