//main.js for Steve
require.config({
	baseURL: "./javascripts",
	paths: {
		"jquery": "../resources/bower_components/jquery/dist/jquery.min",
		"firebase": "../resources/bower_components/firebase",
		"lodash":"../resources/bower_components/lodash/lodash.min",
		"hbs": "../resources/bower_components/require-handlebars-plugin/hbs",
		"bootstrap": "../resources/bower_components/bootstrap/dist/js/bootstrap.min"
	},
	shim: {
		"bootstrap": ["jquery"]
		"firebase": {
			exports: "Firebase"
		}
	}
});

requirejs(
	["jquery", "lodash", "firebase", "hbs", "bootstrap", "getUnique", "getTemplates", "eventHandlers"],
			function($, _, _firebase, Handlebars, bootstrap, unique, templates, eventHandlers) {
				var allSongsObject = {};
				var allSongsArray = [];
				var originalSongsArray = [];

				eventHandlers.init({songArray: originalSongsArray});

				var myFirebaseRef = new Firebase("https://walker-music-history.firebaseio.com/");

				var myFirebaseRef.child("songs").on("value", function(snapshot) {

					var songs = snapshot.val();

					allSongsArray = [];

					for (var key in songs) {
						allSongsArray[allSongsArray.length] = songs[key];
					}

					allSongsObject = {songs: allSongsArray};

					originalSongArray = allSongsArray.slice();

					$("#songList").html(templates.songs(allSongsObject));

					var uniqueAlbums = unique(allSongsArray).uniqueArtists;

					$("#artists").html(templates.artists({artists:uniqueArtists}));

					var uniqueAlbums = unique(allSongsArray).uniqueAlbums;

					$("#albums").html(templates.albums({albums:uniqueAlbums}));

					evenHandlers.updateSongs(originalSongsArray);
				});

				$.material.init();

				}
				);