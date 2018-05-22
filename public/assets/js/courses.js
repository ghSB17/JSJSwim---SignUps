$(document).ready(function () {

    $("#errorData").hide();
    $("#aregister").hide();

    $(document).on('click', ".regCourse", function () {

        var classInstanceId = $(this).attr("data-instanceId");
        var ClassDescriptionId = $(this).attr("data-descriptionId");
        var familyId = $(this).attr("data-familyId");


        var id = $(this).data('instanceid');
        var iddiv = $("#div" + id);
        var participantObj=[];
        var sqlString=""
        iddiv.find("input").each(function () {
            // alert(i);
            var state = $(this).prop("checked");
            var userId = $(this).attr("data-userid");
            var fName = $(this).attr("value");
    
            if (state) {
                participantObj.push({
                    ClassDescriptionId: ClassDescriptionId,
                    ClassInstanceId: classInstanceId,
                    FamilyId: familyId,
                    UserId: userId,
                    FullName: fName
                });
                sqlString+="SELECT * FROM class_participants WHERE ClassDescriptionId = "+ClassDescriptionId+ " and ClassInstanceId= "+classInstanceId+ " and FamilyId='"+familyId+ "' and UserId="+userId+" UNION ";
            }
        });
        console.log(participantObj);
        if(participantObj.length==0){
            $("#errorData").css('background-color','red');
            $("#errorData").html("<h4>You MUST select members to complete registration!!</h4>");
            $("#errorData").show();
        } else {
        var n= sqlString.lastIndexOf("UNION");
        sqlString=sqlString.slice(0,n)+";";
        $.ajax({
                    type: "POST",
                    url: "/api/participant",
                    data: {
                        sqlString: sqlString
                    }
                }).then(function (resData) {
                    if(resData[0].length==0){
                        $.ajax({
                            type: "POST",
                            url: "/api/classParticipant",
                            data: {
                                participantData: participantObj
                            }
                        }).then(function (resData) {
                            console.log(resData);
                            $("#content").hide();
                            $("#errorData").css('background-color','lightblue');
                            $("#errorData").html("<h4>Registration Complete!!</h4>");
                            $("#errorData").show();
                            $("#aregister").show();
                        })
                    } else {
                        
                        $("#errorData").css('background-color','red');
                        $("#errorData").html("<h4>The member(s) already registered for this program!, Choose different participant/program to complete your registration!!</h4>");
                        $("#errorData").show();
                        
                    }
                })




            }
        })

})
