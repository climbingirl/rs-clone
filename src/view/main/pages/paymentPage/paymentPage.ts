import { createtePaymentModal } from './paymentModal';

import createElement from '../../../helpers/elements/element';
import createPaymentItem from './paumentItems.ts/paymentItems';

export const createPaymentPage = () => {
  const section = createElement('section', 'payment-section');
  const modal = createtePaymentModal();

  section.append(
    modal, createPaymentItem('Оплата телефона', modal),
  );

  return section;
};
