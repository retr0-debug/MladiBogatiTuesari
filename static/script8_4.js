var map = L.map('map', {
    minZoom: 6,
    maxZoom: 7,
    scrollWheelZoom: true,
    setZoom: 5, 
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

var marker8pop = `<b>8-4.1:</b><br>
Има малко контакти.
Най-хубава гледка.
<img src="static/roomImg/4_1.jpg" class="popup-image">
`

marker8.bindPopup(marker8pop + markerStyle);

var osm = L.imageOverlay('static/8blok_4etaj_layout.png', [[57, -0.99], [50, 16]]);
osm.addTo(map);
