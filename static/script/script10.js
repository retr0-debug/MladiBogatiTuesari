var map = L.map('map', {
    minZoom: 6,
    maxZoom: 7,
    scrollWheelZoom: true,
}).setView([54.04, 7.5], 6);

var markerStyle = `
<style>
    .popup-image {
        max-width: 100%;
        height: 190px;
        display: block;
        margin: 4px auto; 
    }
</style>`

const toiletIcon = L.icon({
    iconUrl: 'https://img.icons8.com/ios-filled/50/toilet.png',
    iconSize: [35, 35],
});

const marker1 = L.marker([55.29, 9.74], {
    icon: toiletIcon
}).addTo(map);
marker1.bindTooltip("Toilet");

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
<img src="roomImg/bookstore.jpg" class="popup-image">
`
marker8.bindPopup(marker8pop + markerStyle);

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
<img src="roomImg/vending.jpg" class="popup-image">
`
marker9.bindPopup(marker9pop + markerStyle);

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
<img src="roomImg/airplane.jpg" class="popup-image">
`
marker10.bindPopup(marker10pop + markerStyle);

var osm = L.imageOverlay('10blok_layout.png', [[57, -0.99], [50, 16]]);
osm.addTo(map);
