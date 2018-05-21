$(document).foundation();
$(document).ready(function () {

    $("#login").on("click", function () {
        
        var email = $("#email").val().trim();
        var pwd = $("#pwd").val().trim();
        $.post("/api/signin", {
            email: email,
            password: pwd
        }).then(function (data) {
            $("#errorData").html('Welcome '+data.firstName+" "+data.lastName);
            // console.log(data);
            window.location.replace('/courses');
        }).catch(function (err) {
            // console.log(err);
            $("#errorData").html("Invalid Input!! </br>The login and password do not match");
        })
        
    })

    $("#register").on("click", function () {
        
        window.location.replace("/register")
        
    })

});