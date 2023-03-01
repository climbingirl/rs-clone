import './currency-converte.scss';

const renderCurrencyConverter = () => {
  const sidebar: HTMLElement | null = document.querySelector('.right-sidebar');
  if (sidebar) {
    sidebar.insertAdjacentHTML(
      'beforeend',
      `
            <section class="converter__wr">
                <h2> Конвертер валют</h2>
                <div class="converter">
                    <div class="converter__block converter-block converter-block_base">
                        <h3 class="converter-block__title">У меня есть</h3>
                        <div class="converter-block__controls">
                            <button data-currency="rub" class="converter-block__btn converter-block__btn_base converter-block__btn_active">rub</button>
                            <button data-currency="usd" class="converter-block__btn converter-block__btn_base">usd</button>
                            <button data-currency="eur" class="converter-block__btn converter-block__btn_base">eur</button>
                        </div>
                        <div class="converter-block__result">
                            <input id="base-quantity" class="converter-block__summ" placeholder="1000" type="text">
                            <p class="converter-block__course">1
                                <span id="base-currency">RUB</span> = 
                                <span id="stright-k">0,0125 </span>
                                <span id="base-currency__to">EUR</span></p>
                        </div>
                    </div>
                    <div class="converter__block converter-block converter-block_to-convert">
                        <h3 class="converter-block__title">Я получу</h3>
                        <div class="converter-block__controls">
                            <button data-currency="rub" class="converter-block__btn converter-block__btn_get">rub</button>
                            <button data-currency="usd" class="converter-block__btn converter-block__btn_get converter-block__btn_active">usd</button>
                            <button data-currency="eur" class="converter-block__btn converter-block__btn_get">eur</button>
                        </div>
                        <div class="converter-block__result">
                            <input id="result-quantity" class="converter-block__summ" placeholder="1000" type="text">
                            <p class="converter-block__course">1
                                <span id="res-currency">RUB</span> = 
                                <span id="reverse-k">0,0125</span>
                                <span id="res-currency__to">EUR</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        `,
    );
  }
};

export default renderCurrencyConverter;
