var map = L.map('map', {
    minZoom: 6,
    maxZoom: 7,
    scrollWheelZoom: true,
    setZoom: 5, 
  }).setView([54.5, 4.6], 15);


//=========================================================================
const rectangle5 = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [67, 169]
});

const marker8 = L.marker([54.09 , 4.7], {
    icon: rectangle5
}).addTo(map);
marker8.bindTooltip("Книжарница");


var osm = L.imageOverlay('10blok_layout.png', [[57, -0.99], [50, 16]]);
osm.addTo(map);
