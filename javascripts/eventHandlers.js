define(["jquery", "lodash", "getTemplates", "getUnique"], function($, _, templates, unique){

	var config = {
		originalSongsArray: []
	};

	var eventHandlers = function() {

	};

	eventHandlers.prototype.updateSongs = function(songArray) {
		config.originalSongsArray = songArray;
	};

	eventHandlers.prototype.init = function(options) {
		$("#clearFilter").click(function(e) {

			allSongsArray = config.orginalSongsArray;

			$("#songList").html(templates.songs({songs: allSongsArray}));

			var uniqueArtists = unique(allSongsArray).uniqueArtists;
			$("#artists").html(templates.artists({artists:uniqueArtists}));

			var uniqueAlbums = unique(allSongsArray).uniqueAlbums;
			$("#albums").html(templates.albums({albums:uniqueAlbums}));
		});

		$(document).on("click", "#artists li > a", function(e) {
			var selectedArtist = this.innerHTML;
			var matchingAlbums = _.chain(config.originalSongsArray)
								  .filter(function(song) {
								  	return song.artist === selectedArtist;
								  })
								  .uniq("album.name")
								  .pluck("album")
								  .value();
			$("#albums").html(templates.albums({albums:matchingAlbums}));

			allSongsArray = _.filter(config.originalSongsArray, function(song) {
				return song.artist === selectedArtists;
			});
			$("#songList").html(templates.songs({songs:allSongsArray}));

		});

		$(document).on("click", "#albums li > a", function(e) {
			var selectedYear = $(this).attr("year");
			var selectedAlbum = this.innerHTML;

			var matchingArtists = _.chain(config.originalSongsArray)
									.filter(function(song) {
										return song.album.name === selectedAlbum;
									})
									.uniq("artist")
									.pluck("artist")
									.value();
			$("#artists").html(templates.artists({artists:matchingArtists}));

			allSongsArray = _.filter(config.originalSongsArray, function(song) {
				return song.artist === selectedArtists;
			});
			$("#songList").html(templates.songs({songs:allSongsArray}));
		});
	};

	return new eventHandlers;
});