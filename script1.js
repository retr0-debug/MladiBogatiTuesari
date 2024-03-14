var map = L.map('map', {
    minZoom: 1,
    maxZoom: 5,
  }).setView([51.505, -0.09], 13);

    var osm = L.tileLayer('proekthacktues.png');
    osm.addTo(map);