"use strict";
var path = require( "path" );

var buildDir = path.join( __dirname, "./../.build" );
var contentDir = path.join(__dirname, "./../../node_modules/static-test-content/src");
var config = {
	dest: buildDir,
	css: {
		src: path.join( contentDir, "./less/**/main.less" ),
		dest: path.join( buildDir, "./assets/css" )
	}
};

module.exports = config;
