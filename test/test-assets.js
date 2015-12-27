"use strict";
var assemble = require("assemble");
var app = assemble();
var config = require("./unit/config");
var debug = require("gulp-debug");
var path = require("path");

app.task('assets', function ( cb) {
	var sourceDir = path.join(__dirname, "./../node_modules/static-test-content/src/assets/**");
	var targetDir = "./.build/assets";
	app.copy( sourceDir, targetDir )
		.on("error", cb)
		.on("finish", cb)
});

app.build("assets", function ( err ) {
	console.log("done");
});