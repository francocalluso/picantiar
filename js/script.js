const apiKey = 'pk.eyJ1IjoiZnJhbmNvY2FsbHVzbyIsImEiOiJja3puYml4amQwMWZmMnVtZndnM28xbTI3In0.pkD6omoxsqQEBPDE6pCzxA';

const mymap = L.map('map').setView([-34.6035614,-58.3855543], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey,
}).addTo(mymap);

//marker

var myIcon = L.icon({
    iconUrl: '../assets/chillimarker.png',
    iconSize: [60,75],
    iconAnchor: [30, 75],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});


const marker = L.marker(([-34.6003048,-58.4388054]), {icon: myIcon}).addTo(mymap);

//popup
let template = `
<h3>La Trompeta del Tata</h3>
<img class="imagen" src="assets/tata.png">
<br>
<button type="button">Ver más</button>
`
marker.bindPopup(template);
