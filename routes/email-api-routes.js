module.exports = function (app, db) {

    app.get("/send", function (req,res) {
        var nodemailer = require('nodemailer');

        var transporter = nodemailer.createTransport({
            
            service: 'gmail',
            auth: {
                user: 'jsjswim@gmail.com',
                pass: 'abcd123456$'
            }
        });

        var mailOptions = {
            from: 'jsjswim@gmail.com',
            to: 'sumathi@rocketmail.com',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
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
    });

}