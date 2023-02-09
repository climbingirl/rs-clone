import { getDinamicMetallPrices } from "../../model/requests";
import { defineMetal, filterMetalDataType, getDatesArr2, getLastThreeDays, translateDate } from "../../view/helpers/functions";
import Chart from 'chart.js/auto';
import createElement from "../../view/helpers/elements/element";
import { metallsTypes } from "../../static/constants";
import { ChartConfig, IMetalChartType, IMetalRes } from "../../model/types/types";
import changePath from "../changePath";

export const getMetalData = async (types: number[], dates?: string[]) => {
    if (!dates) {
        dates = getLastThreeDays(); 
    }
    const metalData = await getDinamicMetallPrices(dates);
    const datatoDraw: IMetalRes[] = [];
    types.forEach((type) => {
        const metalDataTransform: IMetalRes = filterMetalDataType(metalData, type);
        console.log(metalDataTransform)
        datatoDraw.push(metalDataTransform)

    })
    return datatoDraw
}

export const makeConfig = (data: IMetalRes[], dates?: string[]) => {
    if (!dates) {
        dates = getLastThreeDays(); 
    }
    console.log(dates)
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
    console.log(config)
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
        const link = document.createElement('a')
        link.classList.add('link')
        link.textContent = 'Динамика курсов'
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


