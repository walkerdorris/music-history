define(function() {
	return {
		getMore: function (callback) {
			$.ajax({
				url: "songstwo.json",
				dataType: "json",
			}).done(function(songs) {
				callback(songs.songs);
			});
		}
	};
});
