module.exports = function (app, db) {


    app.get("/api/registeredUser", function (req, res) {
        db.RegisteredUser.findAll({
            include: [db.User]
        }).then(function (RUserData) {
            res.json(RUserData);
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
            zipCode: req.body.zipCode
        }).then(function (regUserData) {
            // res.json(regUserData);
            db.User.create({
                firstName: regUserData.firstName,
                lastName: regUserData.lastName,
                userType: 'Parent',
                RegisteredUserRuId: regUserData.ruId
            }).then(function (resUser) {
                res.json(resUser);
            })

        })

    })
}