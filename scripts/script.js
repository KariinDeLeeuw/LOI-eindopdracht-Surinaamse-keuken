// Initialize and add the map
function initMap() {
  // The location of Schoolstraat
  var thuis = {lat: 52.178263, lng: 5.442929};
  // The map, centered at thuis
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 7, center: thuis});
  // The marker, positioned at thuis
  var marker = new google.maps.Marker({position: thuis, map: map});
}
