//this page works.  

var path = require("path");


module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    console.log('i clicked on home')
  });

  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/aboutus.html"));
  });
  
  app.get("/locations", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/locations.html"));
  });

  app.get("/swimlevels", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/swimlevels.html"));
  });

  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname,"../public/register.html"));
  })

  app.get("/learning", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/learning.html"));
  });

  // app.get("/contact", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/contact.html"));
  // });

  app.get("/faq", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/faq.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  
};
