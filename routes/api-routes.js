var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/api/description", function(req, res) {
    db.Class_description.findAll({
      include: [db.instance]//adding the coresponding instance folder.
    }).then(function(dbClass_description) {
      res.json(dbClass_description);
    });
  });

  app.get("/api/instance", function(req, res) {
    db.Class_instance.findAll({
      // include: [db.some other table when ready]
    }).then(function(dbClass_instance) {
      res.json(dbClass_instance);
    });
  });

  app.get("/api/participant", function(req, res) {
    db.Class_participant.findAll({
      // include: [db.some other table when ready]
    }).then(function(dbClass_participant) {
      res.json(dbClass_participant);
    });
  });

  app.get("/api/userid", function(req, res) {
    db.User_ID.findAll({
      // include: [db.some other table when ready]
    }).then(function(dbUser_ID) {
      res.json(dbUser_ID);
    });
  });

//   // Add a class instance
//   app.post("/api/new", function(req, res) {
//     console.log("class added:");
//     console.log(req.body);
//     db.class_instances.create({
//     class_instance_id: req.body.class_instance_id,
//     class_ID: req.body.class_ID,
//     week_day: req.body.week_day,
//     start_date: req.body.start_date,
//     end_date: req.body.end_date,
//     length: req.body.length,
//     seats_available: req.body.seats_available,
//     seats_total: req.body.seats_total,
//     seats_filled: req.body.seats_filled
//     })
//     .then(function(addedClass) {
//       res.json(addedClass);
//     });
//   });


};
