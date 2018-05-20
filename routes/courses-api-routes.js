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