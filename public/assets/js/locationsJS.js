
        const apiKEY='AIzaSyCb-eP827aTiqC20v7pR6tNsR7_u4VQ2GQ'
        
        var config = {
            apiKey: "AIzaSyAjA71CfHUU-mTezrsCpbdReUQnaxra6Dg",
            authDomain: "jsjswim-198914.firebaseapp.com",
            databaseURL: "https://jsjswim-198914.firebaseio.com",
            projectId: "jsjswim-198914",
            storageBucket: "jsjswim-198914.appspot.com",
            messagingSenderId: "626450746575"
          };
          firebase.initializeApp(config);

        var databaseFAQ=firebase.database();
        var queryURL='';
        var locationAddr='';

      function initMap(){
            var options={
                zoom:10, 
                center:{lat:40.4862,lng:-74.4518},
            }
            var myMap=new google.maps.Map(document.getElementById('mapSection'),options);

            function addMarker(objProperties){
                var myMarker=new 
                  google.maps.Marker({
                    position:objProperties.coords, 
                    map:objProperties.mapD,
                    icon:"./assets/images/swimming.png",
                    
                });
                console.log(objProperties.content);
               
                var myInfo=new google.maps.InfoWindow({
                    content:objProperties.content,
                });
                // console.log(myInfo);
                myMarker.addListener('click', 
                    function(){
                    myInfo.open(myMap,myMarker);
                });
            
            };

        
      
        databaseFAQ.ref("/Locations").on("child_added", function(childSnapshot) { 
          
          queryURL='https://maps.googleapis.com/maps/api/geocode/json?address='+
                        childSnapshot.val().buildingNumber+"+"+childSnapshot.val().streetName.replace(/ /g,'+')+
                        "+"+childSnapshot.val().cityName.replace(/ /g,'+')+
                        "+"+childSnapshot.val().stateName.replace(/ /g,'+')+"&key="+apiKEY
            
          locationAddr= '<p><h3>'+childSnapshot.val().Title+'</h3></p>'+
            '<p>'+childSnapshot.val().buildingNumber+", "+
            childSnapshot.val().streetName+'</p><p>'+
            childSnapshot.val().cityName+childSnapshot.val().stateName+'</p><br>'+childSnapshot.val().phoneNumber;
          console.log(queryURL);
          $.ajax({
                url: queryURL,
                method:"GET"
          }).done(function(dataResponse){
          
                locationLink='https://www.google.com/maps/dir//'+
                      dataResponse.results[0].address_components[0].short_name+
                      "+"+dataResponse.results[0].address_components[1].short_name.replace(/ /g,'+')+
                      "+"+dataResponse.results[0].address_components[2].short_name.replace(/ /g,'+')+
                      "+"+dataResponse.results[0].address_components[3].short_name.replace(/ /g,'+');
                var bgimg="background-image: url('./assets/images/background-water-large.jpg'); width:100%; height:100%";
                var infoContent='<div><h5>'+
                                childSnapshot.val().Title+'</h5><h6><span>'+
                                    childSnapshot.val().phoneNumber+'</span><br><span>'+
                                    dataResponse.results[0].address_components[0].short_name+', '+
                               dataResponse.results[0].address_components[1].short_name+'</span><br>'+
                               '<span>'+dataResponse.results[0].address_components[2].short_name+
                               ', '+dataResponse.results[0].address_components[4].short_name+
                               '</span><br><a href="./contact.html" class="button">Contact Us for More Info</a>'+
                               '<br>'+'<a class="lead" target="_blank" href="'+
                               locationLink+'" >Directions</a></h6></div>';
                //console.log(id);
                addMarker({coords: dataResponse.results[0].geometry.location,
                      mapD: myMap,
                      content:infoContent,
                });
          });
        });
      };
        
    