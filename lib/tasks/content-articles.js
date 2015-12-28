'use strict';
var extname = require( "gulp-extname" );
var debug = require( "gulp-debug" );

module.exports = function ( base ) {

	var contentDef = base.config.collections[1];
	var app = base.app;

	app.task( 'content:articles', ['load'], function () {
		return app.src( contentDef.src )
			.on( 'err', console.log )
			.pipe( app.renderFile() )
			.on( 'err', console.log )
			.pipe( extname() )
			.pipe( app.dest( contentDef.dest ) )
			.pipe( debug( {title: "articles:"} ) );
	} );
};