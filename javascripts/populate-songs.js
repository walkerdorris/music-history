define(function() {
	return {
		getSongs: function (callback) {
			// callback = dom.makeSongList
			$.ajax({
				url: "songs.json",
				dataType: "json",
			}).done(function(JSONObject) {
				callback(JSONObject);
			});
		}
	};
});