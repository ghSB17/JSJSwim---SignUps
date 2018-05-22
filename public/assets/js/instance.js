$(document).ready(function () {

    $("#instanceSubmit").click(function() {
        console.log($('#instance-form').serialize())
        $.post('/api/instance', $('#instance-form').serialize(), function(data) {
            // console.log(data);
            createInstanceRow(data);
        },
        'json'
    );
    });
// instanceSubmit in the html button submit


    function createInstanceRow(instanceData) {
        var newTr = $("<tr>");
        //check where i'm pulling description from.  may be the wrong word. 
        // newTr.data("description", instanceData);
        newTr.append("<td>" + instanceData.Class_description.class_name + "</td>");
        newTr.append("<td>" + instanceData.week_day + "</td>");
        newTr.append("<td>" + instanceData.time + "</td>")
        newTr.append("<td>" + instanceData.start_date + "</td>");
        newTr.append("<td>" + instanceData.end_date + "</td>");
        newTr.append("<td style='text-align: center;'>" + instanceData.seats_total+ "</td>");
        newTr.append("<td style='text-align: center;'>" + instanceData.seats_filled+ "</td>");
        //line below needs info to capture the info from the table description
        $("#instance-table tbody").append(newTr);

        return newTr;
    };


    // var descripSelect = $("description-selection");

    // Creates the description options in the dropdown
    function createDescripRow(description) {
      var listOption = $("<option>");
      listOption.attr("value", description.id);
      listOption.text(description.class_name);
      
      return listOption;
  
    };

    //function to add a row? not sure if this is currently being used or was last nights testing.  will need to look with console logs.
    function addingRows(data) {
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createDescripRow(data[i]));
        }
        // console.log(rowsToAdd);
     };

       
    function getInstance() {
        $.get("api/instance", function (data) {
            for (i = 0; i <data.length; i++) {
                createInstanceRow(data[i]);
            };
        });
    };

    getInstance();

  
});
