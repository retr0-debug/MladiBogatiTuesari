var map = L.map('map', {
    minZoom: 6,
    maxZoom: 7,
    scrollWheelZoom: true,
    setZoom: 5, 
  }).setView([54.5, 4.6], 15);
//==========================================================
const toiletIcon = L.icon({
    iconUrl: 'https://img.icons8.com/ios-filled/50/toilet.png',
    iconSize: [35, 35],
});

const marker1 = L.marker([55.29, 9.74], {
    icon: toiletIcon
}).addTo(map);
marker1.bindTooltip("Toilet");


//=========================================================================
const rectangle5 = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [59, 120]
});

const marker8 = L.marker([55.24 , 6.28], {
    icon: rectangle5
}).addTo(map);
marker8.bindTooltip("4.1");


var osm = L.imageOverlay('8blok_4etaj_layout.png', [[57, -0.99], [50, 16]]);
osm.addTo(map);
