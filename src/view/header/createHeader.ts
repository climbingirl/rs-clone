import logoHeader from '../../assets/images/logo_bank.svg';
import createElement from '../helpers/elements/element';
import createNav from '../nav/nav';

import './header.scss';

const createHeader = () => {
    const header = createElement('header', 'header')
    const logoWr = createElement('div', 'header__logo');
    const linkToMain = document.createElement('a');
    linkToMain.href = '/';
    const logo = `
        <svg class="header__logo" xmlns="http://www.w3.org/2000/svg" width="82" height="76" viewBox="0 0 82 76" fill="none">
            <mask id="mask0_422_17" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="82" height="76">
                <rect width="82" height="76" fill="#AAAAAA"/>
            </mask>
            <g mask="url(#mask0_422_17)"></g>
            <g clip-path="url(#clip0_422_17)">
            <path class="rectangle" d="M44.9901 4.4502L41.7221 6.27494L38.4542 4.4502L11.3203 19.5758V49.816L14.5882 51.6407V55.2903L41.7221 70.4048L68.856 55.2793V51.6297L72.1239 49.805V19.5758L44.9901 4.4502ZM16.2279 22.313L41.7221 8.09968L67.2163 22.313V50.7284L41.7221 64.9416L16.2279 50.7284V22.313ZM12.96 48.9036V20.4881L38.4542 6.27494L40.0939 7.18731L14.5882 21.4005V49.816L12.96 48.9036ZM41.7221 68.5801L16.2279 54.3669V52.5421L41.7221 66.7554L67.2163 52.5421V54.3669L41.7221 68.5801ZM70.4842 48.9036L68.8446 49.816V21.4005L43.3504 7.18731L44.9901 6.27494L70.4842 20.4881V48.9036Z"/>
            <path d="M49.5651 47.2808L49.8682 48.0306L33.457 52.1678L30.916 45.8791L31.8654 45.6397L34.1033 51.1787L49.5651 47.2808ZM50.7729 46.6458L50.4699 45.896L35.0082 49.7939L32.7702 44.2549L31.8208 44.4943L34.3618 50.783L50.7729 46.6458ZM51.6779 45.261L35.2667 49.3982L32.7257 43.1094L47.0955 39.4868L48.0698 41.8983L50.1112 41.3837L50.6534 42.7255L49.3227 43.0609L49.7475 44.112L51.0781 43.7766L51.6779 45.261ZM44.7867 43.5335C44.2734 42.2629 42.5532 41.5616 40.9446 41.9671C39.336 42.3726 38.4482 43.7315 38.9617 45.0021C39.475 46.2727 41.1951 46.9739 42.8038 46.5684C44.4123 46.1629 45.3002 44.8041 44.7867 43.5335ZM46.7927 41.7581L46.4761 40.9742L45.4836 41.2244L45.8003 42.0083L46.7927 41.7581ZM43.2925 44.4929C43.3707 44.6862 43.3455 44.8679 43.2172 45.0383C43.089 45.2086 42.8621 45.351 42.5365 45.4653L42.7119 45.8991L42.3751 45.984L42.2048 45.5622C41.7841 45.6624 41.4203 45.6984 41.1133 45.6701L40.9429 45.2482C41.1106 45.2675 41.2991 45.2718 41.5085 45.2608C41.7179 45.2499 41.8996 45.2257 42.0537 45.1884L41.7515 44.4408L41.514 44.4324C41.2033 44.4181 40.9607 44.3688 40.7863 44.2843C40.6117 44.1998 40.4898 44.0716 40.4203 43.8996C40.3461 43.7158 40.3756 43.5417 40.5091 43.3773C40.6424 43.213 40.8593 43.079 41.1595 42.9754L41.0238 42.6395L41.3605 42.5547L41.4938 42.8845C41.84 42.8076 42.1869 42.7803 42.5343 42.8029L42.4973 43.2153C42.1992 43.1994 41.916 43.2164 41.6481 43.2664L41.942 43.994L42.1578 44.0035C42.5177 44.02 42.781 44.0667 42.9477 44.1436C43.1146 44.2206 43.2296 44.3369 43.2925 44.4929ZM41.5659 43.9809L41.3147 43.3593C41.1861 43.4093 41.0965 43.4678 41.0455 43.5351C40.9946 43.6022 40.984 43.6725 41.0135 43.7458C41.0442 43.8218 41.0996 43.8775 41.1802 43.9131C41.2604 43.9486 41.389 43.9712 41.5659 43.9809ZM42.7073 44.6735C42.6762 44.5961 42.6163 44.5411 42.5277 44.5083C42.4392 44.4755 42.3054 44.4562 42.1263 44.4499L42.3839 45.0876C42.6663 44.9768 42.7742 44.8387 42.7073 44.6735ZM51.5603 40.7778L50.5063 38.1694L47.204 39.0019L48.258 41.6103L51.5603 40.7778ZM46.8985 39.0789L46.2545 37.4851L44.2366 37.9937L44.8807 39.5876L46.8985 39.0789ZM49.0931 37.0494L48.6684 35.9983L47.3379 36.3337L47.7624 37.3848L49.0931 37.0494ZM45.8808 35.6355L45.564 34.8516L44.5715 35.1017L44.8884 35.8855L45.8808 35.6355Z" fill="#21A20D"/>
            <path d="M21.8477 32.7163V26.0491H24.5284C25.0416 26.0491 25.4795 26.1392 25.8422 26.3193C26.2072 26.4973 26.4848 26.7502 26.675 27.0779C26.8675 27.4034 26.9637 27.7865 26.9637 28.227C26.9637 28.6697 26.8663 29.0507 26.6717 29.3697C26.477 29.6866 26.195 29.9296 25.8256 30.0989C25.4585 30.2682 25.014 30.3529 24.4919 30.3529H22.697V29.22H24.2597C24.5339 29.22 24.7618 29.183 24.9432 29.1093C25.1245 29.0355 25.2595 28.9248 25.3479 28.7772C25.4386 28.6296 25.4839 28.4463 25.4839 28.227C25.4839 28.0057 25.4386 27.819 25.3479 27.6671C25.2595 27.5151 25.1234 27.4001 24.9398 27.322C24.7585 27.2418 24.5295 27.2015 24.253 27.2015H23.2843V32.7163H21.8477ZM25.5171 29.6822L27.2059 32.7163H25.62L23.9678 29.6822H25.5171ZM31.6649 27.9666C31.6385 27.704 31.5245 27.5 31.3232 27.3546C31.1219 27.2092 30.8488 27.1364 30.5037 27.1364C30.2693 27.1364 30.0713 27.169 29.9098 27.2341C29.7484 27.2971 29.6245 27.385 29.5383 27.4978C29.4542 27.6107 29.4122 27.7387 29.4122 27.8819C29.4078 28.0013 29.4332 28.1055 29.4885 28.1945C29.546 28.2835 29.6245 28.3605 29.724 28.4256C29.8235 28.4885 29.9386 28.5439 30.0691 28.5916C30.1995 28.6372 30.339 28.6763 30.4871 28.7089L31.0976 28.8521C31.394 28.9172 31.6661 29.004 31.9138 29.1125C32.1615 29.221 32.376 29.3545 32.5575 29.5129C32.7388 29.6714 32.8793 29.858 32.9787 30.0729C33.0806 30.2878 33.1325 30.5341 33.1348 30.8119C33.1325 31.2199 33.0264 31.5737 32.8162 31.8731C32.6083 32.1705 32.3075 32.4017 31.9138 32.5666C31.5223 32.7294 31.0501 32.8108 30.4971 32.8108C29.9485 32.8108 29.4708 32.7283 29.0638 32.5634C28.659 32.3984 28.3427 32.1543 28.1149 31.8309C27.8893 31.5053 27.771 31.1027 27.7599 30.6231H29.15C29.1656 30.8466 29.2308 31.0333 29.3458 31.183C29.463 31.3306 29.6189 31.4424 29.8136 31.5184C30.0105 31.5921 30.2328 31.629 30.4805 31.629C30.7238 31.629 30.935 31.5943 31.1142 31.5249C31.2956 31.4554 31.436 31.3589 31.5356 31.2351C31.6351 31.1114 31.6849 30.9692 31.6849 30.8086C31.6849 30.6589 31.6395 30.533 31.5489 30.431C31.4603 30.3289 31.3298 30.2422 31.1573 30.1705C30.987 30.0989 30.778 30.0339 30.5303 29.9752L29.7904 29.793C29.2175 29.6562 28.7652 29.4425 28.4334 29.1516C28.1017 28.8607 27.9369 28.4691 27.9391 27.9764C27.9369 27.5727 28.0463 27.22 28.2675 26.9183C28.4909 26.6166 28.7973 26.3811 29.1866 26.2118C29.5759 26.0427 30.0182 25.958 30.5137 25.958C31.018 25.958 31.4581 26.0427 31.8341 26.2118C32.2124 26.3811 32.5065 26.6166 32.7167 26.9183C32.9268 27.22 33.0352 27.5694 33.0419 27.9666H31.6649ZM37.7871 27.9666C37.7605 27.704 37.6466 27.5 37.4453 27.3546C37.2441 27.2092 36.9709 27.1364 36.6259 27.1364C36.3914 27.1364 36.1934 27.169 36.032 27.2341C35.8705 27.2971 35.7466 27.385 35.6603 27.4978C35.5764 27.6107 35.5343 27.7387 35.5343 27.8819C35.5299 28.0013 35.5553 28.1055 35.6106 28.1945C35.6681 28.2835 35.7466 28.3605 35.8462 28.4256C35.9457 28.4885 36.0607 28.5439 36.1912 28.5916C36.3217 28.6372 36.461 28.6763 36.6093 28.7089L37.2198 28.8521C37.5161 28.9172 37.7881 29.004 38.0359 29.1125C38.2836 29.221 38.4982 29.3545 38.6795 29.5129C38.8609 29.6714 39.0013 29.858 39.1009 30.0729C39.2026 30.2878 39.2546 30.5341 39.2568 30.8119C39.2546 31.2199 39.1484 31.5737 38.9383 31.8731C38.7304 32.1705 38.4296 32.4017 38.0359 32.5666C37.6445 32.7294 37.1722 32.8108 36.6192 32.8108C36.0707 32.8108 35.5929 32.7283 35.1859 32.5634C34.7812 32.3984 34.4649 32.1543 34.237 31.8309C34.0114 31.5053 33.8931 31.1027 33.8821 30.6231H35.2722C35.2877 30.8466 35.353 31.0333 35.468 31.183C35.5852 31.3306 35.7411 31.4424 35.9357 31.5184C36.1326 31.5921 36.3549 31.629 36.6026 31.629C36.846 31.629 37.0572 31.5943 37.2363 31.5249C37.4177 31.4554 37.5582 31.3589 37.6576 31.2351C37.7572 31.1114 37.807 30.9692 37.807 30.8086C37.807 30.6589 37.7617 30.533 37.6709 30.431C37.5825 30.3289 37.452 30.2422 37.2795 30.1705C37.1091 30.0989 36.9001 30.0339 36.6523 29.9752L35.9125 29.793C35.3397 29.6562 34.8874 29.4425 34.5556 29.1516C34.2238 28.8607 34.059 28.4691 34.0613 27.9764C34.059 27.5727 34.1685 27.22 34.3897 26.9183C34.6131 26.6166 34.9195 26.3811 35.3087 26.2118C35.698 26.0427 36.1404 25.958 36.6358 25.958C37.1401 25.958 37.5803 26.0427 37.9563 26.2118C38.3345 26.3811 38.6287 26.6166 38.8388 26.9183C39.0489 27.22 39.1573 27.5694 39.1639 27.9666H37.7871ZM42.3855 32.7163V26.0491H43.7989V28.5559H43.842C43.904 28.4213 43.9935 28.2845 44.1107 28.1457C44.2302 28.0046 44.385 27.8873 44.5752 27.794C44.7677 27.6986 45.0065 27.6508 45.2919 27.6508C45.6634 27.6508 46.0063 27.7463 46.3204 27.9373C46.6345 28.1261 46.8855 28.4115 47.0736 28.7935C47.2616 29.1733 47.3555 29.6496 47.3555 30.2226C47.3555 30.7804 47.2638 31.2514 47.0801 31.6355C46.8988 32.0175 46.6511 32.3073 46.3369 32.5048C46.0251 32.7 45.6757 32.7977 45.2886 32.7977C45.0143 32.7977 44.7809 32.7532 44.5885 32.6643C44.3983 32.5753 44.2424 32.4635 44.1207 32.329C43.9991 32.1922 43.9061 32.0544 43.842 31.9155H43.779V32.7163H42.3855ZM43.769 30.2162C43.769 30.5135 43.8111 30.7728 43.8951 30.9942C43.9791 31.2155 44.1008 31.3881 44.26 31.5118C44.4193 31.6334 44.6129 31.6941 44.8406 31.6941C45.0707 31.6941 45.2653 31.6322 45.4246 31.5086C45.5838 31.3827 45.7044 31.209 45.7862 30.9877C45.8703 30.7642 45.9123 30.507 45.9123 30.2162C45.9123 29.9275 45.8714 29.6736 45.7896 29.4544C45.7078 29.2352 45.5871 29.0637 45.4279 28.94C45.2686 28.8163 45.073 28.7544 44.8406 28.7544C44.6106 28.7544 44.416 28.8141 44.2567 28.9335C44.0997 29.0528 43.9791 29.2221 43.8951 29.4413C43.8111 29.6605 43.769 29.9189 43.769 30.2162ZM49.7518 32.8108C49.4266 32.8108 49.1369 32.7555 48.8826 32.6447C48.6282 32.5319 48.4269 32.3658 48.2787 32.1466C48.1327 31.9253 48.0598 31.6497 48.0598 31.3197C48.0598 31.042 48.1117 30.8086 48.2157 30.6199C48.3196 30.431 48.4612 30.279 48.6404 30.164C48.8195 30.049 49.023 29.9622 49.2508 29.9036C49.4808 29.845 49.722 29.8037 49.9741 29.7799C50.2705 29.7496 50.5094 29.7213 50.6907 29.6953C50.8721 29.6671 51.0037 29.6258 51.0855 29.5715C51.1674 29.5173 51.2083 29.4369 51.2083 29.3306V29.3112C51.2083 29.1049 51.142 28.9454 51.0092 28.8325C50.8787 28.7196 50.6929 28.6633 50.4519 28.6633C50.1975 28.6633 49.9951 28.7186 49.8447 28.8293C49.6943 28.9378 49.5948 29.0745 49.5461 29.2394L48.2389 29.1353C48.3053 28.8315 48.4358 28.5689 48.6304 28.3474C48.8251 28.124 49.0761 27.9525 49.3835 27.8332C49.6932 27.7115 50.0515 27.6508 50.4585 27.6508C50.7416 27.6508 51.0125 27.6833 51.2713 27.7485C51.5323 27.8136 51.7635 27.9145 51.9648 28.0512C52.1682 28.1879 52.3286 28.3637 52.4458 28.5787C52.563 28.7914 52.6217 29.0463 52.6217 29.3436V32.7163H51.2813V32.0229H51.2415C51.1596 32.1792 51.0502 32.3171 50.913 32.4363C50.7758 32.5536 50.6111 32.6459 50.4186 32.7131C50.2263 32.7782 50.0039 32.8108 49.7518 32.8108ZM50.1566 31.8537C50.3644 31.8537 50.5481 31.8135 50.7073 31.7332C50.8666 31.6507 50.9916 31.5401 51.0822 31.4011C51.1729 31.2622 51.2183 31.1049 51.2183 30.9291V30.3984C51.1741 30.4266 51.1132 30.4527 51.0358 30.4765C50.9606 30.4982 50.8754 30.5189 50.7803 30.5385C50.6852 30.5558 50.5901 30.5721 50.495 30.5873C50.3998 30.6003 50.3136 30.6122 50.2362 30.6231C50.0703 30.6469 49.9254 30.6849 49.8016 30.737C49.6777 30.7891 49.5815 30.8596 49.5129 30.9487C49.4444 31.0354 49.4101 31.1439 49.4101 31.2742C49.4101 31.463 49.4798 31.6073 49.6191 31.7071C49.7607 31.8048 49.9398 31.8537 50.1566 31.8537ZM55.1316 29.8254V32.7163H53.7182V27.7159H55.0653V28.5981H55.1249C55.2378 28.3073 55.4268 28.0773 55.6923 27.908C55.9577 27.7366 56.2795 27.6508 56.6578 27.6508C57.0117 27.6508 57.3202 27.7268 57.5835 27.8787C57.8466 28.0307 58.0512 28.2476 58.1972 28.5298C58.3431 28.8098 58.4162 29.144 58.4162 29.5325V32.7163H57.0027V29.7799C57.005 29.4739 56.9254 29.2352 56.7639 29.0637C56.6025 28.8901 56.3802 28.8033 56.097 28.8033C55.9068 28.8033 55.7388 28.8434 55.5927 28.9237C55.4489 29.004 55.3362 29.1212 55.2543 29.2753C55.1747 29.4273 55.1338 29.6106 55.1316 29.8254ZM60.8108 31.2775L60.8141 29.6139H61.0198L62.6522 27.7159H64.2745L62.0815 30.2291H61.7464L60.8108 31.2775ZM59.5301 32.7163V26.0491H60.9435V32.7163H59.5301ZM62.7152 32.7163L61.2155 30.5385L62.1578 29.5586L64.3707 32.7163H62.7152Z" fill="#171817"/>
            </g>
            <defs>
            <clipPath id="clip0_422_17">
            <rect width="61.2476" height="66.2093" fill="white" transform="translate(10.876 4.19531)"/>
            </clipPath>
            </defs>
        </svg>
    `
    linkToMain.insertAdjacentHTML('afterbegin', logo);
    logoWr.insertAdjacentElement('afterbegin',linkToMain);
    const nav = createNav();
    const cabinet = createElement('div', 'cabinet');
    const cabinetLogo = createElement('div', 'cabinet__logo');
    const cabinetName = createElement('h5', 'cabinet__name');
    cabinetName.textContent = 'RSS';
    const cabinetOutBtn = createElement('button', 'cabinet__out');
    cabinet.append(cabinetLogo,cabinetName, cabinetOutBtn);
    header.append(logoWr, nav, cabinet)
    return header;
};



export default createHeader;
