import { IMetalData } from "../../model/types/responceTypes"
import { BEL_TO_RUS, dayTimeStamp, metallsTypes, metallsTypesInRu, months } from "../../static/constants"

export const translateDate = (dates: string[]) => {
    return dates.map((date) => {
        let trMonth
        let month = date.slice(0,3)
        trMonth = defineMonth(month)
        if (trMonth) {
            trMonth = changeLastLetter(trMonth)
        }
        let day = date.slice(4,7)
        let res = `${day} ${trMonth}`
        return res
    })
}


export const getLastThreeDays = () => {
    let today =  new Date()
    let endDate  = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
    let startDate = new Date(today.getTime() - dayTimeStamp * 2);
    console.log(`First - ${startDate.getFullYear()}-${startDate.getMonth()+1}-${startDate.getDate()}, ${endDate}`)
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

const changeLastLetter = (month: string) => {
    let lastLetter = month?.slice(-1)
    switch(lastLetter) {
        case 'ь' || 'й' :
            lastLetter = 'я'
            month = `${month.slice(0, month.length - 1)}${lastLetter}`
            console.log(`month is ${month}` )
        break
        case 'т' || 'я' : 
            lastLetter = 'а'
            month = `${month}${lastLetter}`
            console.log(`month is ${month}` )
        break
    } 
    return month
}


export const defineMonth = (month: string) => {
    for (const [key, value] of Object.entries(months)) {
        if (key === month) {
            return value
        }
    }
}

const cutDate = (date: Date) => {
    return date.toString().slice(4,15);
}

export const getDatesArr2 = (dates: string[]) => {
    const firstDay = new Date(dates[0])
    const lastDate = new Date(dates[1])
    const timeDistance = lastDate.getTime() - firstDay.getTime()
    let timeDistanceLength = timeDistance / 86400000
    let res = []
    res.push(cutDate(firstDay))
    let baseDay = firstDay;
    for (let i =0; i< timeDistanceLength; i++) {
        let nextDay = (new Date(baseDay.getTime() + 86400000))
        res.push(cutDate(nextDay))
        baseDay = nextDay
    }
    console.log(res)
    return res
}

getDatesArr2(['2023-02-01', '2023-02-09'])


export const filterMetalDataType = (dataMetal: IMetalData[], typeMet: number) => {
    let trData =  dataMetal.filter((metal) => metal.MetalId === typeMet)
    
    let datesExist = new Set(dataMetal.map((metal) => metal.Date.slice(0,10)))
    let dates = []
    for (let value of datesExist) dates.push(value);
    console.log(dates)
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
    console.log(res)
    return res;
}