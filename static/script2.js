var map = L.map('map', {
    minZoom: 6,
    maxZoom: 7,
    scrollWheelZoom: true, 
  }).setView([54.4, 7.5], 6);

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

const marker1 = L.marker([51.29, 9.6], {
    icon: toiletIcon
}).addTo(map);
marker1.bindTooltip("Toilet");

var marker1pop = `<b>Тоалетна до 9125:</b><br>
Legendary location.
Единствената хубава тоалетна в 9 блок.
Чиста е, вратите се заключват и има огледало.
<img src="roomImg/toilets9215.jpg" class="popup-image">
`

marker1.bindPopup(marker1pop + markerStyle);


//======================================================================

const rectangle = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [43, 100]
});

const marker4 = L.marker([51.30, 10.79], {
    icon: rectangle
}).addTo(map);
marker4.bindTooltip("9125");

var marker4pop = `<b>9125:</b><br>
Голяма и просторна.
Чиновете са за трима.
Random врата в края на стаята.
От нея можеш да спреш тока на сградата.
<img src="roomImg/9215.jpg" class="popup-image">
`

marker4.bindPopup(marker4pop + markerStyle);


//=========================================================================
const rectangle5 = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [43, 100]
});

const marker8 = L.marker([52.54 , 14.7], {
    icon: rectangle5
}).addTo(map);
marker8.bindTooltip("9113");

var marker8pop = `<b>9113:</b><br> 
Много малка.
Няма място.
Наистина много малка.
<img src="static/roomImg/9113.jpg" class="popup-image">
`
marker8.bindPopup(marker8pop + markerStyle);


//======================================================
const teacherRoomicon = L.icon({
    iconUrl: 'https://img.icons8.com/ios-filled/50/meeting-room.png',
    iconSize: [40, 40]
});



const marker9 = L.marker([54.51, 2.2], {
    icon: teacherRoomicon
}).addTo(map);
marker9.bindTooltip("Medical Office");

var marker9pop = `<b>Медицински кабинет:</b><br>
Главно за носене на медицински картони.
Сестрата е chill.
<img src="roomImg/medOffice.jpg" class="popup-image">
`

marker9.bindPopup(marker9pop + markerStyle);

//====================================================
const toiletIcon2 = L.icon({
    iconUrl: 'https://img.icons8.com/ios-filled/50/toilet.png',
    iconSize: [35, 35],
});

const marker10 = L.marker([54.06, 14.8], {
    icon: toiletIcon2
}).addTo(map);
marker10.bindTooltip("Toilet");

var marker10pop = `<b>Тоалетна до входа:</b><br>
Average тоалетна.
Вратите се заключват.
<img src="roomImg/toiletsEntrance.jpg" class="popup-image">
`

marker10.bindPopup(marker10pop + markerStyle);


var osm = L.imageOverlay('devetiblok_purvi.png', [[57, -0.99], [50, 16]]);
osm.addTo(map);
