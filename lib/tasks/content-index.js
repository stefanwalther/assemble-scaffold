'use strict';
var extname = require( 'gulp-extname' );
var debug = require( 'gulp-debug' );
var _ = require( 'lodash' );
var drafts = require( 'gulp-drafts' );

module.exports = function ( base ) {

	var app = base.app;
	var contentDef = _.find( base.config.collections, {name: 'index'} );

	app.task( 'content:index', ['load'], function () {
		return app.src( contentDef.src )
			.pipe( drafts() )
			.on( 'err', console.log )
			.pipe( app.renderFile() )
			.on( 'err', console.log )
			.pipe( extname() )
			.pipe( app.dest( contentDef.dest ) )
			.pipe( debug( {title: 'index:'} ) );
	} );
};
