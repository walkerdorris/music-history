define(["jquery","dom-access", "get-songs", "get-more-songs"], 
	function($, domAccess, getSongs, getMoreSongs) {
		$(document).ready(function() {
			function songCallback(whateverName) {
				console.log(whateverName);
				for (var i = 0; i < whateverName.songs.length; i++) {
					var currentSong = whateverName.songs[i];
					var songDisplay = "<li>";
					songDisplay += "<h2>" + currentSong.title + "</h2>";
					songDisplay += "<div>Performed by " + currentSong.artist + "</div>";
					songDisplay += "<div>Onthe album " + currentSong.album + "</div>";
					songDisplay += "<button id='deleter'>Delete</button>";
					songDisplay += "</li>";
					$("#song-list").append(songDisplay);
				}
			}

			getSongs.getSongs(songCallback);

			$(document).on("click", "#delete", function() {
				$(this).parent().hide();
			});

			$("#add-song").click(function() {
				$.ajax({
					url:"./javascripts/moreSongs.json"
				}).done(songCallback);
			});
		});
});


















// $(document).ready(function() {



// function printSongs(songList) {
// 	console.log("argument value", songList);

// 	for (var i = 0; i < songList.songs.length; i++) {
// 		var currentSong = songList.songs[i];
// 		console.log("currentSong", currentSong);
// 		$(".artist-content").append("<h1>" + currentSong.title + "</h1>");
// 		$(".artist-content").append("<div>Performed by " + currentSong.artist + "</div>");
// 		$(".artist-content").append("<div>On the album " + currentSong.album + "</div>");
// 	}	
// }


// $.ajax({
//  	url:"songs.json"
//  }).done(function(list) {
//  	console.log("list", list);
//  	printSongs(list);
//  });

// $("#more").click(function() {
// 	$.ajax({
// 	 	url:"songstwo.json"
// 	 }).done(function(songList) {
// 	$(".artist-content").append(printSongs(songList));
// 	 	console.log(songList)
// 	 });
// });


// var more = document.getElementById("more");





// });