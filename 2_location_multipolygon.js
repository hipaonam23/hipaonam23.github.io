// Creating map options
let mapOptions = {
	center: [48, 2],
	zoom: 10
}
                 
// Creating a map object
let map = new L.map('map', mapOptions);
// Creating a Layer object
let layer = new 
	
/* display basemap tiles -- see others at https://leaflet-extras.github.io/leaflet-providers/preview/ */
L.TileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://osm.org/copyright">\
        OpenStreetMap</a> contributors, &copy;\
        <a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map);

  /* Display a point marker with pop-up text */
  L.marker([41.77, -72.69]).addTo(map) // EDIT marker coordinates
  .bindPopup("Insert pop-up text here"); // EDIT pop-up text message
