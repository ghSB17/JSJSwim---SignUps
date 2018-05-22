module.exports = function (db, data, emailaddr, childData) {


    var nodemailer = require('nodemailer');
    var email = "";
    var transporter = nodemailer.createTransport({

        service: 'gmail',
        auth: {
            user: process.env.BRANCH_EMAIL || 'jsjswim@gmail.com',
            pass: process.env.BRANCH_SECRET_CODE || 'abcd123456$'
        }
    });

    var mailOptions = {
        from: 'jsjswim@gmail.com',
        to: emailaddr,
        subject: ((childData === "courses") ? 'JSJSwim Courses Registration' : 'Welcome to JSJSwim'),
        html: ((childData === "courses") ? txtForCourses() : txtForEmail())
    };

    function txtForCourses() {
        var html = "<h3>"+ "Hello "+data[0].ParentName+"! <br>";
        html += "You have Registered members of Your Family at JSJSwim for Swim Lessons.<br>Registration Details:<br><br>";

            for (var i = 0; i < data.length; i++) {
                html+="Class: "+data[i].className;
                html += " Class Start Date: " + data[i].startDate + "<br>";
                html += " Class End Date: " + data[i].endDate + "<br>";
                html += " Class Time: " + data[i].time + "<br>";
                html+=" Class Length: "+data[i].length+" mins<br>";
                html += "Student: " + data[i].fullName + "<br><br>";
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


    transporter.sendMail(mailOptions, function (error, info) {
        
        if (error) {
            console.log("IN ERROR_____________________________________");
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });


}