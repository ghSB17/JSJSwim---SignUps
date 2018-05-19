$(document).foundation()

$(document).ready(function () {
  $('.top-bar ul.left li').click(function () {
    $('.top-bar').removeClass('expanded');
  });

  if( localStorage.firstName ==="undefined" || localStorage.firstName ===null || localStorage.firstName === undefined ) {
    $("#alogout").hide();
    console.log("no user logged in!!")
  }
  else {
    console.log("Hello:" + localStorage.firstName);
    $("#alogin").hide();
    $("#alogout").show();
  }

  
});