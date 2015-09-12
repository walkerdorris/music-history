
require.config({
	paths: {
		"jquery": "../resources/bower_components/jquery/dist/jquery.min",
		"hbs": "../resources/bower_components/require-handlebars-plugin/hbs",
		"bootstrap": "../resources/bower_components/bootstrap/dist/js/bootstrap.min"
	},
	shim: {
		"bootstrap": ["jquery"]
	}
});


requirejs(["main"]);