requirejs.config({
	baseUrl: "./javascripts",
	paths: {
		"jquery": "../resources/bower_components/jquery/dist/jquery.min",
		"hbs": "../resources/bower_components/require-handlebars-plugin/hbs",
		"bootstrap": "../resources/bower_components/bootstrap/dist/js/bootstrap.min"
	},
	shim: {
		"bootstrap": ["jquery"]
	}
});

requirejs(["jquery", "hbs", "bootstrap","loadSongs"],
		  function($, Handlebars, bootstrap, material, loadSongs) {
		  	var selectedArtist = "", selectedAlbum = "";

		  	

		  	loadSongs(function(obj) {
		  		console.log("allSongsObject", obj);
		  	});

		  	$(document).on("click", "#albums li > a", function(e) {
		  		selectedAlbum = this.innerHTML;
		  	});

		  	$("#addSong").click(function(e) {

		  		var newSong = {
		  			"name": $("#songName").val(),
		  			"artist": selectedArtist || $("#artistName").val(),
		  			"album": selectedAlbum || $("#albumName").val(),
		  		};

		  		console.log("newSong", newSong);

		  		$.ajax({
		  			url:"https://walker-music-history.firebaseio.com/",
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