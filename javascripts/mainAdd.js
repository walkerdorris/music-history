requirejs.config({
	baseUrl: "./javascripts",
	paths: {
		"jquery": "../resources/bower_components/jquery/dist/jquery.min",
		"hbs": "../resources/bower_components/require-handlebars-plugin/hbs",
		"bootstrap": "../resources/bower_components/bootstrap/dist/js/bootstrap.min"
	},
	shim: {
		"bootstrap": ["jquery"],
		"firebase": {
			exports: "Firebase"
		}
	}
});

requirejs(["jquery", "hbs", "bootstrap","loadSongs"],
		  function($, Handlebars, bootstrap, loadSongs) {
		  	var selectedArtist = "", selectedAlbum = "";

		  	

		  	loadSongs(function(obj) {
		  		console.log("allSongsObject", obj);
		  	});

		  	$(document).on("click", "#albums li > a", function(e) {
		  		selectedAlbum = this.innerHTML;
		  	});

		  	$("#addSong").click(function(e) {

		  		var newSong = {
		  			"title": $("#songName").val(),
		  			"artist": $("#artistName").val(),
		  			"album": $("#albumName").val(),
		  		};

		  		console.log("newSong", newSong);

		  		$.ajax({
		  			url:"https://walker-music-history.firebaseio.com/songs.json",
		  			method: "POST",
		  			data: JSON.stringify(newSong)
		  		}).done(function(addedSong) {
		  			selectedArtist = "";
		  			selectedAlbum = "";
		  			console.log("Your new song is", addedSong);
		  		});
		  	});
		}
	);