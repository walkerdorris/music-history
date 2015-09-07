requirejs.config({
        baseUrl: "./javascripts",
    paths: {
        "jquery": "../bower_components/jquery/dist/jquery.min"
    }

});

require(["main"], function() {

});

// require(["jquery", "utilities"], function($, utilities) {
//     console.log("utilities", utilities);

// $("#custOrder").html("hello world");

// console.log("utilities", utilities);

// var text = "umbrella";

// console.log("capitalize test", utilities.capitalize(text));

// });