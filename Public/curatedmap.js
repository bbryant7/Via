let data = [{
  "id": 1,
  "title":"North Austin Breweries",
  "map":{
    "origin": "10615 Metric Blvd",
    "destination": "3001 Industrial Terrace",
    "waypoints": [{
      "location": "10420 Metric Blvd",
      "stopover": true
    },
    {
      "location": "2314 Rutland Dr",
      "stopover": true
    }],
    "optimizeWaypoints": true,
    "travelMode": 'WALKING'
  }
},
{
  "id": 2,
  "title":"Explore Soco District",
  "map":{
    origin: "1506 S Congress Ave",
    destination: "1415 S Congress Ave",
    waypoints: [{
      location: "1300 S Congress Ave",
      stopover: true
    },
    {
      location: "1510 S Congress Ave",
      stopover: true
    },{
      location: "1720 S 1st Street",
      stopover: true
    }],
    "optimizeWaypoints": true,
    "travelMode": 'WALKING'
  }
}]



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
  directionsService.route(data[0].map
  , function(response, status) {
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
