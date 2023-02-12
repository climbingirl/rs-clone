import { IResCard, IResCredit } from './types/responceTypes';
import { IReqCard, IReqCredit } from './types/types';

const baseUrl = 'http://localhost:3000';

export const getItems = async (category: string): Promise<Array<IResCard | IResCredit>> => {
  const response = await fetch(`${baseUrl}/products/${category}`);
  const items = await response.json();
  return items;
};

export const getItem = async (category: string, id: number): Promise<IResCard | IResCredit> => {
  const response = await fetch(`${baseUrl}/products/${category}/${id}`);
  const item = await response.json();
  return item;
};

export const createItem = async (category: string, body: IReqCard | IReqCredit) => {
  await fetch(`${baseUrl}/products/${category}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
};

export const updateItem = async (category: string, id: string, body: IReqCard | IReqCredit) => {
  await fetch(`${baseUrl}/products/${category}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
};

export const deleteItem = async (category: string, id: string) => {
  await fetch(`${baseUrl}/products/${category}/${id}`, {
    method: 'DELETE',
  });
};

//export getUserId = async ()

export const getDinamicMetallPrices = async (dates: string[]) => {
  const result = await fetch(
    `https://www.nbrb.by/api/bankingots/prices?startdate=${dates[0]}&enddate=${dates[1]}`,
  );
  const data = await result.json();
  const res = await data;
  return res;
};
