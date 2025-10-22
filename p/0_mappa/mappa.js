//aggiungi mappa + coordinate
var map = L.map('map').setView([45.407438, 11.874075], 14);

var base = L.tileLayer('https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=KjSlOHAMeoYUy9EW2JQD', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);


var p = L.geoJSON(lu, 
                      {
                      onEachFeature: function(feature, layer){
                          var nome = feature.properties.name;
                          var url = 'menu/tuttiposti/' + nome + '.html';

                          layer.bindPopup('<a href="' + url + '" target="lu">'+ nome + '</a>');
                          layer.on('mouseover', function() {layer.openPopup();});
                      }
                     });

p.addTo(map);

