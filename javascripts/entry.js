//main.js for Steve
require.config({
	baseURL: "./javascripts",
	paths: {
		"jquery": "../resources/bower_components/jquery/dist/jquery.min",
		"firebase": "../resources/bower_components/firebase/firebase",
		"lodash":"../resources/bower_components/lodash/lodash.min",
		"hbs": "../resources/bower_components/require-handlebars-plugin/hbs",
		"bootstrap": "../resources/bower_components/bootstrap/dist/js/bootstrap.min"
	},
	"shim": {
		"bootstrap": ["jquery"],
		"firebase": {
			exports: "Firebase"
		}
	}
});

require(["main", "bootstrap"], function() {});

requirejs(
	["jquery", "lodash", "firebase", "hbs", "bootstrap", "getUnique", "getTemplates"],
			function($, _, _firebase, Handlebars, bootstrap, unique, templates) {
				var allSongsObject = {};
				var allSongsArray = [];
				var originalSongsArray = [];


				var myFirebaseRef = new Firebase("https://walker-music-history.firebaseio.com/");

				myFirebaseRef.child("songs").on("value", function(snapshot) {

					var songs = snapshot.val();

					allSongsArray = [];

					for (var key in songs) {
						allSongsArray[allSongsArray.length] = songs[key];
					}

					allSongsObject = {songs: allSongsArray};

					originalSongArray = allSongsArray.slice();

					$("#songList").html(templates.songs(allSongsObject));

					var uniqueArtists = unique(allSongsArray).uniqueArtists;

					$("#artists").html(templates.artists({artists:uniqueArtists}));

					var uniqueAlbums = unique(allSongsArray).uniqueAlbums;

					$("#albums").html(templates.albums({albums:uniqueAlbums}));

					// p
				});

				// $.material.init();

				}
				);