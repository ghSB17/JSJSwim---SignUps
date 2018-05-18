$(document).foundation();
$(document).ready(function () {

    $("#login").on("click", function () {
        var email = $("#email").val().trim();
        var pwd = $("#pwd").val().trim();
        $.post("/api/signin", {
            email: email,
            password: password
        }).then(function (data) {
            console.log(data);
            alert(data);
            window.location.replace('/locations');
        }).catch(function (err) {
            console.log(err);

        })
        alert("you clicked login");
    })

    $("#register").on("click", function () {
        window.location.replace("/register")
        
    })

});