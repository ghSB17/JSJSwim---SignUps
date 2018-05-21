var emailToParent = require("./emaildetails");


module.exports = function (app, db) {

app.get("/api/instance/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Class_instance.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Class_description]
    }).then(function(dbClass_instance) {
      res.json(dbClass_instance);
    });
  });


  //above is a sample only
  app.post("/api/participant", function(req,res) {

    console.log("In get participant API");
    db.Class_participant.findOne({
      where:{
        ClassDescriptionId: req.body.participant.ClassDescriptionId,
        ClassInstanceId: req.body.participant.ClassInstanceId,
        FamilyId: req.body.participant.FamilyId,
        UserId: req.body.participant.UserId,
        FullName: req.body.participant.FullName
      }
    }).then( function(resData) {
        res.json(resData);
    })

  })

  app.post("/api/classParticipant", function(req, res) {
    console.log("In ClassParticipant API")
    db.Class_participant.bulkCreate(req.body.participantData).then(function(resData){
      emailToParent(req.body.participantData, "courses");
      res.json("/");
    })
  })





}