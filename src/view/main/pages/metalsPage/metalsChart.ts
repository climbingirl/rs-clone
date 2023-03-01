import { getMetalData, makeConfig } from '../../../../controller/sidebar/metallsController';
import { ChartConfig } from '../../../../model/types/types';
import Chart from 'chart.js/auto';
import createElement from '../../../helpers/elements/element';
import createInput from '../../../helpers/elements/input';
import { defineMetal } from '../../../helpers/functions';
import { baseDate, endDate, metallsTypes } from '../../../../static/constants';

const drawChart = (config: ChartConfig, el: HTMLElement, type: number) => {
  const ctx = document.createElement('canvas');
  ctx.classList.add('canvas');
  ctx.dataset.type = String(type);
  new Chart(ctx, config);
  if (el) {
    el.append(ctx);
  }
};

const initChart = async (type: number, el: HTMLElement, dates?: string[]) => {
  const metalsData = await getMetalData([type], dates);
  const config = makeConfig(metalsData, dates);
  drawChart(config, el, type);
};

export const createMetalsPage = (): HTMLElement => {
  const metalsPage = createElement('div', 'metals-page');
  for (let i = 0; i < Object.entries(metallsTypes).length; i++) {
    const chartSection = drawChartSection(i);
    metalsPage.append(chartSection);
  }

  return metalsPage;
};

const updateChart = (type: string, dates: string[]) => {
  const metalChart = document.querySelector(`.metals[data-type='${type}']`) as HTMLElement;
  const chart = document.querySelector(`.canvas[data-type='${type}']`) as HTMLElement;
  if (metalChart && chart) {
    metalChart.removeChild(chart);
    initChart(Number(type), metalChart, dates);
  }
};

const listenForm = (form: HTMLFormElement, dates: string[]) => {
  form?.addEventListener('change', (e) => {
    const target = e.target as HTMLInputElement;
    if (target) {
      const value = target.value;
      const parent = target.parentNode?.parentNode as HTMLElement;
      if (parent) {
        const type = parent.dataset.type;
        if (type) {
          if (target.classList.contains('start-date')) {
            dates.splice(0, 1, value);
          } else {
            dates.splice(1, 1, value);
          }
          updateChart(type, dates);
        }
      }
    }
  });
};

const drawChartSection = (type: number) => {
  const metalsSection = createElement('div', 'metals');
  metalsSection.dataset.type = String(type);
  const metalsTitle = createElement('h3', 'metals__title');
  const title = defineMetal(type);
  metalsTitle.textContent = title;
  const form = document.createElement('form');
  const inputStartDate = createInput('date', 'start-date');
  const inputEnsDate = createInput('date', 'end-date');
  form.append(inputStartDate, inputEnsDate);
  metalsSection.append(metalsTitle, form);
  const dates = [];
  inputStartDate.value = baseDate;
  inputEnsDate.value = endDate;
  dates.push(inputStartDate.value, inputEnsDate.value);
  listenForm(form, dates);
  initChart(type, metalsSection, dates);
  return metalsSection;
};
