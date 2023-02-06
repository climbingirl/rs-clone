import createElement from "../../../helpers/elements/element";
import createModals from "./modals/modals";

const services: {
  [key: string]: string;
} = {
  'create-card': 'Открыть виртуальную карту',
  'create-deposit': 'Открыть вклад',
  'get-loan': 'Получить кредит',
}

const createServicesSection = (): HTMLElement => {
  const servicesSection = createElement('div', 'services');
  const servicesTitle = createElement('h3', 'services__title');
  const serrvicesInner = createElement('div', 'services__inner');
  const servicesItems = Object.entries(services).map((el) => createServicesItem(el[0], el[1]))
  const modals = createModals(services);

  serrvicesInner.append(...servicesItems);
  servicesTitle.innerText = 'Онлайн услуги';

  servicesSection.prepend(servicesTitle);
  servicesSection.append(serrvicesInner);
  servicesSection.append(modals);
  return servicesSection;
}

const createServicesItem = (idName:string, text:string):HTMLElement => {
  const item = createElement('div', 'services__item', idName);
  item.innerText = text;
  item.addEventListener('click', (): void => {
    const modal = <HTMLElement>document.getElementById(`${idName}-modal`);
    if (modal) {
      modal.style.display = 'block';
    }
  });

  return item;
}

export default createServicesSection;
