var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
app.get("/api/instance", function(req, res) {
    db.Class_instance.findAll({
      // include: [db.some other table when ready]
    }).then(function(dbClass_instance) {
      res.json(dbClass_instance);
    });
  });


app.post("/api/instance", function (req, res) {
  console.log(req.body);
  db.Class_instance.create({
    week_day: req.body.week_day,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    seats_total: req.body.seats_total,  
    seats_filled: req.body.seats_filled,
    ClassDescriptionId: req.body.ClassDescriptionId
    //i can add in a .then here for instance when ready.
  }).then(function (dbInst_description) {
    // db.push(req.body);
    res.json(dbInst_description);
    console.log(dbInst_description);
  });
});

app.put("/api/instance", function(req, res) {

})

};