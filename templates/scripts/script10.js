var map = L.map('map', {
    minZoom: 6,
    maxZoom: 7,
    scrollWheelZoom: true,
  }).setView([54.5, 4.6], 6);


//=========================================================================
const rectangle5 = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [67, 169]
});

const marker8 = L.marker([54.09 , 4], {
    icon: rectangle5
}).addTo(map);
marker8.bindTooltip("Книжарница");

var marker8pop = `<b>Книжарница:</b><br>
Главно за хартия за контролни(при г-жа Абрамович) и калкулатори(при г-жа Башева).
До нея има античен телефон.
`
marker8.bindPopup(marker8pop);

//==========================================================================
const rectangle6 = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [60, 85]
});

const marker9 = L.marker([53.79 , 9.34], {
    icon: rectangle6
}).addTo(map);
marker9.bindTooltip("Vending машини");

var marker9pop = `<b>Вендинг машини:</b><br>
<strong>Legendary location.</strong>
Инфлацията е <strong><em>insane</em></strong>.
Има шанс да получиш 2 вафли „Боровец“.
`
marker9.bindPopup(marker9pop);

//=====================================================
const pointOfInterest = L.icon({
    iconUrl: 'https://img.icons8.com/ios-filled/50/point-of-interest.png',
    iconSize: [40, 40]
});

const marker10 = L.marker([55, 12.4], {
    icon: pointOfInterest
}).addTo(map);
marker10.bindTooltip("Point of interest");

var marker10pop = `<b>Самолет:</b><br>
За по-ефективно бягане от час.
`
marker10.bindPopup(marker10pop);

var osm = L.imageOverlay('10blok_layout.png', [[57, -0.99], [50, 16]]);
osm.addTo(map);
