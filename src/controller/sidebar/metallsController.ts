import { getDinamicMetallPrices } from "../../model/requests";
import { filterMetalDataType, getLastThreeDays } from "../../view/helpers/functions";
import Chart from 'chart.js/auto';
import { metallsTypes } from "../../static/constants";
import { ChartConfig, IMetalRes } from "../../model/types/types";
import changePath from "../changePath";
import createButton from "../../view/helpers/elements/button";

export const getMetalData = async (types: number[], dates?: string[]) => {
    if (!dates) {
        dates = getLastThreeDays(); 
    }
    const metalData = await getDinamicMetallPrices(dates);
    const datatoDraw: IMetalRes[] = [];
    types.forEach((type) => {
        const metalDataTransform: IMetalRes = filterMetalDataType(metalData, type);
        datatoDraw.push(metalDataTransform)

    })
    return datatoDraw
}

export const makeConfig = (data: IMetalRes[], dates?: string[]) => {
    if (!dates) {
        dates = getLastThreeDays(); 
    }
    let labels = data[0].dates
    let sets = []
    let datasetsArr = data
    for (let i=0; i< data.length; i++) {
        sets.push({
            data: data[i].data,
            label: data[i].label,
            type: data[i].type
        })
    }
    let config: ChartConfig = {
        type: 'bar',
        data: {
            datasets: datasetsArr,
            labels: labels
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Стоимость драгоценных металлов, за 1 гр',
                    responsive: true,
                    padding: {
                        top: 20,
                        bottom: 20
                    }
                }
            }
        }
    }
    return config;
    
}

const drawChartToSidebar = (config: ChartConfig) => {
    const ctx = document.createElement('canvas');
        new Chart(
        ctx,
        config
    )
    const sidebar = document.querySelector('.right-sidebar');
    if (sidebar) {
        sidebar.append(ctx);
        const link = createButton('Динамика курсов', 'link')
        link.classList.add('link_margin')
        link.dataset.path = 'metals'
        link.addEventListener('click', (e) => changePath(e));
        sidebar.append(link)
        
    }
}

export const initMetalsControls = async () => {
    let metals = []
    for (const [key, value] of Object.entries(metallsTypes)) {
        metals.push(value)
    }
    const metalsData = await getMetalData(metals)
    const config = makeConfig(metalsData)
    drawChartToSidebar(config)
}


