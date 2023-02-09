import { getMetalData, makeConfig } from "../../../../controller/sidebar/metallsController";
import { ChartConfig } from "../../../../model/types/types";
import Chart from 'chart.js/auto';
import createElement from "../../../helpers/elements/element";
import createInput from "../../../helpers/elements/input";
import { defineMetal } from "../../../helpers/functions";

const createChartSection = (type: number) => {
    const servicesSection = createElement('div', 'metals');
    const servicesTitle = createElement('h3', 'metals__title');
    const servicesInner = createElement('div', 'metals__inner');
    const title = defineMetal(type)
    servicesTitle.textContent = title;
    
    const inputStartDate = createInput('date', 'start-date') 
    const inputEnsDate = createInput('date', 'end-date') 
    servicesInner.append(servicesTitle, inputStartDate, inputEnsDate)
    servicesSection.append(servicesInner)
    inputStartDate.value = '2023-02-01'
    inputEnsDate.value = '2023-02-08'
    let dates = []
    dates.push(inputStartDate.value,inputEnsDate.value)
    inputStartDate.addEventListener('input', () => {
        console.log(inputStartDate.value)
    })
    console.log(`days  ${dates}`)
    initChart(type, servicesInner, dates)
    return servicesSection;
}

const drawChart = (config: ChartConfig, el: HTMLElement) => {
    const ctx = document.createElement('canvas');
        new Chart(
        ctx,
        config
    )
    if (el) {
        el.append(ctx);
    }
}


const initChart = async (type: number, el: HTMLElement, dates?: string[]) => {
    const metalsData = await getMetalData([type], dates)
    console.log(metalsData)
    let config = makeConfig(metalsData, dates)
    drawChart(config, el)
}


   
export const createMetalsPage = ():HTMLElement => {
  const servicesPage = createElement('div', 'metals-page');
    for (let i=0; i< 3; i++) {
        const servicesSection = createChartSection(i);
        console.log(i)
        servicesPage.append(servicesSection);
    }

  return servicesPage;
};

