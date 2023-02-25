import { getItems } from '../../../../../model/requests';
import { IResCard } from '../../../../../model/types/responceTypes';
import createTransfersCardDetails from './createTransferCardDetails';

const renderDetails = async (tarnsferIdName: string): Promise<void> => {
  const detailsInner = <HTMLElement>document.getElementById('details__inner');

  switch (tarnsferIdName) {
    case 'transfer-card':
      detailsInner.innerHTML = '';
      detailsInner.append(createTransfersCardDetails(tarnsferIdName, <Array<IResCard>> await getItems('cards')));
      break;
    case 'pay-loan':
      detailsInner.innerHTML = 'pay-loan';
      break;
  }
};

export default renderDetails;