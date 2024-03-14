var map = L.map('map', {
    minZoom: 5,
    maxZoom: 10,
    scrollWheelZoom: true,
  }).setView([55, -0.9], 15);

const basicBeachIcon = L.icon({
    iconUrl: 'https://img.icons8.com/ios-filled/50/toilet.png',
    iconSize: [40, 40],
});

const marker1 = L.marker([55, -0.9], {
    icon: basicBeachIcon
}).addTo(map);

var osm = L.imageOverlay('proekthacktues.png', [[57, -0.99], [50, 10]]);
osm.addTo(map);