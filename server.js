// This page works

//step 1- starting point for the node/express server//
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');
var uuid = require("uuid");
var mysql = require("mysql");
var session = require('express-session');

//requiring passport as we configured it
var passport=require("./config/passport");
var app = express();
var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");


//setup express app for data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//we need session to keep track of user's login status
app.use(session({secret:"keyboard cat", resave:true,saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());


// Routes
require("./routes/html-routes.js")(app);
require("./routes/descr-api-routes.js")(app);
require("./routes/inst-api-routes.js")(app);


//Routes to send email
require("./routes/email-api-routes.js")(app,db);
//API Routes to RegisteredUser 
require("./routes/registeredUser-api-routes")(app,db);
//API Routes to User(Parent/Child) 
require("./routes/user-api-routes")(app,db);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT localhost:" + PORT);
  });
});