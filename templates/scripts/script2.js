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

const marker1 = L.marker([55.29, 5], {
    icon: toiletIcon
}).addTo(map);
marker1.bindTooltip("Toilet");

var marker1pop = `<b>Тоалетна до 9125:</b><br>
Legendary location.
Единствената хубава тоалетна в 9 блок.
Чиста е, вратите се заключват и има огледало.
`

marker1.bindPopup(marker1pop);

//==============================================================
const pointOfInterest = L.icon({
    iconUrl: 'https://img.icons8.com/ios-filled/50/point-of-interest.png',
    iconSize: [40, 40]
});

const marker3 = L.marker([54.7, 6.9], {
    icon: pointOfInterest
}).addTo(map);
marker3.bindTooltip("Point of interest");

//======================================================================

const rectangle = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [43, 100]
});

const marker4 = L.marker([55.28, 4.19], {
    icon: rectangle
}).addTo(map);
marker4.bindTooltip("9125");

var marker4pop = `<b>9125:</b><br>
Голяма и просторна.
Чиновете са за трима.
Random врата в края на стаята.
От нея можеш да спреш тока на сградата.
`

marker4.bindPopup(marker4pop);


//=========================================================================
const rectangle5 = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [43, 100]
});

const marker8 = L.marker([52.54 , 14.7], {
    icon: rectangle5
}).addTo(map);
marker8.bindTooltip("9113");




var osm = L.imageOverlay('devetiblok_purvi.png', [[57, -0.99], [50, 16]]);
osm.addTo(map);
