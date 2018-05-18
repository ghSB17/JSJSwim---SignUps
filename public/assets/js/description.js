$(document).ready(function () {

    $("#descripSubmit").click(function () {
        $.post('/api/description', $('#descrip-form').serialize(), function (data) {
                console.log(data);
                //add how this will be displayed here.
                createDescripRow(data);
            },
            'json'
        );
    });






    //     var $newdescrip = $("input.className");
    //     var $formContainer = $(".descrip-container");

    //             var nameInput = $("#className").val().trim()
    //             var ageMinInput = $("#ageMin").val().trim()
    //             var ageMaxInput = $("#ageMax").val().trim()
    //             var legnthInput = $("#length").val().trim()
    //             var descripSubmit = $("#descripSubmit").val().trim()

    //             //event listener for submittion
    //             $(document).on("click", "#descripSubmit", hanldeFormSubmit);

    //             var descriptions = [];

    //             getDescriptions();


    //             //more may need to be added here. check back cms.js. will need to get list of past classes

    //         getClasses();
    function createDescripRow(descripData) {
        var newTr = $("<tr>");
        //check where i'm pulling description from.  may be the wrong word. 
        newTr.data("description", descripData);
        newTr.append("<td>" + descripData.class_name + "</td>");
        newTr.append("<td>" + descripData.age_min + "</td>");
        newTr.append("<td>" + descripData.age_max + "</td>");
        newTr.append("<td>" + descripData.length + "<td>");
        //future add the link with the instance?
        $('#description-table').append(newTr);

        return newTr;
    }

    function getDescriptions() {
        $.get("api/description", function (data) {
            for (i = 0; i <data.length; i++) {
                createDescripRow(data[i]);
            };

        });
    };

    getDescriptions();

    //         function updateDecsription(description) {
    //             $.ajax({
    //                 method: "PUT",
    //                 url: "/api/description",
    //                 data: description
    //             }).then(getDescription);
    //         }
    //   // This function constructs a todo-item row
    //   function createNewRow(todo) {
    //     var $newInputRow = $(
    //       [
    //         "<li class='list-group-item todo-item'>",
    //         "<span>",
    //         description.text,
    //         "</span>",
    //         "<input type='text' class='edit' style='display: none;'>",
    //         "<button class='delete btn btn-danger'>x</button>",
    //         "<button class='complete btn btn-primary'>✓</button>",
    //         "</li>"
    //       ].join("")
    //     );

    //     $newInputRow.data("description", description);
    //     return $newInputRow;
    //   }

    // function handleFormSubmit(event) {
    //     event.preventDefault();
    //     if (!nameInput.val().trim().trim()) {
    //         return;
    //     }

    //     var newDescription = {
    //         class_name: nameInput,
    //         age_min: ageMinInput,
    //         age_max: ageMaxInput,
    //         length: lengthInputz,
    //     };
    //     submitPost(newDescription);
    //     };


    //     function submitPost(class_description) {
    //         $.post("/api/description", class_description, function () { //may want to do req res down.
    //             window.location.href = "/contact";
    //         });
    //     }

    //     //function for creating an description.  calls getClasses upon completion.
    //     function upsertdesc(descripData) {
    //         $.post("/api/description", descripData)
    //             .then(getClasses);
    //     }


    //     //function for retrieving authors and getting them ready to be rendered
    //     function getClasses() {
    //         $.get("/api/description", function (data) {
    //             var rowsToAdd = [];
    //             for (var i = 0; i < data.length; i++) {
    //                 rowsToAdd.push(createDescRow(data[i]));
    //             }
    //             renderDescList(rowsToAdd);
    //             nameInput.val("");
    //         });
    //     };

    //     function postDescrip(post) {
    //         $.ajax({
    //                 method: "PUT",
    //                 url: "/api/description",
    //                 data: post
    //             })
    //             .then(function () {
    //                 window.location.href = "/contact";
    //             });
    //     }
});