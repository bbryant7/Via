// const mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// mongoose.connect('mongodb://localhost:27017/snippetdb');
// const express = require('express');
// const session = require('express-session');
// const mustacheExpress = require('mustache-express');
// const bodyParser = require('body-parser');
// const userDataSchema = require('./models/userinfo')
// const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use(function(req, res, next) {
  console.log('in interceptor');
  if (req.url === '/login') {
    next()
    console.log(1);
  } else if (req.url === '/registration') {
    next()
    console.log(4);
  } else if (!req.session.username) {
    console.log(2);
    res.render('login')

  } else {
    console.log(3);
    next()
  }
})


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
    snippetSchema.find().then(function(snippets) {
      res.render('home', {
        available: snippets
      });
      console.log("correct Password");
    })
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
      return snippetSchema.find()
    })
      .then(function(snippets) {
        res.render('home', {
          available: snippets
        });
      })
} else {
  res.render('registration',{passerror: "Password does not match."})
}
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
