// Inisialisasi peta
var map = L.map('map').setView([-7.3, 108.2], 10);

// Tambahkan layer dasar
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Layer area rawan longsor (dummy polygon)
var longsorLayer = L.polygon([
  [-7.35, 108.15],
  [-7.30, 108.20],
  [-7.25, 108.15]
], {
  color: 'red',
  fillOpacity: 0.5
}).addTo(map);

// Fungsi toggle
function toggleLayer() {
  if (map.hasLayer(longsorLayer)) {
    map.removeLayer(longsorLayer);
  } else {
    map.addLayer(longsorLayer);
  }
}
