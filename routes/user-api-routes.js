module.exports=function(app, db){
 
    app.post("/api/User", function(req, res){
        db.User.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            userType:req.body.userType,
            RegisteredUserRuId:req.body.RegisteredUserRuId
        }).then( function(userData) {
            res.json(userData);
        });

    })

} 