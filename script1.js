var map = L.map('map', {
    minZoom: 5,
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
//==============================================================
const rectangle = L.icon({
    iconUrl: 'https://img.icons8.com/pulsar-line/48/rounded-rectangle.png',
    iconSize: [43, 100]
});

const marker4 = L.marker([55.15, 12.05], {
    icon: rectangle
}).addTo(map);
marker4.bindTooltip("9205");

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

var osm = L.imageOverlay('devetiblok_vtori.png', [[57, -0.99], [50, 16]]);
osm.addTo(map);
