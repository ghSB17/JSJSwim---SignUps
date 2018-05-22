$(document).foundation()

$(document).ready(function () {
  $('.top-bar ul.left li').click(function () {
    $('.top-bar').removeClass('expanded');
  });

  $.get("/api/user", function (response) {

    console.log(response);
    if (response) {
      $("#alogin").hide();
      $("#alogout").show();
      $("#aregister").show();
    } else {
      $("#alogin").show();
      $("#alogout").hide();
      $("#aregister").hide();
    }


  })

});