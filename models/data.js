let data = [{
  "id": 1,
  "title":"North Austin Breweries",
  "details":"Calling all beer lovers! Spend some time in north Austin, home to a cluster of amazing craft breweries.",
  "img":"https://images.unsplash.com/photo-1438557068880-c5f474830377?w=1353&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "waypoints": [
    {
    "id":"1",
    "name": "Adelbert's Brewery",
    "description":"Massive brewery with Belgian-style ales offering weekend tours, happy hour plus seafood truck.",
    "img":""
    },{
    "id":"2",
    "name": "Oscar Blues",
    "description": "Taproom featuring beers, on-site food trucks & live music in a large, industrial space.",
    "img":""
    },  {
    "id":"3",
    "name":"4th Tap",
    "description":"Spacious worker-owned microbrewery with picnic tables & a projector screen in an industrial taproom",
    "img":""
    },  {
    "id":"4",
    "name":"Austin Beer Works",
    "description":"Vibrant brewery crafting beers such as IPAs & ales, plus offering tours & tastings",
    "img":""
    },
  ],
  "map":{
    origin: "10615 Metric Blvd Austin, TX",
    destination: "3001 Industrial Terrace Austin, TX",
    waypoints: [{
      location: "10420 Metric Blvd Austin, TX",
      stopover: true
    },
    {
      location: "2314 Rutland Dr Austin, TX",
      stopover: true
    }],
    optimizeWaypoints: true,
    travelMode: 'WALKING'
  }
},
{
  "id": 2,
  "title":"Explore Soco District",
  "details":"Eat like a local and peruse the unique shops Austin's famous Soco district has to offer.",
  "img":"http://www.videocityguide.com/austin/PCWUploads/South%20Congress%20Avenue%20Shopping/g3.jpg",
  "waypoints": [
    {
    "id":"1",
    "name": "Lucy in Disguise With Diamonds",
    "description":"Enormous costume outpost offering costumes, vintage clothing, boas, masks, wigs, prop & other glitz.",
    "img":""
    },{
    "id":"2",
    "name": " i love you so much Mural",
    "description": "Iconic Austin mural outside of Jo’s Coffee.",
    "img":""
    },  {
    "id":"3",
    "name":"Yard Dog Art Gallery",
    "description":"Yard dog presents a wide variety of pieces from artists across North America",
    "img":""
    },  {
    "id":"4",
    "name":"Greetings From Austin Mural",
    "description":"Austin landmark Mural",
    "img":""
    }, {
    "id":"5",
    "name":"Home Slice Pizza",
    "description":"NY style thin-crust slices & pies for dining in or carry out, open late for takeaway on weekends.",
    "img":""
    },
  ],
  "map":{
    origin: "1720 S 1st Street austin ,tx",
    destination: "1415 S Congress Ave Austin, TX",
    waypoints: [{
      location: "1300 S congress Ave Austin, TX",
      stopover: true
    },
    {
      location: "1510 S Congress Ave Austin, TX",
      stopover: true
    },{
      location: "1506 S congress Ave Austin, TX",
      stopover: true
    }],
    optimizeWaypoints: true,
    travelMode: 'WALKING'
  }

},{
  "id": 3,
  "title":"South-Side Spots",
  "details":"Coming Soon.",
  "img":"http://www.videocityguide.com/austin/PCWUploads/South%20Congress%20Avenue%20Shopping/thumbnails/g14.jpg",

},{
"id": 4,
"title":"Place for Pups",
"details":"Coming Soon.",
"img":"https://images.unsplash.com/photo-1433162653888-a571db5ccccf?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",

},{
"id": 5,
"title":"Live Music on the Menu",
"details":"Coming Soon.",
"img":"https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",

},{
"id": 6,
"title":"Keep Austin Weirder",
"details":"Coming Soon.",
"img":"https://images.unsplash.com/photo-1458349726531-234ad56ba80f?auto=format&fit=crop&w=1360&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",

}

]


module.exports = data;
