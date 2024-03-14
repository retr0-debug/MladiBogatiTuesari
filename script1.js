var map = L.map('map', {
    minZoom: 5,
    maxZoom: 7,
    scrollWheelZoom: true,
    setZoom: 5, 
  }).setView([54.5, 4.6], 15);

const toiletIcon = L.icon({
    iconUrl: 'https://img.icons8.com/ios-filled/50/toilet.png',
    iconSize: [40, 40],
});


const marker1 = L.marker([54.7, 2.9], {
    icon: toiletIcon
}).addTo(map);

marker1.bindTooltip("Toilet");

var osm = L.imageOverlay('proekthacktues.png', [[57, -0.99], [50, 10]]);
osm.addTo(map);