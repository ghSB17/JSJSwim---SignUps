$(document).ready(function () {

    $("#instanceSubmit").click(function() {
        $.post('/api/instance', $('#instance-form').serialize(), function(data) {
            console.log(data);
            //add how this will be displayed here.
        },
        'json'
    );
    });

// instanceSubmit in the html button submit

});




