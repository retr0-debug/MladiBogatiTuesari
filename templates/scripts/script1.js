var map = L.map('map', {
    minZoom: 6,
    maxZoom: 7,
    scrollWheelZoom: true 
  }).setView([54.5, 4.6], 6);
//==========================================================
const toiletIcon = L.icon({
    iconUrl: 'https://img.icons8.com/ios-filled/50/toilet.png',
    iconSize: [35, 35],
});

const marker1 = L.marker([51.29, 9.1], {
    icon: toiletIcon
}).addTo(map);
marker1.bindTooltip("Toilet");

//===========================================================
const teacherRoomicon = L.icon({
    iconUrl: 'https://img.icons8.com/ios-filled/50/meeting-room.png',
    iconSize: [40, 40]
});



const marker2 = L.marker([54.85, 0.3], {
    icon: teacherRoomicon
}).addTo(map);
marker2.bindTooltip("Teacher's Room");

//======================================================================

const rectangle = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [43, 100]
});

const marker4 = L.marker([55.15, 12.05], {
    icon: rectangle
}).addTo(map);
marker4.bindTooltip("9205");

var marker4pop = `<b>9205:</b><br>
Нещо като зала за лекции.
Главно за поправки по градивни елементи.
На почти всеки чин има рисунки от ученици за ученици.

`
marker4.bindPopup(marker4pop);

//=====================================================================
const rectangle2 = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [43, 100]
});

const marker5 = L.marker([53.53, 13.31], {
    icon: rectangle2
}).addTo(map);
marker5.bindTooltip("9230");

var marker5pop = `<b>9230:</b><br>
Малка зелена стая.
Лявата редица е хубава, дясната не става.
Вратата по някаква причина е най-отзад на стаята.
Floor loot: JPG Le Beau, пречиствател на въздух, туба.
Еднo момче се напи и припадна в нея.
`
marker5.bindPopup(marker5pop);

//===========================================================================
const rectangle3 = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [43, 100]
});

const marker6 = L.marker([51.33, 14.20], {
    icon: rectangle3
}).addTo(map);
marker6.bindTooltip("9221");

var marker6pop = `
<b>9221:</b><br> 
Голяма е и само това.
`

marker6.bindPopup(marker6pop);
//===========================================================================
const rectangle4 = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [43, 100]
});

const marker7 = L.marker([51.33, 12.35], {
    icon: rectangle4
}).addTo(map);
marker7.bindTooltip("9223");

var marker7pop = `<b>9223:</b><br> 
Голяма е.
Като цяло става. 
`

//=========================================================================
const rectangle5 = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [43, 100]
});

const marker8 = L.marker([52.74 , 14.8], {
    icon: rectangle5
}).addTo(map);
marker8.bindTooltip("9217");

var marker8pop = `
<b>9217:</b><br> 
Много е зле.
Поне е слънчево.
`
marker8.bindPopup(marker8pop);


//===========================================================================
const rectangle7 = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [43, 100]
});

const marker10 = L.marker([54.53 , 9.87], {
    icon: rectangle7
}).addTo(map);
marker10.bindTooltip("9224");

var marker10pop = `<b>9224:</b><br>
Компютърна зала.
Има 14 лаптопа и може би има 14 мишки и зарядни.
Мила Нейкова hangout spot.
Понякога има адекватни учители. 
Има мултимедия и в хубав ден ще работи.
`

marker10.bindPopup(marker10pop);
//=============================================================================
const rectangle8 = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [43, 100]
});

const marker11 = L.marker([54.53 , 7.87], {
    icon: rectangle8
}).addTo(map);
marker11.bindTooltip("9222");

var marker11pop = `
<b>9222:</b><br>
Компютърна зала.
Има около 14 лаптопа, но няма 14 мишки и зарядни.
`
marker11.bindPopup(marker11pop);
//==========================================================================
const rectangle9 = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [43, 100]
});

const marker12 = L.marker([54.53 , 6.25], {
    icon: rectangle9
}).addTo(map);
marker12.bindTooltip("9218");

var marker12pop = `<b>9218:</b><br> 
Не става.
`

marker12.bindPopup(marker12pop);
//============================================================================
const rectangle10 = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [43, 100]
});

const marker13 = L.marker([54.53 , 0.94], {
    icon: rectangle10
}).addTo(map);
marker13.bindTooltip("9202");

var marker13pop = `<b>9202</b><br>
Голяма стая.
Зелена е.
Точно до учителската стая, за това не прави глупости.
`
marker13.bindPopup(marker13pop);

//===============================================================================
const pointOfInterest = L.icon({
    iconUrl: 'https://img.icons8.com/ios-filled/50/point-of-interest.png',
    iconSize: [40, 40]
});

const marker14 = L.marker([55.2, 13.3], {
    icon: pointOfInterest
}).addTo(map);
marker14.bindTooltip("Point of interest");

var marker14pop = `<b>Random стълби в коридора:</b><br>
Защо съществуват?
`

marker14.bindPopup(marker14pop);

//==========================================================================
const pointOfInterest2 = L.icon({
    iconUrl: 'https://img.icons8.com/ios-filled/50/point-of-interest.png',
    iconSize: [40, 40]
});

const marker15 = L.marker([53.27, 14.8], {
    icon: pointOfInterest2
}).addTo(map);
marker15.bindTooltip("Point of interest");

var marker15pop = `<b>Огледало на стълбите:</b><br>
Едно от малкото огледала в сградата.

`
marker15.bindPopup(marker15pop);

//===========================================================
const pointOfInterest3 = L.icon({
    iconUrl: 'https://img.icons8.com/ios-filled/50/point-of-interest.png',
    iconSize: [40, 40]
});

const marker16 = L.marker([55.25, 3.4], {
    icon: pointOfInterest3
}).addTo(map);
marker16.bindTooltip("Point of interest");

var marker16pop = `<b>Асансьор:</b><br>
Никой не знае къде води.
Може би не работи.
`
marker16.bindPopup(marker16pop);



var osm = L.imageOverlay('devetiblok_vtori.png', [[57, -0.99], [50, 16]]);
osm.addTo(map);
