// $(document).foundation();
$(document).ready(function () {

    $("#login").on("click", function () {
        
        var email = $("#email").val().trim();
        var pwd = $("#pwd").val().trim();
        $.post("/api/signin", {
            email: email,
            password: pwd
        }).then(function (data) {
            $("#errorData").css("background-color","lightblue");
            $("#errorData").html('<h2>Welcome '+data.firstName+" "+data.lastName+"!</h2>");
            // console.log(data);
            window.location.replace('/courses');
        }).catch(function (err) {
            // console.log(err);
            $("#errorData").html("<h3>Invalid Input!! </br>Enter Correct Information!!</h3>");
        })
        
    })

    $("#register").on("click", function () {
        
        window.location.replace("/register")
        
    })

});