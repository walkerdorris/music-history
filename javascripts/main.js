define(['jquery', 'hbs','populate-songs', 'get-more-songs', 'dom-access','bootstrap'], function($, Handlebars, populate, getMoreSongs, dom) {

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