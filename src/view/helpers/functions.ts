import { IMetalData } from "../../model/types/responceTypes"

const transformDate = (date: string) => {
    let length = date.length
    return date.slice(0, length - 9)
}

export const filterMetalDataType = (data: IMetalData[], type: number) => {
    let trData =  data.filter((metal) => metal.MetalId === type)
    let labels = []
    labels = trData.map((item) => transformDate(item.Date))
    let values = trData.map((item) => item.Value)
    return {
        labels,
        values
    }
}