'use strict';
var extname = require( 'gulp-extname' );
var debug = require( 'gulp-debug' );
var _ = require( 'lodash' );

module.exports = function ( base ) {

	var app = base.app;
	var contentDef = _.find(base.config.collections, {name: 'articles'});

	app.task( 'content:articles', ['load'], function () {
		return app.src( contentDef.src )
			.on( 'err', console.log )
			.pipe( app.renderFile() )
			.on( 'err', console.log )
			.pipe( extname() )
			.pipe( app.dest( contentDef.dest ) )
			.pipe( debug( {title: 'articles:'} ) );
	} );
};
