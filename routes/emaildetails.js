module.exports = function (data, childData) {

   
        var nodemailer = require('nodemailer');
        function txtForEmail(){
            var htmlText="<h3>";
            htmlText+="Congratulations "+ data.firstName +" "+data.lastName;
            htmlText+="<br>You have Succesfully Registered!<br>";
            htmlText+=" Here are details of Your Registration<br>";
            htmlText+="Created On: "+data.createdAt+"<br>";
            htmlText+="Address: <br>"+data.address1+" "+data.city+", "+data.state+" "+data.zipCode +"<br></h3>";
            htmlText+="Children:<br>"
            for(i=0;i<childData.length;i++){
                htmlText+=" <h4>Child1: </h4><h3>"+childData[i].fullName + "</h3><br>"
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
            subject: 'Sending Email using Node.js',
            html: txtForEmail()
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