
require.config({
	paths: {
		"jquery": "../resources/bower_components/jquery/dist/jquery.min",
		"bootstrap": "../resources/bower_components/bootstrap/dist/js/bootstap.min"
	},
	shim: {
		"bootstrap": ["jquery"]
	}
});


requirejs(["main"]);