$(document).ready(function () {

    $(document).on('click', ".regCourse", function () {
        var classInstanceId = $(this).attr("data-instanceId");
        var ClassDescriptionId = $(this).attr("data-descriptionId");
        var familyId = $(this).attr("data-familyId");


        var id = $(this).data('instanceid');
        var iddiv = $("#div" + id);
        var participantData = [];
        var flag = true;
        var len = iddiv.find("input").length;
        
        var i = 0;
        iddiv.find("input").each(function () {
            i++;
            alert(i);
            var state = $(this).prop("checked");
            var userId = $(this).attr("data-userid");
            var fName = $(this).attr("value");
            if (state) {
                var participantObj = {
                    ClassDescriptionId: ClassDescriptionId,
                    ClassInstanceId: classInstanceId,
                    FamilyId: familyId,
                    UserId: userId,
                    FullName: fName
                };
                console.log(participantObj);
                $.ajax({
                    type: "POST",
                    url: "/api/participant",
                    data: {
                        participant: participantObj
                    }
                }).then(function (resData) {
                    console.log("here");
                    console.log(resData);
                    if (!resData) {
                        participantData.push(participantObj);
                    } else {
                        flag = false;
                    }
                    console.log(participantData);
                    console.log(participantData.length);
                    if (i === len) {
                        if (participantData.length > 0 && flag) {
                            console.log(participantData);
                            $.ajax({
                                type: "POST",
                                url: "/api/classParticipant",
                                data: {
                                    participantData: participantData
                                }
                            }).then(function (resData) {
                                console.log(resData);
                                window.location.replace(resData);
                            })
                        } else if (!flag) {
                            $("#errorData").html("The member(s) already registered for this program!, Choose different participant/program to complete your registration!!</h4>");

                        } else {
                            console.log("You have TO select members to be Registered!!");
                            $("#errorData").html("<h4>You MUST select members to complete registration!!</h4>");
                        }
                    }
                })

            }else if (i === len) {
                if (participantData.length > 0 && flag) {
                    console.log(participantData);
                    $.ajax({
                        type: "POST",
                        url: "/api/classParticipant",
                        data: {
                            participantData: participantData
                        }
                    }).then(function (resData) {
                        console.log(resData);
                        window.location.replace(resData);
                    })
                } else if (!flag) {
                    $("#errorData").html("2)The member(s) already registered for this program!, Choose different participant/program to complete your registration!!</h4>");

                } else {
                    console.log("2)You have TO select members to be Registered!!");
                    $("#errorData").html("2)<h4>You MUST select members to complete registration!!</h4>");
                }
            }
        });

    })

})