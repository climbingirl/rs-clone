import { getItems } from '../../../../../model/requests';
import { IResCard, IResCredit } from '../../../../../model/types/responceTypes';
import createTransfersCardDetails from './createTransferCardDetails';
import createPayLoanDetails from './createPayLoanDetaails';

const renderDetails = async (tarnsferIdName: string): Promise<void> => {
  const detailsInner = <HTMLElement>document.getElementById('details__inner');

  switch (tarnsferIdName) {
    case 'transfer-card':
      detailsInner.innerHTML = '';
      detailsInner.append(createTransfersCardDetails(tarnsferIdName, <Array<IResCard>> await getItems('cards')));
      break;
    case 'pay-loan':
      detailsInner.innerHTML = '';
      detailsInner.append(createPayLoanDetails(tarnsferIdName,
        <Array<IResCard>> await getItems('cards'), <Array<IResCredit>> await getItems('credits')));
      break;
  }
};

export default renderDetails;