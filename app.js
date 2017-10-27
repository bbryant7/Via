const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/snippetdb');
const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const session = require('express-session');
const userDataSchema = require('./models/userData')
const app = express();

let data = [{
  "id": 1,
  "title":"North Austin Breweries",
  "details":"lkajhsfklah jsdlfkjahsd lkfha slkfjhaslkf jhaslk jfhaslk jhfalskjhf askjhfaklsjh flaskhfalkjhs flasj khfdlkasj hflkasjhfl jhsalk jhflakshfdl aksjhdf",
  "img":"https://images.unsplash.com/photo-1438557068880-c5f474830377?w=1353&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "map":{
  },
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
  ]

},
// {
//   "id": 2,
//   "title":"Explore Soco District",
//   "details":"lkajhsfklahjsdlfkjahsdlkfhaslkfjhaslkfjhaslkjfhaslkjhfalskjhfaskjhfaklsjhflaskhfalkjhsflasjkhfdlkasjhflkasjhfljhsalkjhflakshfdlaksjhdf",
//   "img":"http://www.videocityguide.com/austin/PCWUploads/South%20Congress%20Avenue%20Shopping/g3.jpg",
//
// },
// {
//   "id": 3,
//   "title":"South-side Spots",
//   "details":"lkajhsfklahjsdlfkjahsdlkfhaslkfjhaslkfjhaslkjfhaslkjhfalskjhfaskjhfaklsjhflaskhfalkjhsflasjkhfdlkasjhflkasjhfljhsalkjhflakshfdlaksjhdf",
//   "img":"http://www.videocityguide.com/austin/PCWUploads/South%20Congress%20Avenue%20Shopping/thumbnails/g14.jpg",
//
// }
]
// /---------------------------/

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.static('./Public/'));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

// app.use(function(req, res, next) {
//   console.log('in interceptor');
//   if (req.url === '/login') {
//     next()
//     console.log(1);
//   } else if (req.url === '/registration') {
//     next()
//     console.log(4);
//   } else if (!req.session.username) {
//     console.log(2);
//     res.render('login')
//
//   } else {
//     console.log(3);
//     next()
//   }
// })


// LOGIN PAGE
app.post('/login', function(req, res) {
  userDataSchema.findOne().where({
      username: req.body.username,
      password: req.body.password
}) .then(function(results){
    console.log(results);
    if (results !== null){
      req.session.username = req.body.username;
    }
  if (req.session.username === req.body.username) {
      res.render('index')
      console.log("correct Password");
  } else {
    res.render('login', {
      error: "Incorrect username or password."
    });
    console.log("wrong password");
  }
})
})

// link to registration page
app.get('/registration', function(req, res) {
    res.render('registration')
});

// REGISTRATION PAGE

app.post('/registration', function(req, res) {
  if (req.body.regpassword === req.body.confirmpassword) {
    const newUser = new userDataSchema({
      username: req.body.regusername,
      password: req.body.regpassword
    })
    newUser.save()
    .then(function(){
        res.render('index');
      })
} else {
  res.render('registration',{passerror: "Password does not match."})
}
})

// MAIN PAGE
app.get('/', function(req, res) {
    res.render('index');

  })

// SUGGESTIONPAGE
app.get('/routesuggestions', function(req, res) {
    console.log("data",data);
    res.render('routesuggestions', {route: data})
    })

// PREMADE ROUTE - MAP PAGE

app.get('/premade-route', function(req, res) {
    res.render('premaderoute', {route: data})
    })

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
