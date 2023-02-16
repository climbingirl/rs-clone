import createElement from '../../../helpers/elements/element';
import createModals from './modals/modals';
import createServicesItem from './servicesItem';

const services: {
  [key: string]: string;
} = {
  'create-card': 'Создать виртуальную карту',
  'open-deposit': 'Открыть вклад',
  'get-loan': 'Получить кредит',
};

const createServicesSection = (): HTMLElement => {
  const servicesSection = createElement('div', 'services');
  const servicesTitle = createElement('h2', 'services__title');
  const serrvicesInner = createElement('div', 'services__inner');
  const servicesItems = Object.entries(services).map((el) =>
    createServicesItem(el[0], el[1])
  );
  const modals = createModals(services);

  serrvicesInner.append(...servicesItems);
  servicesTitle.innerText = 'Онлайн услуги';

  servicesSection.prepend(servicesTitle);
  servicesSection.append(serrvicesInner);
  servicesSection.append(modals);
  return servicesSection;
};

export default createServicesSection;
