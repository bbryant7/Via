navigator.geolocation.getCurrentPosition(displayLocation);
let latitude;
let longitude;

function displayLocation(position) {
  // current coordinates
  // latitude and longitude are numbers
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  let start = `"${latitude}, ${longitude}"`;
  console.log("start", start);
  let current = new google.maps.LatLng(latitude, longitude)
  console.log('displayLocation function ran')
  console.log("latitude", latitude);
  console.log("longitude", longitude);
  console.log("current", current);

  showMap(current);

}

function showMap(current) {
  let directionsService = new google.maps.DirectionsService;
  let directionsDisplay = new google.maps.DirectionsRenderer;
  let map = new google.maps.Map(document.getElementById('make-map'), {
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
  console.log("are you calculating??")
  let start = `${latitude}, ${longitude}`;
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
let end;
   if (document.getElementById("end").value != "" || document.getElementById("end").value.length > 0) {
      end = document.getElementById("end").value;
   } else {
     end = document.getElementById("restaraunt").value;
   }
   console.log("way",waypoints)
   console.log("dest",end)
   console.log("rest",document.getElementById('restaraunt').value)
   console.log("input",document.getElementById('end').value)
   console.log("start2",start)

  directionsService.route(
    {
      origin: start,
      destination: end,
      waypoints: waypoints,
      optimizeWaypoints: true,
      travelMode: 'WALKING'
    }

  , function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);

      console.log("woohooo!!")

    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });

}
