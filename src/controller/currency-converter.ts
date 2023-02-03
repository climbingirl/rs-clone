import { getCurrencyRates, K_INCREASE } from "../model/currency-converter";
import { CurrencyStateConverter } from "../model/types/interfaces";
import renderCurrencyConverter from "../view/right-sidebar/currency-converter/currency-converter";
import renderCurrencyTable from "../view/right-sidebar/currency-table/currency-table";

export let currencyConverterState = {
    baseCurrency: 'rub',
    convertCurrency: 'usd',
    baseQuantity: 1,
    usd: 0,
    eur: 0,
}

const updateCurrencyTable = (currencies: CurrencyStateConverter) => {
    for (let currencyName in currencies) { 
        const salePrice = document.querySelector(`.currency-table__item[data-currency=${currencyName}] > .currency-table_sale`)
        const buyPrice = document.querySelector(`.currency-table__item[data-currency=${currencyName}] > .currency-table_buy`)
        if (salePrice && buyPrice) {
            salePrice.textContent = String(currencies.usd)
            buyPrice.textContent = String(currencies.usd * K_INCREASE) 
        }
    }
}

const setActiveBtn = (elems: NodeListOf<Element>, curr: string) => {
    elems.forEach((btn:Element) => {
        btn.classList.remove('converter-block__btn_active')
        if (btn.getAttribute('data-currency') === curr ) {
            btn.classList.add('converter-block__btn_active')
        }
    })
}

const updateConverterQuantuty = () => {
    const base: HTMLInputElement | null = document.querySelector('#base-quantity')
    const result: HTMLInputElement | null = document.querySelector('#result-quantity')
    console.log(base)
    if (base && result) {
        base.value = String(currencyConverterState.baseQuantity);
        let k = getCurrencyRatio();
        result.value = String(Number(currencyConverterState.baseQuantity * k).toFixed(3));
    }
}
    

const getCurrencyRatio = () => {
    let base = 1;
    let k = 1
    let resToGet = currencyConverterState.convertCurrency
    console.log(resToGet)
    if (currencyConverterState.baseCurrency !== currencyConverterState.convertCurrency) {
        const currenciesArr = Object.entries(currencyConverterState);
        for ( let i=0; i<currenciesArr.length; i++) {
            if (currenciesArr[i][0] === resToGet) {
                //k = base / currenciesArr[i][1]
            }
        }
        console.log(k)
    } 
    
    return k
}



const setActiveConverterBaseBtns = () => {
    const convertBaseBtns = document.querySelectorAll('.converter-block__btn_base');
    
    if (convertBaseBtns) {
        convertBaseBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                const dataCurrency = btn.getAttribute('data-currency');
                console.log(currencyConverterState);
                
                if (dataCurrency) {
                    currencyConverterState.baseCurrency = dataCurrency
                    const curr = currencyConverterState.baseCurrency
                    console.log(currencyConverterState)
                    setActiveBtn(convertBaseBtns, curr)
                    updateConverterQuantuty()
                }
            })
        })
    }
}

const setActiveConverterGetBtns = () => {
    const convertGetBtns = document.querySelectorAll('.converter-block__btn_get');
    if (convertGetBtns) {
        convertGetBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                const dataCurrency = btn.getAttribute('data-currency');
                if (dataCurrency) {
                    currencyConverterState.convertCurrency = dataCurrency
                    const curr = currencyConverterState.convertCurrency
                    console.log(currencyConverterState)
                    setActiveBtn(convertGetBtns, curr)
                    updateConverterQuantuty()
                }
            })
        })
    }
}



export const initCurrenciesControls = async () => {
    await getCurrencyRates()
    renderCurrencyTable()
    updateCurrencyTable(currencyConverterState)
    renderCurrencyConverter()
    setActiveConverterBaseBtns()
    setActiveConverterGetBtns()
    updateConverterQuantuty()
    getCurrencyRatio()
    
}
export default initCurrenciesControls;