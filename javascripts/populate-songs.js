//get-initial-songs.js

define(function() {
	return {
		getSongs: function (callback) {
			// callback = dom.makeSongList
			$.ajax({
				url: "https://walker-music-history.firebaseio.com/.json",
			}).done(function(JSONObject) {
				callback(JSONObject);
			});
		}
	};
});

