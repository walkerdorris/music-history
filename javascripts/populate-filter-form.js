define(["jquery"], function($) {
	return function (dataObj) {
		console.log("Populate album list select");
		require(["hbs!../templates/artist"], function(tmpl) {
			$("#artists").append(tmpl(dataObj));
		});
		console.log("Populate artist list select");
		require(["hbs!../templates/album"], function(tmpl) {
			$("#albums").append(tmpl(dataObj));
		});
	};
});

//this is conected to the dropdowns (this connect to lodash; u haven't written the dropdowns yet)