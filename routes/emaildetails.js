module.exports = function (data, childData) {


    var nodemailer = require('nodemailer');

    function txtForCourses() {
        var htmlText = "<h3>";
        html += "You have Registered members of Your Family.<br>Registration Details:<br>";
        for (var i = 0; i < data.length; i++) {
            var sqlString = "Select class_descriptions.class_name, class_instances.week_day, class_instances.start_date, class_instances.end_date, class_instances.time, registereduser.firstName, registereduser.lastName from registereduser, class_descriptions, class_instances where registereduser.ruId='" + data[i].FamilyId + "' and class_descriptions.id=" + data[i].ClassDescriptionId + " and class_instances.id=" + data[i].ClassInstanceId + " ;";
            db.sequelize.query(sqlString).then(function (resData) {

                html += " Class Start Date: " + resData.start_date + "<br>";
                html += " Class End Date: " + resData.end_date + "<br>";
                html += " Class Length: " + resData.time + " mins+<br>";
                html += "Student: " + data[i].FullName + "<br>";

            })
        }
        return html;
    }

    function txtForEmail() {
        var htmlText = "<h3>";
        htmlText += "Welcome " + data.firstName + " " + data.lastName;
        htmlText += "<br>You have Succesfully Registered!<br>";
        htmlText += " Here are details of Your Registration<br>";
        htmlText += "Created On: " + data.createdAt + "<br>";
        htmlText += "Address: <br>" + data.address1 + " " + data.city + ", " + data.state + " " + data.zipCode + "<br></h3>";
        htmlText += "Children:<br>"
        if (childData !== "none") {
            for (i = 0; i < childData.length; i++) {
                htmlText += " <h4>Child1: </h4><h3>" + childData[i].fullName + "</h3><br>"
            }
        }
        return htmlText;
    }
    var transporter = nodemailer.createTransport({

        service: 'gmail',
        auth: {
            user: 'jsjswim@gmail.com',
            pass: 'abcd123456$'
        }
    });

    var mailOptions = {
        from: 'jsjswim@gmail.com',
        to: data.email,
        subject: ((childData === "courses") ? 'Registration Successful' : 'Welcome to JSJSwim'),
        html: ((childData === "courses") ? txtForCourses() : txtForEmail())
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.render("email", {
                "msg": "Its not working!!"
            });
        } else {
            console.log('Email sent: ' + info.response);
            res.render("email", {
                "msg": "Success! will it ever work!!"
            });
        }
    });


}