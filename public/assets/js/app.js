$(document).foundation()
$(document).ready(function () {
  $('.top-bar ul.left li').click(function () {
    $('.top-bar').removeClass('expanded');
  });

  //to show a small reveal popup dialog box showing login screen
  var div = $("<div data-reveal>")
  div.addClass("reveal");
  div.attr("id", "signInModal");

  var html = "<h4 style='text:center;'><img class='logo' src='./assets/images/Logo-noback.png' alt='JSJ Swim School'> JSJ Swim School</h4>";

  html += "Email:<input type='text' placeholder='email@box.com' id='loginEmail' aria-describedby='email address' required pattern='text'>";

  html += "Password:<input type='password' id='loginPwd' placeholder='*******' aria-describedby='password' required>";


  html += "<a id='signUp' class='radius button large' aria-label='Sign Up'>    Sign Up    </a>";
  html += "<span>        </span>";
  html += "<a id='signIn' class='radius button large' aria-label='Sign In'>    Sign In    </a>";
  html += "<button class='close-button' data-close aria-label='Close modal' type='button'>";
  html += "<span aria-hidden='true'>&times;</span> </button>";

  div.html(html);
  $("#liLogin").parent().append(div);
  $(document).foundation();
  //end of reveal construction

  //when signUp button is clicked
  $(document).on("click", '#signUp', function (event) {
    console.log('Clicked SignUp button');
    location.replace("/signup");
  })

  //When Sign In button is clicked
  $(document).on("click", '#signIn', function (event) {
    var email=$('#loginEmail').val().trim();
    var password=$('#loginPwd').val().trim();
    $.post("/api/signin", {
      email:email,
      password:password
    }).then(function(data){
      window.location.replace(data);
    })
  })

  // $(document).foundation('reveal', 'reflow');
});