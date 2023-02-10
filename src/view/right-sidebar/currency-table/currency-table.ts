
import './currency-table.scss'

const renderCurrencyTable = () => {
    const sidebar: HTMLElement | null = document.querySelector('.right-sidebar');
    if (sidebar) {
        sidebar.insertAdjacentHTML('afterbegin', `
            <div class="block">
                <h3>Курсы валют</h3>
                <div class="currency-table">
                <table>
                        <thead>
                            <tr>
                                <th>Валюта</th>
                                <th>Количество</th>
                                <th>Продать</th>
                                <th>Купить</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="currency-table__item" data-currency="usd">
                                <td data-label="Валюта">Доллар</td>
                                <td data-label="Количество">1</td>
                                <td data-label="Продать" class="currency-table_sale">0</td>
                                <td data-label="Купить" class="currency-table_buy">0</td>
                            </tr>
                            <tr class="currency-table__item" data-currency="eur">
                                <td data-label="Валюта">Евро</td>
                                <td data-label="Количество">1</td>
                                <td data-label="Продать" class="currency-table_sale">0</td>
                                <td data-label="Купить" class="currency-table_buy">0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `)
    }
    
}

export default renderCurrencyTable;