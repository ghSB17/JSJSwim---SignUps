$(document).ready(function(){

   
    var plistID="";
    var apiKey='AIzaSyCb-eP827aTiqC20v7pR6tNsR7_u4VQ2GQ';

    function display( vID, vDescription ){
        
            
            var html='<div class="media-object stack-for-small">'+
                '<div class="media-object-section">'+
                '<iframe width="350" height="200" '+
                'src="https://www.youtube.com/embed/'+vID+'" ';
            html+=' frameborder="0" allow="autoplay; encrypted-media" allowfullscreen'
                +'></iframe></div>'
                + "<div class='media-object-section'>"+
                vDescription+
                "</div></div>"
            console.log(html);
            $("#results").append(html);
    
    };
    

    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=goswim098&key='+apiKey,
        method: "GET"
    }).done(function(response) {
        console.log(response);
        console.log(response.items[0].contentDetails.relatedPlaylists.uploads);
        plistID = response.items[0].contentDetails.relatedPlaylists.uploads;

        query2="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId="+plistID+
        "&maxResults=10&key="+apiKey;
        console.log(query2);
        $.ajax({
            url: query2,
            method: "GET" 
        }).done(function(results){

            $("#results").empty();
            for( var i=0;i<results.items.length;i++){
                
               console.log(results.items[i].snippet.resourceId.videoId);
                if(results.items[i].snippet.resourceId.videoId)
                    display(results.items[i].snippet.resourceId.videoId, results.items[i].snippet.description);
            
            }

        });

    });

    $("#btnSubmit").on('click', function(){
        
        var query="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&channelId=UCPpmXSYfseQrcSdB0PTgw_w&q="+$('#idS').val()+"&key="+apiKey
        console.log(query);
        $.ajax({
            url:query,
            method: "GET",
        }).done( function(results){
            $("#results").empty();
            for( var i=0;i<results.items.length;i++) {
                
                console.log(results.items[i].id.videoId);
                //var videoID=results.items[i].id.videoId;
                if(results.items[i].id.videoId)
                    display(results.items[i].id.videoId, results.items[i].snippet.description);
            
            }
        });

    });

    
})



