function showMap(current) {
  let directionsService = new google.maps.DirectionsService;
  let directionsDisplay = new google.maps.DirectionsRenderer;
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: start
  })

    directionsDisplay.setMap(map);
}


function calculateAndDisplayRoute(directionsService, directionsDisplay, position) {

  directionsService.route({
    origin: origin,
    destination: destination,
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
