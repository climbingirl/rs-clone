import { IMetalData } from "../../model/types/responceTypes"
import { BEL_TO_RUS, dayTimeStamp, metallsTypes, metallsTypesInRu,  } from "../../static/constants"

export const getLastThreeDays = () => {
    let today =  new Date()
    let endDate  = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
    let startDate = new Date(today.getTime() - dayTimeStamp * 2);
    return [
        `${startDate.getFullYear()}-${startDate.getMonth()+1}-${startDate.getDate()}`,
        endDate, 
    ]
}

export const defineMetal = (name: number) => {
    let nameMetal: string = '';
    Object.entries(metallsTypes).filter((metall) => {
        if (metall[1] === name) {
            let title = metall[0]
            Object.entries(metallsTypesInRu).filter((metallInRu) => {
                if (metallInRu[0] === title) {
                    nameMetal =  metallInRu[1]
                }
            })
        }
    })
    return nameMetal
}

export const filterMetalDataType = (dataMetal: IMetalData[], typeMet: number) => {
    let trData =  dataMetal.filter((metal) => metal.MetalId === typeMet)
    let datesExist = new Set(dataMetal.map((metal) => metal.Date.slice(0,10)))
    let dates = []
    for (let value of datesExist) dates.push(value);
    let label = defineMetal(typeMet);
    let data = trData.map((item) => Math.floor(item.Value * BEL_TO_RUS))
    let random = Math.random() * 10
    let type
    random > 2.5 ? type = 'line' : type = 'bar'
    let res = {
        label,
        data,
        type,
        dates
    }
    return res;
}