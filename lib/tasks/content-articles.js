'use strict';
var extname = require( 'gulp-extname' );
var debug = require( 'gulp-debug' );
var drafts = require( 'gulp-drafts' );

var _ = require( 'lodash' );

module.exports = function ( base ) {

	var app = base.app;
	var contentDef = _.find( base.config.collections, {name: 'articles'} );

	app.create( 'articles' );

	app.task( 'content:articles', ['init'], function () {
		return app.articles.src( contentDef.src )
			.pipe( drafts() )
			.on( 'err', console.log )
			.pipe( app.renderFile() )
			.on( 'err', console.log )
			.pipe( extname() )
			.pipe( app.dest( contentDef.dest ) )
			.pipe( debug( {title: 'articles:'} ) )
			.pipe( base.browserSync.stream() );
	} );
};
