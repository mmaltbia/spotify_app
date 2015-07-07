// $(function() {

	var SongAndArtist = function (name, artist){
		this.name = name;
		this.artist = artist;
	};

    var $spotifySearch =$('#spotifySearch');
    var $track = $('#track');
    var $results = $('#results');
    var $searchResults = $('#searchResults');
    // var songAndArtist = new SongAndArtist (name, artist);
    var myData; 


    $spotifySearch.on('submit', function(event) {
        event.preventDefault();
        console.log('form submit!');

	_.each(Object, function (name, index) {
	  var underscoreTemplate = _.template($('#underscoreTemplate').html());
	  $($searchResults).replaceWith(underscoreTemplate(SongAndArtist));
	  $searchResults.attr('data-index', index);
	
	});

        $.get( 
            'https://api.spotify.com/v1/search?q=' + $track.val() + '&type=track',
            function(data) {
                console.log(data)
                var getInput = $('#track').val();
                myData = data;
          }
        );


    });

// });