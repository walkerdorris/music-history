require (["songs"], function ("songs") {
	
});


function printSongs(songList) {
	console.log("argument value", songList);

	for (var i = 0; i < songList.songs.length; i++) {
		var currentSong = songList.songs[i];
		console.log("currentSong", currentSong);
		$(".artist-content").append("<h1>" + currentSong.title + "</h1>");
		$(".artist-content").append("<div>Performed by " + currentSong.artist + "</div>");
		$(".artist-content").append("<div>On the album " + currentSong.album + "</div>");
	}	
}


$.ajax({
 	url:"songs.json"
 }).done(function(list) {
 	console.log("list", list);
 	printSongs(list);
 });


