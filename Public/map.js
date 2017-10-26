navigator.geolocation.getCurrentPosition(displayLocation);
let latitude;
let longitude;
function displayLocation(position) {
  // current coordinates
  // latitude and longitude are numbers
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  let start = `"${latitude}, ${longitude}"`;
  let current = new google.maps.LatLng(latitude, longitude)

  showMap(current);

}

function showMap(current) {
  let directionsService = new google.maps.DirectionsService;
  let directionsDisplay = new google.maps.DirectionsRenderer;
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: current
  })
  console.log('showMap function ran')
  let marker = new google.maps.Marker({
    position: current,
    map: map
  })

  directionsDisplay.setMap(map);

  document.getElementById('submit').addEventListener('click', function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
    console.log('fire!');
  });

}

function calculateAndDisplayRoute(directionsService, directionsDisplay, position) {
  let start = `"${latitude}, ${longitude}"`;
  console.log("start", start);
  let waypoints = [];
  let waypointsOptions = document.getElementById('waypoints');
  for (var i = 0; i < waypointsOptions.length; i++) {
    if (waypointsOptions.options[i].selected) {
      waypoints.push({
        location: waypointsOptions[i].value,
        stopover: true
      });
    }
  }
  directionsService.route({
    origin: start,
    destination: document.getElementById('end').value,
    waypoints: waypoints,
    optimizeWaypoints: true,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      // visiual display of route legs
        directionsDisplay.setDirections(response);

        // }
      console.log("woohooo!!")
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}
