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

const marker1 = L.marker([54.7, 2.9], {
    icon: toiletIcon
}).addTo(map);
marker1.bindTooltip("Toilet");

//===========================================================
const teacherRoomicon = L.icon({
    iconUrl: 'https://img.icons8.com/ios-filled/50/meeting-room.png',
    iconSize: [40, 40]
});

const marker2 = L.marker([54.7, 5.9], {
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
    iconSize: [40, 40]
});

const marker4 = L.marker([55.7, 6.9], {
    icon: rectangle
}).addTo(map);
marker4.bindTooltip("rectangle1");

var osm = L.imageOverlay('proekthacktues.png', [[57, -0.99], [50, 10]]);
osm.addTo(map);
