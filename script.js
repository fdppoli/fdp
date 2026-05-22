const lat = -32.9468;
const lng = -60.6505

const map = L.map('map').setView([lat, lng], 16);

L.tileLayer('https://{s}.tile.opennstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([lat, lng])
.addTo(map)
.bindPopup('<b>Viper</b><br>Laprida 847, Rosario')
.openPopup();