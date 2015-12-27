"use strict";
var path = require( "path" );

var contentDir = path.join(__dirname, "./../../node_modules/static-test-content/src");
var buildDir = path.join( __dirname, "./../.build" );

var config = {
	dest: buildDir,
	css: {
		src: path.join( contentDir, "./less/**/main.less" ),
		dest: path.join( buildDir, "./assets/css" )
	},
	assets: {
		src: path.join(contentDir, "./assets/**"),
		dest: path.join( buildDir, "./assets")
	}
};

module.exports = config;
