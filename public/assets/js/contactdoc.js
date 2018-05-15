$(document).ready(function() {

    var config = {
        apiKey: "AIzaSyAjA71CfHUU-mTezrsCpbdReUQnaxra6Dg",
        authDomain: "jsjswim-198914.firebaseapp.com",
        databaseURL: "https://jsjswim-198914.firebaseio.com",
        projectId: "jsjswim-198914",
        storageBucket: "",
        messagingSenderId: "626450746575"
      };
      firebase.initializeApp(config);

    var databaseLocations=firebase.database();
    var selectLocations=$('#selectLocations');
    selectLocations.empty();
    databaseLocations.ref("/Locations").on("child_added", function(childSnapshot) {
       // <option value="volvo">Volvo</option>
       console.log(childSnapshot.val().Title);
        var html='<option value="'+childSnapshot.val().Title+'">'+childSnapshot.val().Title+"</option>";
        console.log(html);
        selectLocations.append(html);
    });
})