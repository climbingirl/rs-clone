import { getCurrencyRates, K_INCREASE } from "../model/currency-converter";
import { CurrencyStateConverter } from "../model/types";
import renderCurrencyConverter from "../view/right-sidebar/currency-converter/currency-converter";
import renderCurrencyTable from "../view/right-sidebar/currency-table/currency-table";

export let currencyConverterState = {
    baseCurrency: 'rub',
    convertCurrency: 'usd',
    baseQuantity: 1,
    usd: 0,
    eur: 0,
    rub: 1,
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

const getCurrencyRatio = () => {
    let rightK = 1
    let reverseK = 1
    let convertCurr = currencyConverterState.convertCurrency
    let baseCurr = currencyConverterState.baseCurrency;
    console.log(`baseCurr: ${baseCurr}`)
    switch(baseCurr === convertCurr) {
        case true :
           console.log('true')
            break
        case false:
            console.log('false')
            let basePrice = findPrice(baseCurr);
            let convertPrice = findPrice(convertCurr);
            rightK = basePrice / convertPrice
            reverseK = convertPrice / basePrice
            break 
    }
    return {rightK, reverseK}
}

const updateConverterQuantuty = () => {
    const base: HTMLInputElement | null = document.querySelector('#base-quantity')
    const result: HTMLInputElement | null = document.querySelector('#result-quantity')
    const strightKEl = document.getElementById('stright-k')   
    const reverseKEl = document.getElementById('reverse-k')
    const baseCurr = document.getElementById('base-currency');
    const baseCurrTo = document.getElementById('base-currency__to');
    const resCurr = document.getElementById('res-currency');
    const resCurrTo = document.getElementById('res-currency__to');
    if (base && result && strightKEl && reverseKEl && baseCurr && baseCurrTo && resCurr && resCurrTo) {
        base.value = String(currencyConverterState.baseQuantity);
        let {rightK, reverseK} = getCurrencyRatio();
        result.value = String(Number(currencyConverterState.baseQuantity * rightK).toFixed(2));
        strightKEl.textContent = String(`${Number(rightK).toFixed(3)}`)
        if (rightK !== 1) {
            reverseKEl.textContent = String(`${Number(reverseK).toFixed(2)}`)
        } else {
            reverseKEl.textContent = String(rightK)
        }
        baseCurr.textContent = currencyConverterState.baseCurrency.toUpperCase()
        baseCurrTo.textContent = currencyConverterState.convertCurrency.toUpperCase()
        resCurr.textContent = currencyConverterState.convertCurrency.toUpperCase()
        resCurrTo.textContent = currencyConverterState.baseCurrency.toUpperCase()
    }
}

const listenInpQuantity = () => {
    const baseInp: HTMLInputElement | null = document.querySelector('#base-quantity')
    baseInp?.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement;
        target.value = target.value.replace(/[^\d]/g, "");
        target.value = Number(target.value).toFixed(2)
        currencyConverterState.baseQuantity = Number(target.value);
        updateConverterQuantuty()
    })
}

const findPrice = (nameCurr: string) => {
    const currenciesArr = Object.entries(currencyConverterState);
    console.log(currenciesArr)
    console.log(nameCurr)
    let res = 0
    for ( let i=0; i < currenciesArr.length; i++) {
        if (currenciesArr[i][0] === nameCurr) {
            res = Number(currenciesArr[i][1])
        }
    }
    return res
}


const setActiveConverterBaseBtns = () => {
    const convertBaseBtns = document.querySelectorAll('.converter-block__btn_base');
    
    if (convertBaseBtns) {
        convertBaseBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                const dataCurrency = btn.getAttribute('data-currency');              
                if (dataCurrency) {
                    currencyConverterState.baseCurrency = dataCurrency
                    const curr = currencyConverterState.baseCurrency
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
    listenInpQuantity()
    
}
export default initCurrenciesControls;