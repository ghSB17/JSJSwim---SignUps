var db = require("../models");

module.exports = function (app) {

  app.get("/api/description", function (req, res) {
    db.Class_description.findAll({
      //add getting all class instances to put into descriptions.
      // include: [db.instance]//adding the coresponding instance folder.
    }).then(function (dbClass_description) {
      res.json(dbClass_description);
      // console.log(dbClass_description);
    });
  });

  app.get("/api/description/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Class_description.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Class_instance]
    }).then(function(dbClass_description) {
      res.json(dbClass_description);
    });
  });

  app.post("/api/description", function (req, res) {
    console.log(req.body);
    db.Class_description.create({
      class_name: req.body.class_name,
      age_min: req.body.age_min,
      age_max: req.body.age_max,
      length: req.body.length
      //i can add in a .then here for instance when ready.
    }).then(function (dbClass_description) {
      // db.push(req.body);
      res.json(dbClass_description);
      console.log(dbClass_description);
    });
  });

app.put("/api/description", function(req, res) {

})
//testing line below.
  // app.post("/api/description", function(req, res) {
  //   db.Class_description.create(req.body).then(function(dbpost) {
  //     res.json(dbpost);
  //   })
  // })
};