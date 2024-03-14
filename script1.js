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

const marker4 = L.marker([55.15, 12.05], {
    icon: rectangle
}).addTo(map);
marker4.bindTooltip("9205");

marker4.bindPopup("9205 popup");


//=====================================================================
const rectangle2 = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [43, 100]
});

const marker5 = L.marker([53.53, 13.31], {
    icon: rectangle2
}).addTo(map);
marker5.bindTooltip("9230");

//===========================================================================
const rectangle3 = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [43, 100]
});

const marker6 = L.marker([51.33, 14.20], {
    icon: rectangle3
}).addTo(map);
marker6.bindTooltip("9221");
//===========================================================================
const rectangle4 = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [43, 100]
});

const marker7 = L.marker([51.33, 12.35], {
    icon: rectangle4
}).addTo(map);
marker7.bindTooltip("9223");
//=========================================================================
const rectangle5 = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [43, 100]
});

const marker8 = L.marker([52.74 , 14.8], {
    icon: rectangle5
}).addTo(map);
marker8.bindTooltip("9217");
//=======================================================================
const rectangle6 = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [43, 100]
});

const marker9 = L.marker([52.74 , 14.8], {
    icon: rectangle6
}).addTo(map);
marker9.bindTooltip("9217");
//===========================================================================
const rectangle7 = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [43, 100]
});

const marker10 = L.marker([54.53 , 9.87], {
    icon: rectangle7
}).addTo(map);
marker10.bindTooltip("9224");
//=============================================================================
const rectangle8 = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [43, 100]
});

const marker11 = L.marker([54.53 , 7.87], {
    icon: rectangle8
}).addTo(map);
marker11.bindTooltip("9222");
//==========================================================================
const rectangle9 = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [43, 100]
});

const marker12 = L.marker([54.53 , 6.25], {
    icon: rectangle9
}).addTo(map);
marker12.bindTooltip("9218");
//============================================================================
const rectangle10 = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [43, 100]
});

const marker13 = L.marker([54.53 , 0.94], {
    icon: rectangle10
}).addTo(map);
marker13.bindTooltip("9202");




var osm = L.imageOverlay('devetiblok_vtori.png', [[57, -0.99], [50, 16]]);
osm.addTo(map);
