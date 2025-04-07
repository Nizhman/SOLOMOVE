document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([-7.565279, 110.823883], 15);  // Koordinat Jl. Slamet Riyadi

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Menambahkan marker di lokasi yang ditentukan
    L.marker([-7.565279, 110.823883]).addTo(map)
        .bindPopup("<b>Jl. Slamet Riyadi No. 123, Surakarta</b>")
        .openPopup();
});