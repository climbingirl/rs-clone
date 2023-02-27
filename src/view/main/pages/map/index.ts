
// const center = [48.8866527839977, 2.34310679732974];


// export function init() {
//   const map = new ymaps.Map('map', {
//     center: center,
//     zoom: 17,
//   });

//   const placemark = new ymaps.Placemark(
//     center,
//     {
//       balloonContentHeader: 'Хедер балуна',
//       balloonContentBody: 'Боди балуна',
//       balloonContentFooter: 'Подвал',
//     },
//     {
//       iconLayout: 'default#image',
//       iconImageHref: 'https://cdn-icons-png.flaticon.com/512/2830/2830155.png',
//       iconImageSize: [40, 40],
//       iconImageOffset: [-19, -44],
//     }
//   );

//   map.controls.remove('geolocationControl'); // удаляем геолокацию
//   // map.controls.remove('searchControl'); // удаляем поиск
//   map.controls.remove('trafficControl'); // удаляем контроль трафика
//   map.controls.remove('typeSelector'); // удаляем тип
//   map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
//   map.controls.remove('zoomControl'); // удаляем контрол зуммирования
//   map.controls.remove('rulerControl'); // удаляем контрол правил
//   // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

//   map.geoObjects.add(placemark);
// }
