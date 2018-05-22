var emailToParent = require("./emaildetails");


module.exports = function (app, db) {

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
  //above is a sample only



  //To check if a participant chosen has already registered for this course!
  app.post("/api/participant", function (req, res) {

    console.log("In get participant API");
    db.sequelize.query(req.body.sqlString).then(function (resultData) {
      res.json(resultData);
    })

  })

  //To update class_participants table with new students 
  app.post("/api/classParticipant", function (req, res) {
    console.log("In ClassParticipant API")
    db.Class_participant.bulkCreate(req.body.participantData).then(function (resData) {

      var sqlStr = "UPDATE class_instances SET seats_filled = seats_filled - " + req.body.participantData.length + "  WHERE id= " + req.body.participantData[0].ClassInstanceId + " AND ClassDescriptionId= "+req.body.participantData[0].ClassDescriptionId+";";
      console.log(sqlStr);
      db.sequelize.query(sqlStr).then(function (result) {

        var emailData = [];
        var sqlString = "Select class_descriptions.class_name, class_descriptions.length, class_instances.week_day, class_instances.start_date, class_instances.end_date, class_instances.time, registereduser.firstName, registereduser.lastName, registereduser.email from registereduser, class_descriptions, class_instances where registereduser.ruId='" + req.body.participantData[0].FamilyId + "' and class_descriptions.id=" + req.body.participantData[0].ClassDescriptionId + " and class_instances.id=" + req.body.participantData[0].ClassInstanceId + " ;";
        db.sequelize.query(sqlString).then(function (result) {
          for (var i = 0; i < req.body.participantData.length; i++) {
            emailData.push({
              className: result[0][0].class_name,
              startDate: result[0][0].start_date,
              endDate: result[0][0].end_date,
              time: result[0][0].time,
              length: result[0][0].length,
              fullName: req.body.participantData[i].FullName,
              ParentName: result[0][0].firstName + " " + result[0][0].lastName
            })
          }
          emailToParent(db, emailData, req.user.email, "courses");
          res.json("/");
        });
      })
    })

  })





}