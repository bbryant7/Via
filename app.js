
const express = require('express');
const session = require('express-session');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(bodyParser.urlencoded({
  extended: false
}));


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
      directionsDisplay.setDirections(response);
      var route = response.routes[0];
      var summaryPanel = document.getElementById('directions-panel');
      summaryPanel.innerHTML = '';
      // For each route, display summary information.
      for (var i = 0; i < route.legs.length; i++) {
        var routeSegment = i + 1;
        summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
          '</b><br>';
        summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
        summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
        summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
      }
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}

app.listen(3000, function() {
  console.log('Successfully started express application!');
})


process.on('SIGINT', function() {
  console.log("\nshutting down");
  mongoose.connection.close(function() {
    console.log('Mongoose default connection disconnected on app termination');
    process.exit(0);
  });
});
