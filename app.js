$(document).ready(function(){

  $('#usersForm').submit(function(event) {
          //prevent sending to server.
          event.preventDefault();

          // grab the value from user Input.
          var searchTerm = $('.something').val();

          getRequest(searchTerm);
});

function getRequest(searchTerm) {
      $.getJSON('https://www.googleapis.com/youtube/v3/search',
      {
        "part": 'snippet',  // https://developers.google.com/youtube/v3/code_samples/javascript
        "key": 'AIzaSyBbpBNkVBTkGV3-MHyCPccoaOnkQ3U12_4',  //Personal YouTube API Key
        "q": searchTerm,  //Value gatherd from UserInput
        "type": 'video'
      },
        function (dataFromAPI) {
            showResults(dataFromAPI.items);
        });
	}

  function showResults(results){

	  	$.each(results, function(index, value){
        var url= "https://www.youtube.com/embed/" + value.id.videoId ;
       var thumbnail =   '<iframe src="'+ url + '"></iframe>'  ;
 $(".usersSearchResults").append(thumbnail);
       console.log(value);

	 	});
	}

});
