"use strict";
var path = require( "path" );

var contentDir = path.join(__dirname, "./../../node_modules/static-test-content/src");
var buildDir = path.join( __dirname, "./../.build" );

var config = {
	dest: buildDir,
	layouts: path.join(contentDir, "./layouts/*.hbs"),
	helpers: path.join( contentDir, "./helpers/*.js"),
	partials: path.join( contentDir, "./partials/*.hbs"),
	css: {
		src: path.join( contentDir, "./less/**/main.less" ),
		dest: path.join( buildDir, "./assets/css" )
	},
	assets: {
		src: path.join(contentDir, "./assets/**"),
		dest: path.join( buildDir, "./assets")
	},
	collections: [
		{
			name: "pages",
			src: path.join( contentDir, "./content/pages/**/*.md"),
			dest: path.join( buildDir, "./pages")
		}
	]
};

module.exports = config;
