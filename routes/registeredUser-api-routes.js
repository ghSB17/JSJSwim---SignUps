var passport = require("../config/passport");
var emailToParent = require("./emaildetails");

module.exports = function (app, db) {


    app.post("/api/signin", passport.authenticate("local"), function (req, res) {

        if (!req.user) {
            console.log("=====error======");
            console.log("error");
            console.log("=====error======");
            res.json("error`");
        }
        console.log(req.user);
        res.json(req.user);
    })

    app.get("/api/user", function(req,res){
        console.log("In REGISTERED USER API ROUTES");
        if( req.user )
            return res.json(true);
        else 
            return res.json(false);
    })

    app.get("/api/registeredUser", function (req, res) {
        db.RegisteredUser.findAll({
            include: [db.User]
        }).then(function (RUserData) {
            // res.json(RUserData);
            res.render('email', {
                users: RUserData
            });
        })

    })

    app.post("/api/registeredUser", function (req, res) {
        console.log(req.body);
        db.RegisteredUser.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            address1: req.body.address1,
            address2: req.body.address2,
            city: req.body.city,
            state: req.body.state,
            zipCode: req.body.zipCode,
            phoneNumber: req.body.phoneNumber
        }).then(function (regUserData) {
            // res.json(regUserData);
            db.User.create({
                fullName: regUserData.firstName + " " + regUserData.lastName,
                userType: 'Parent',
                RegisteredUserRuId: regUserData.ruId
            }).then(function (resUser) {
                console.log("Here!!-----");

                var childUsers = [];
                if (req.body.children !== "none") {
                    for (i = 0; i < req.body.children.length; i++) {
                        var cUser = {
                            fullName: req.body.children[i],
                            userType: 'Child',
                            RegisteredUserRuId: regUserData.ruId
                        }
                        console.log(childUsers);
                        console.log('--------------');
                        childUsers.push(cUser);
                    }
                    db.User.bulkCreate(childUsers).then(function (result) {
                        console.log("===========");
                        console.log(result)
                        console.log("===========");
                        console.log("did it happen!!");
                        emailToParent(db, regUserData, req.body.email, childUsers);
                        res.json("/login");
                    });
                } else {
                    emailToParent(db, regUserData, req.body.email, "none");
                    res.json("/login");
                }

            })

        });

    });
};