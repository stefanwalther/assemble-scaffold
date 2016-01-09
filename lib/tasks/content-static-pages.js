'use strict';
var debug = require( 'gulp-debug' );
var extname = require( 'gulp-extname' );
var prettify = require( 'gulp-prettify' );
var permalinks = require( 'assemble-permalinks' );
var rename = require( 'gulp-rename' );
var path = require( 'path' );
var _ = require( 'lodash' );
var drafts = require( 'gulp-drafts' );

/**
 * Generate pages.
 * @param base
 * @todo: test whether to manually create a collection or not, this is not the case here.
 */
module.exports = function ( base ) {

	var app = base.app;
	var contentDef = _.find( base.config.collections, {name: 'static-pages'} );

	function dest ( dir ) {
		return function ( file ) {
			return path.join( dir, path.dirname( file.data.permalink ) );
		};
	}

	app.create( 'static' )
		.use( permalinks( ':name/index.html' ) ); // <== index.html doesn't make a difference here, have to use gulp-rename

	app.task( 'content:static-pages', ['init'], function () {
		return app.static.src( contentDef.src )
			.pipe( drafts() )
			.on( 'err', console.error )
			.pipe( app.renderFile() )
			.on( 'err', console.error )
			.pipe( extname() )
			.pipe( rename( {
				basename: 'index'
			} ) )
			.pipe( prettify() )
			.pipe( app.dest( dest( contentDef.dest ) ) )
			.pipe( debug( {title: 'static-pages:'} ) )
			.on( 'err', console.error );
	} );
};
