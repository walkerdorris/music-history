define(["hbs",
		"hbs!../templates/songs",
		"hbs!../templates/artist",
		"hbs!../templates/album"],
function(Handlebars, songTemplate, artistTemplate, albumTemplate) {
	
	var templates = {};
	templates.songs = songTemplate;
	templates.artists = artistTemplate;
	templates.albums = albumTemplate;

	return templates;
});
