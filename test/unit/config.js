"use strict";
var path = require( "path" );

var srcDir = path.join(__dirname, "./../../node_modules/static-test-content/src");
var buildDir = path.join( __dirname, "./../.build" );

var config = {
	dest: buildDir,
	helpers: path.join( srcDir, "./helpers/*.js"),
	layouts: path.join(srcDir, "./templates/layouts/*.hbs"),
	partials: path.join( srcDir, "./templates/partials/*.hbs"),
	css: {
		src: path.join( srcDir, "./less/**/main.less" ),
		dest: path.join( buildDir, "./assets/css" )
	},
	assets: {
		src: path.join(srcDir, "./assets/**"),
		dest: path.join( buildDir, "./assets")
	},
	collections: [
		{
			name: "static-pages",
			src: path.join( srcDir, "./content/static-pages/**/*.md"),
			dest: path.join( buildDir, "./static")
		},
		{
			name: "articles",
			src: path.join( srcDir, "./content/articles/**/*.{md,hbs}"),
			dest: path.join( buildDir, "./articles")
		},
		{
			name: "pages",
			src: path.join( srcDir, "./content/pages/**/*.{md,hbs}"),
			dest: path.join( buildDir, "./pages")
		}
	]
};

module.exports = config;
