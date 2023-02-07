import { getDinamicMetallPrices } from "../../model/requests";
import { filterMetalDataType } from "../../view/helpers/functions";
import Chart from 'chart.js/auto';
import createElement from "../../view/helpers/elements/element";

const getToday = () => {
    let date =  new Date()
    let endDate  = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDay()}`
    let startDate = new Date(date.getTime() - 604800000);
    return [
        `${startDate.getFullYear()}/${startDate.getMonth()+1}/${startDate.getDay()}`, 
        `${date.getFullYear()}/${date.getMonth()+1}/${date.getDay()}`
         
    ]
}

const getMetalData = async () => {
    const date = getToday();
    const metalData = await getDinamicMetallPrices(date);
    console.log(filterMetalDataType(metalData, 1))
    const ctx = createElement('div', 'ctx', 'ctx')
    


//   new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });
}

export const initMetalsControls = () => {
    getMetalData()
}