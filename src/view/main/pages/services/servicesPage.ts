import createElement from "../../../helpers/elements/element";
import createServicesSection from "./servicesSection";
import './servicesPage.scss'

const createServicesPage = ():HTMLElement => {
  const servicesPage = createElement('div', 'services-page');
  const servicesSection = createServicesSection();

  servicesPage.append(servicesSection);
  return servicesPage;
};


export default createServicesPage;