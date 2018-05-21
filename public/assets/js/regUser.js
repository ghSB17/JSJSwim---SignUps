$(document).ready(function () {

    var childUsers = [];
    var children = [];
    $("#register").on("click", function (event) {
        event.preventDefault();
        // alert("what's working");
        var email = $("#email").val().trim();
        var password1 = $("#password1").val().trim();
        var password2 = $("#password2").val().trim();
        var fname = $("#fname").val().trim();
        var lname = $("#lname").val().trim();
        var address1 = $("#address1").val().trim();
        var address2 = $("#address2").val().trim();
        var city = $("#city").val().trim();
        var state = $("#state").val().trim();
        var zip = $("#zipcode").val().trim();
        var phonenumber = $("#phonenumber").val().trim();

        if (email === "" || password1 === "" || password2 == "" || fname == "" || lname == "" || address1 == "" || city == "" || state == "" || zip == "" || phonenumber == "") {

            $("#errors").html("Some important input fields are left incomplete");
            $("#errors").css("display", "block");
        } else {
            $.post("/api/registeredUser", {
                firstName: fname,
                lastName: lname,
                email: email,
                password: password1,
                address1: address1,
                address2: address2,
                city: city,
                state: state,
                zipCode: zip,
                phoneNumber: phonenumber,
                children: ( (children.length>0) ? children : "none")
            }).then(function (data) {
                // console.log(data);
                window.location.replace(data);
            }).catch(function (err) {
                console.log(err);
            });

        }
    });


    $("#addchild").on("click", function () {
        var html = "<div class='grid-x grid-margin-x' id='childdiv'>";
        html += "<div class='cell small-5 medium-5 large-5'> <label>First Name: <input type='text' placeholder='First Name' id='childfn'></label></div>";
        html += "<div class='cell small-4 medium-4 large-4'> <label>Last Name: <input type='text' placeholder='Last Name' id='childln'></label></div>";
        html += "<div class='cell small-3 medium-3 large-3'><a class='addbtn button small' style='" + "margin-top:28px" + "'>Add</a></div></div>";
        // alert(html);
        $(this).css("visibility", "hidden");
        $("#userchild").append(html);
    })

    $(document).on('click', '.addbtn', function () {


        var fname = $("#childfn").val().trim();
        var lname = $("#childln").val().trim();

        // console.log(childUsers);

        var fullName = properCase(fname) + " " + properCase(lname);
        children.push(fullName);

        var html = "<div class='grid-x'> <div class='cell small-8 medium-8 large-8'>" + fullName + "</div>";
        html += "<div class='cell large-4'><a class='delbtn button small' data-id='" + childUsers.length + "' style='margin-top:-5px'><i class='fas fa-minus-circle'></i></a><br></div></div>";
        $("#userchild").html('');
        childUsers.push(html);
        $("#addchild").css("visibility", "visible");
        $('#addedchildren').html(childUsers.toString().replace(/,/g, ""));
    });

    $(document).on('click', '.delbtn', function () {
        var idNum = $(this).data("id");
        alert(idNum);
        if (children.length !== 1) {
            children.splice(idNum, 1);
            childUsers.splice(idNum, 1);
            $('#addedchildren').html(childUsers.toString().replace(/,/g, ""));
        } else {
            children.length = 0;
            childUsers.length = 0;
            $('#addedchildren').html("");
        }

    });

    function properCase(strName) {
        var strN = strName;
        return (strN.charAt(0).toUpperCase() + strN.slice(1));
    }
})