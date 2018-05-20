//whole file wrapped in a document.ready.
$(document).ready(function () {
//on click of the submit button, post to the api route the info submitted. then "serialize" or create string with the data.
    $("#descripSubmit").click(function () {
        $.post('/api/description', $('#descrip-form').serialize(), function (data) {
                // console.log(data);
                //add how this will be displayed here?
                //then run function below.
                createDescripRow(data);
            },
            'json'
        );
    });

//function to create a description row. this has the table created here and will append to the ID in HTML, Description-table.
    function createDescripRow(descripData) {
        var newTr = $("<tr>");
        //check where i'm pulling description from.  may be the wrong word. 
        newTr.data("description", descripData);
        newTr.append("<td>" + descripData.class_name + "</td>");
        newTr.append("<td>" + descripData.age_min + "</td>");
        newTr.append("<td>" + descripData.age_max + "</td>");
        newTr.append("<td>" + descripData.length + "<td>");
        //add the content to the table below.
        $('#description-table').append(newTr);


        //add class description to instance dropdown
        $('#description-selection').append($('<option>', {
            value: descripData.id,
            text: descripData.class_name
        }));
        
        return newTr;
    };

    function getDescriptions() {
        $.get("api/description", function (data) {
            for (i = 0; i <data.length; i++) {
                createDescripRow(data[i]);
            };

        });
    };

    getDescriptions();

});