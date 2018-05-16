// import { stat } from "fs";

$(document).ready(function () {

    $("#btnSubmit").on("click", function () {
        var fname = $("#fname").val().trim();
        var lname = $("#lname").val().trim();

        var email = $("#email").val().trim();
        var pwd1 = $("#pwd1").val().trim();
        var pwd2 = $("#pwd2").val().trim();

        var address1 = $("#address1").val().trim();
        var address2 = $("#address2").val().trim();

        var city = $("#city").val().trim();
        var state = $("#state").val().trim();
        var zip = $("#zip").val().trim();

        //error checking to be done on input values
        //yet to write 
        //end of error checking
        var regUserData = {
            firstName: fname,
            lastName: lname,
            email: email,
            password: pwd1,
            address1: address1,
            address2: address2,
            city: city,
            state: state,
            zipCode: zip
        }
        console.log(regUserData);

        $.ajax({
            url: "/api/registeredUser",
            data: regUserData,
            method: 'POST'
        }).then(function (data) {
            console.log(data);

        })
    });
})