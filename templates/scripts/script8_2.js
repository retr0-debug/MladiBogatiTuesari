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

const marker8 = L.marker([52.74 , 7.76], {
    icon: rectangle5
}).addTo(map);
marker8.bindTooltip("2.4");




var osm = L.imageOverlay('img/8blok_layout(1).png', [[57, -0.99], [50, 16]]);
osm.addTo(map);
