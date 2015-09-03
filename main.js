// Part One

// Read from local JSON file with jQuery
// Loop over results and inject into Music History list page
// Add delete button DOM to each row and use jQuery to delete entire row

// Part Two

// Take your music and split it into two JSON file instead of them all living on one file.
// Add a button at the bottom of your music list and label it "More >".
// Load the songs from the first list and inject the DOM into the document as you've already done.
// When the user clicks that button, load the songs from the second JSON file and append them to the bottom of the existing music, 
// but before the More button.


$(document).ready(function() {



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

$("#more").click(function() {
	$.ajax({
	 	url:"songstwo.json"
	 }).done(function(songList) {
	$(".artist-content").append(printSongs(songList));
	 	console.log(songList)
	 });
});


var more = document.getElementById("more");





});