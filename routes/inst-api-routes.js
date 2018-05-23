var db = require("../models");


module.exports = function (app) {

  app.get("/api/instance", function (req, res) {
    db.Class_instance.findAll({
      include: [db.Class_description]
    }).then(function (dbClass_instance) {
      res.json(dbClass_instance);
    });

  });

  //to display all the corresponding classes and timing details when a class description is selected
  app.get("/api/coursesInstances/:id", function (req, res) {
    console.log("========================");
    console.log(req.user);
    console.log("========================");
    var descId = parseInt(req.params.id);
    var queryString = "SELECT Class_instances.id AS 'id', week_day,time, start_date, end_date, seats_total, ClassDescriptionId, length, class_name,(seats_total-seats_filled) AS 'remaining' FROM Class_instances INNER JOIN Class_descriptions ON Class_instances.ClassDescriptionId=Class_descriptions.id AND Class_instances.ClassDescriptionId="+descId+" ORDER BY Class_instances.week_day, Class_instances.time;";
    // console.log(queryString);
    db.sequelize.query(queryString).then(function (courseInstancesData) {

      console.log("Did it work!!");
      //console.log(json.stringify(courseInstancesData,null,2))
      db.User.findAll({
        where: {
          RegisteredUserRuId: req.user.ruId
        }
      }).then(function (userData) {
        console.log("========================");
        console.log(userData);
        // res.json(userData);
        var data =[];
        for(var i=0;i<courseInstancesData[0].length;i++){
          data.push({
            id:courseInstancesData[0][i].id,
            ClassDescriptionId:courseInstancesData[0][i].ClassDescriptionId,
            class_name:courseInstancesData[0][i].class_name,
            start_date:courseInstancesData[0][i].start_date,
            end_date:courseInstancesData[0][i].end_date,
            week_day:courseInstancesData[0][i].week_day,
            time:courseInstancesData[0][i].time,
            length:courseInstancesData[0][i].length,
            seats_total:courseInstancesData[0][i].seats_total,
            remaining:courseInstancesData[0][i].remaining,
            familyId:req.user.ruId,
            users:userData
          })
        }
        res.render('courseReg', {
          courses: data
        });
      })
    });
  });


  app.get("/api/instance/:id", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Class_instance.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Class_description]
    }).then(function (dbClass_instance) {
      res.json(dbClass_instance);
    });
  });

  app.post("/api/instance", function (req, res) {
    // console.log(req.body);
    db.Class_instance.create({
      week_day: req.body.week_day,
      time: req.body.time,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      seats_total: req.body.seats_total,
      seats_filled: req.body.seats_filled,
      ClassDescriptionId: req.body.ClassDescriptionId
      //i can add in a .then here for instance when ready.
    }).then(function (dbInst_description) {
      // db.push(req.body);
      include: [db.Class_description]
      res.json(dbInst_description);
      console.log(dbInst_description);
    });
  });

  app.put("/api/instance", function (req, res) {

  });

};