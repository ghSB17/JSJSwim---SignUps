
$(document).ready(function(){

    var config = {
        apiKey: "AIzaSyAjA71CfHUU-mTezrsCpbdReUQnaxra6Dg",
        authDomain: "jsjswim-198914.firebaseapp.com",
        databaseURL: "https://jsjswim-198914.firebaseio.com",
        projectId: "jsjswim-198914",
        storageBucket: "",
        messagingSenderId: "626450746575"
      };
      firebase.initializeApp(config);

    var databaseFAQ=firebase.database();

    var questionRef=$('#inputQuestion');
    var answerRef=$('#answerText');
    var Q='';
    var t=$('.accordion');

    databaseFAQ.ref("/FAQ").on("child_added", function(childSnapshot){
           Q='<li class="accordion-item" data-accordion-item>'+
           '<a href="#"  class="accordion-title" >'+
           childSnapshot.val().questionText+'</a>'+
           '<div class="accordion-content" data-tab-content >'+
               '<p>'+childSnapshot.val().answerText+'</p>'+
           '</div>'+
          '</li>';
          console.log(Q);
          t.append(Q); 

        Foundation.reInit('accordion');
        
    });

    $('li>a').on('click', function(){
        
    })

});