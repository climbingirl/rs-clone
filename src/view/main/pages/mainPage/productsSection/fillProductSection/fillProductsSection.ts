import { IResDeposit } from './../../../../../../model/types/responceTypes';
import { getItems } from '../../../../../../model/requests';
import { IResCard, IResCredit } from '../../../../../../model/types/responceTypes';
import createPageComponent from './pageComponent';

const fillProductsSection = async (section: HTMLElement) => {
  section.append(
    createPageComponent('Карты', <Array<IResCard>> await getItems('cards')),
    createPageComponent('Кредиты', <Array<IResCredit>> await getItems('credits')),
    createPageComponent('Депозиты', <Array<IResDeposit>> await getItems('deposits')),
  );
};

export default fillProductsSection;
