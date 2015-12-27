"use strict";
var assemble = require("assemble");
var app = assemble();
var less = require('gulp-less');
var config = require("./unit/config");
var debug = require("gulp-debug");
var path = require("path");

app.task('css', function () {
	var contentDir = path.join(__dirname, "./../node_modules/static-test-content/src");
	var p = path.join( contentDir, "./less/**/main.less" );
	console.log(p);
	app.src( p )
		.pipe(less())
		.pipe(debug( {title: "less:"}))
		.pipe(app.dest( "./.build/assets/css"));
});

app.task('default', ['css']);

app.build("css", function ( err ) {
	console.log("done");
});