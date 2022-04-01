// CONSTANTES Y VARIABLES

const apiKey = 'pk.eyJ1IjoiZnJhbmNvY2FsbHVzbyIsImEiOiJja3puYml4amQwMWZmMnVtZndnM28xbTI3In0.pkD6omoxsqQEBPDE6pCzxA';

const mymap = L.map('map').setView([-34.6035614,-58.3855543], 13);

let arrayLugares = [];


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

// FUNCIONES

class lugar{
    constructor(data){
        this.nombreLugar = data.nombreLugar;
        this.coordenada1 = data.coordenada1;
        this.coordenada2 = data.coordenada2;
        this.imagen = data.imagen;
        arrayLugares.push(this);
        }
}

const LUGAR1 = new lugar ({nombreLugar: "La Trompeta del Tata",
                          coordenada1: -34.6003048,
                          coordenada2: -58.4388054,
                          imagen: "imagen1",
});

const LUGAR2 = new lugar ({nombreLugar: "sarkis",
                          coordenada1: -34.5914768,
                          coordenada2: -58.4383124,
                          imagen: "imagen2",
});

const LUGAR3 = new lugar ({nombreLugar: "Burger King",
                          coordenada1: -34.5904768,
                          coordenada2: -58.4183124,
                          imagen: "imagen2",
});

function cargarBar() {arrayLugares.forEach((lugar) => { //Inserta los lugares al HTML 
    let template = document.createElement("div");
    let marker = L.marker(([lugar.coordenada1,lugar.coordenada2]), {icon: myIcon}).addTo(mymap);

    template.innerHTML = `
        <h3>${lugar.nombreLugar}</h3>
        <img class="imagen" src="assets/tata.png">
        <br>
        <button type="button">Ver más</button>
    `

    marker.bindPopup(template);
});
}

cargarBar();

function newBar(){    // Registra un bar al array

    bar = document.getElementById("bar-name").value;
    coordenada1 = document.getElementById("coor-1").value;
    coordenada2 = document.getElementById("coor-2").value;

    if (bar && coordenada1 && coordenada2){
        new lugar ({nombreLugar: bar,
                                      coordenada1: coordenada1,
                                      coordenada2: coordenada2
        })
        console.log(arrayLugares);
        cargarBar();
    }    
    
}


//  COMENTARIOS SUPLENTES//


// template.innerHTML = `
//     <a class= "album" id="release${lugarFinder}">
//       <p>${lugar.nombreLugar.toUpperCase()}</p>
//       <img src="imgs/imagen${lugarFinder}.jpeg" width="200" height="200">
//       <p>${lugar.coordenada}</p>
//     </a>
//     `;


// const marker = L.marker(([-34.6003048,-58.4388054]), {icon: myIcon}).addTo(mymap);

// const marker2 = L.marker(([-34.5914768,-58.4383124]), {icon: myIcon}).addTo(mymap);

// //popup
// let template = `
// <h3>La Trompeta del Tata</h3>
// <img class="imagen" src="assets/tata.png">
// <br>
// <button type="button">Ver más</button>
// `
// marker.bindPopup(template);

// marker2.bindPopup(template);