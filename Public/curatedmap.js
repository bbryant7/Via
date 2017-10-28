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
 console.log("displayLocation function ran");
  showMap(current);

}

function showMap(current) {
  let directionsService = new google.maps.DirectionsService;
  let directionsDisplay = new google.maps.DirectionsRenderer;
  let map = new google.maps.Map(document.getElementById('curated-map'), {
    zoom: 12,
    center: current
  })
  console.log('showMap function ran')
  let marker = new google.maps.Marker({
    position: current,
    map: map
  })

  directionsDisplay.setMap(map);
  calculateAndDisplayRoute(directionsService, directionsDisplay);
  console.log('fire!');
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
    origin: "10615 Metric Blvd",
    destination: "3001 Industrial Terrace",
    waypoints: [{
      location: "10420 Metric Blvd",
      stopover: true
    },{
      location: "2314 Rutland Dr",
      stopover: true
    }],
    optimizeWaypoints: true,
    travelMode: 'WALKING'
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
