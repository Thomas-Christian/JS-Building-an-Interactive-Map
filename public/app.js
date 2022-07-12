// Create map:                                                       
var map = L.map('map').setView([51.505, -0.09], 13);

// add openstreetmap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Create and add a geolocation marker:
const marker = L.marker([48.87007, 2.346453])
marker.addTo(map).bindPopup('<p1><b>The Hoxton, Paris</b></p1>').openPopup()

// draw the 2nd arrondissement
var polygon = L.polygon([
    [48.863368120198004, 2.3509079846928516],
    [48.86933262048345, 2.3542531602919805],
    [48.87199261164275, 2.3400569901592183],
    [48.86993336274516, 2.3280142476578813],
    [48.86834104280146, 2.330308418109664]
]).addTo(map);                                     

// create red pin marker
var myIcon = L.icon({
    iconUrl: './assets/red-pin.png',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
});

// Metro station markers:
const rS = L.marker([48.866200610611926, 2.352236247419453], {icon: myIcon}).bindPopup('RÃ©aumur-SÃ©bastopol')
const sSD = L.marker([48.869531786321566, 2.3528590208055196], {icon: myIcon}).bindPopup('Strasbourg-Saint-Denis')
const sentier = L.marker([48.8673721067762, 2.347107922912739], {icon: myIcon}).bindPopup('Sentier')
const bourse = L.marker([48.86868503971672, 2.3412285142058167], {icon: myIcon}).bindPopup('Bourse')
const qS = L.marker([48.869560129483226, 2.3358638645569543], {icon: myIcon}).bindPopup('Quatre Septembre')
const gB = L.marker([48.871282159004856, 2.3434818588892714], {icon: myIcon}).bindPopup('Grands Boulevards')

const stations = L.layerGroup([rS, sSD, sentier, bourse, qS, gB]).addTo(map)



