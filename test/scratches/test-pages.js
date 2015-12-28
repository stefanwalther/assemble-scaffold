"use strict";
var assemble = require( "assemble" );
var extname = require( "gulp-extname" );
var config = require( "./../unit/config" );
var debug = require( "gulp-debug" );
var path = require( "path" );
var templates = require( "templates" );
var prettify = require( "gulp-prettify" );

var app = assemble();

app.data( {
	site: {
		title: 'My Blog'
	}
} );

app.preLayout( /\/content\/.*\.md/, function ( view, next ) {
	if ( !view.layout ) {
		view.layout = 'default';
	}
	next();
} );

app.task( "load", function ( cb ) {
	app.layouts( config.layouts );
	app.helpers( config.helpers );
	app.partials( config.partials );
	cb();
} );


app.task( 'pages', ["load"], function () {
	var pages = config.collections[0];
	return app.src( pages.src )
		.on( 'err', console.log )
		.pipe( app.renderFile() )
		.on( 'err', console.log )
		.pipe( debug( {title: "pages:"} ) )
		.pipe( prettify() )
		.pipe( extname() )
		.pipe( app.dest( pages.dest ) )
} );

app.build( "pages", function ( err ) {
	if ( err ) {
		console.error( err );
	}
	console.log( "done" );
} );