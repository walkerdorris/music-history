var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Little Honda by Yo La Tengo on the album I Can Hear the Heart Beating as One");
songs.push("Sleep by Dandy Warhols on the album Thirteen Tales From Urban Bohemia");

for (var i=0; i < songs.length; i++) {
	songs[i] = songs[i].replace(">","");
	songs[i] = songs[i].replace("*","");
	songs[i] = songs[i].replace("@","");
	songs[i] = songs[i].replace("(","");
	songs[i] = songs[i].replace("!","");
}



//.split("")
//finalarray



songs = document.getElementById("musicstuff")
//songs.innerHTML = ""

