import createElement from '../../../helpers/elements/element';
import createTransfersSection from './transfersSection';
import './transfersPage.scss';

const createTransfersPage = (): HTMLElement => {
  const transfersPage = createElement('div', 'transfers-page',);
  const transfersSection = createTransfersSection();
  const detailsSection = createElement('div', 'details');
  const detailsInner = createElement('div', 'details__inner', 'details__inner');

  transfersPage.prepend(transfersSection);
  detailsSection.append(detailsInner);
  transfersPage.append(detailsSection);
  return transfersPage;
};

export default createTransfersPage;