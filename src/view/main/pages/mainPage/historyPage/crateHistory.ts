import { IResHistory } from './../../../../../model/types/responceTypes';
import { getItems } from './../../../../../model/requests';
import createElement from '../../../../helpers/elements/element';

const createHistory = async (): Promise<void> => {
  const historyItems = <Array<IResHistory>> await getItems('history');
  const historyPage = <HTMLElement>document.getElementById('history-page');
  const historyInner = createElement('div', 'history__inner');
  const historyHeader = createElement('div', 'history__header');
  const headerOperation = createElement('div', 'history__header-operation');
  const headerNumber = createElement('div', 'history__header-number');
  const headerSum = createElement('div', 'history__header-sum');

  headerOperation.innerText = 'Тип операции';
  headerNumber.innerText = 'Номер карты';
  headerSum.innerText = 'Сумма операции';

  historyItems.map((item) => {
    const historyItem = createElement('div', 'history__item');
    const itemOperation = createElement('div', 'history__item-operation');
    const itemNumber = createElement('div', 'history__item-number');
    const itemSum = createElement('div', 'history__item-sum');

    itemOperation.innerText = `${item.paymentName}`;
    itemNumber.innerText = `${item.cardNumber}`;
    itemSum.innerText = `${item.sum.toFixed(2)}`;

    historyItem.append(itemOperation, itemNumber, itemSum);
    historyInner.append(historyItem);
  });

  historyHeader.append(headerOperation, headerNumber, headerSum);
  historyPage.append(historyHeader, historyInner);
};

export default createHistory;
