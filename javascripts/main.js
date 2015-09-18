define(['jquery','lodash', 'firebase', 'hbs','populate-songs', 'populate-filter-form', 'dom-access','bootstrap'], function($, _, firebase, Handlebars, populate, getMoreSongs, dom) {

	$(".dropdown-toggle").dropdown();

	// populate.getSongs(dom.makeSongList);

	populate.getSongs(function(songs) {
		console.log(songs);
		require(['hbs!../templates/songs'], function(songTemplate) {
        $("#song-list").html(songTemplate(songs));
      });
	});

	$(".add-more").on('click', function () {
		getMoreSongs.getMore(function(songstwo) {
			console.log(songstwo);
			require(['hbs!../templates/songs'], function(songTemplate) {
        $("#song-list-two").html(songTemplate(songstwo));
      });
		});

	
	});

});

//refer to loadSongs and make changes when necessary