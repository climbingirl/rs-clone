import { currencyConverterState } from "../controller/sidebar/currencyConverterController";

export const K_INCREASE = 1.1;

export const getCurrencyRates = async () => {
    const result = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    const data = await result.json()
    const res = await data;
    currencyConverterState.usd = res.Valute.USD.Value
    currencyConverterState.eur = res.Valute.EUR.Value
    return currencyConverterState;
}

