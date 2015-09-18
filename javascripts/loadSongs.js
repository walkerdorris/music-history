define(["populate-songs", "populate-filter-form"], function(initialSongs, filterForm) {

	return function(callback) {
		initialSongs.getSongs(function(songObject) {
			require(["hbs!../templates/songs"], function(songTemplate) {
				$("#songList").html(songTemplate(songObject));
			});

			filterForm(songObject);
			callback(songObject);
    	});
	}
});