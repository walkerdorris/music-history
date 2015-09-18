define(function() {
	return {
		getMore: function (callback) {
			$.ajax({
				url: "./javascripts/more-songs.json",
				dataType: "json",
			}).done(function(songs) {
				callback(songs);
			});
		}
	};
});
