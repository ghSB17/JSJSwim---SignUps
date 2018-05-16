// This page works

//step 1- starting point for the node/express server//
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');
var uuid = require("uuid");

//To include Passport//
var passport   = require('./config/passport')
var session    = require('express-session')
//end of new inclusions//

var app = express();
var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");


//setup express app for data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport //
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
app.use(passport.session()); 
// persistent login sessions//

// Static directory
app.use(express.static("public"));
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

//Routes to send email
require("./routes/email-api-routes.js")(app,db);
//API Routes to RegisteredUser 
require("./routes/registeredUser-api-routes")(app,db);
//API Routes to User(Parent/Child) 
require("./routes/user-api-routes")(app,db);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({force:true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT localhost:" + PORT);
  });
});