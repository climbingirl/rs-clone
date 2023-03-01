import { IMetalData } from '../../model/types/responceTypes';
import { BEL_TO_RUS, dayTimeStamp, metallsTypes, metallsTypesInRu } from '../../static/constants';

export const getLastThreeDays = () => {
  const today = new Date();
  const endDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const startDate = new Date(today.getTime() - dayTimeStamp * 2);
  return [`${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}`, endDate];
};

export const defineMetal = (name: number) => {
  let nameMetal = '';
  Object.entries(metallsTypes).filter((metall) => {
    if (metall[1] === name) {
      const title = metall[0];
      Object.entries(metallsTypesInRu).filter((metallInRu) => {
        if (metallInRu[0] === title) {
          nameMetal = metallInRu[1];
        }
      });
    }
  });
  return nameMetal;
};

export const filterMetalDataType = (dataMetal: IMetalData[], typeMet: number) => {
  const trData = dataMetal.filter((metal) => metal.MetalId === typeMet);
  const datesExist = new Set(dataMetal.map((metal) => metal.Date.slice(0, 10)));
  const dates = [];
  for (const value of datesExist) dates.push(value);
  const label = defineMetal(typeMet);
  const data = trData.map((item) => Math.floor(item.Value * BEL_TO_RUS));
  const random = Math.random() * 10;
  let type;
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  random > 2.5 ? (type = 'line') : (type = 'bar');
  const res = {
    label,
    data,
    type,
    dates,
  };
  return res;
};
