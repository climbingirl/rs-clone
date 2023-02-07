
export const showMetalsPrices = () => {
    const sidebar: HTMLElement | null = document.querySelector('.right-sidebar');
    if (sidebar) {
        sidebar.insertAdjacentHTML('afterbegin', ``)
    }
}