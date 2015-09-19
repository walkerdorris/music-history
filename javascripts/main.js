define(['jquery','lodash', 'firebase', 'hbs','populate-songs', 'populate-filter-form', 'dom-access','bootstrap'], function($, _, firebase, Handlebars, populate, getMoreSongs, dom) {

	$(".dropdown-toggle").dropdown();

	// populate.getSongs(dom.makeSongList);

	populate.getSongs(function(songs) {
		console.log(songs);
		require(['hbs!../templates/songs'], function(songTemplate) {
        $("#songList").html(songTemplate(songs));
      });
		require(['hbs!../templates/artist'], function(artistTemplate) {
		$("#artists").html(artistTemplate(songs));
		});
		require(['hbs!../templates/album'], function(albumTemplate) {
		$("#albums").html(albumTemplate(songs));
		})
	});



	
      
		});

	
	



//refer to loadSongs and make changes when necessary