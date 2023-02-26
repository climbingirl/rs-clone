
import { Categoryes, getItems } from '../../../../../../model/requests';
import { IResCard, IResCredit } from '../../../../../../model/types/responceTypes';
import createPageComponent from './pageComponent';

const fillProductsSection = async (section: HTMLElement) => {
  section.appendChild(createPageComponent('Карты', <Array<IResCard>> await getItems(Categoryes.Cards)));
 // section.appendChild(createPageComponent('Кредиты', <Array<IResCredit>> await getItems('credits')));
};

export default fillProductsSection;
