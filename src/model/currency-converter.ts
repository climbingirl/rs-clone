import { currencyConverterState } from "../controller/currency-converter";

export const K_INCREASE = 1.1;

export const getCurrencyRates = async () => {
    const result = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    const data = await result.json()
    const res = await data;
    console.log(res);
    currencyConverterState.usd = res.Valute.USD.Value
    currencyConverterState.eur = res.Valute.EUR.Value
    console.log(currencyConverterState)
    return currencyConverterState;
}



