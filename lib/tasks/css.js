'use strict';
var sourceMaps = require( 'gulp-sourcemaps' );
var debug = require( 'gulp-debug' );
var less = require( 'gulp-less' );
var nano = require( 'gulp-cssnano' );

module.exports = function ( base ) {

	var app = base.app;
	var config = base.config;

	// http://cssnano.co/optimisations/
	var nanoOpts = {
		autoprefixer: false
	};

	app.task( 'css', function () {
		return app.src( config.css.src )
			.pipe( sourceMaps.init() )
			.pipe( less() )
			.pipe( nano( nanoOpts ) )
			.pipe( debug( {title: 'less:'} ) )
			.pipe( sourceMaps.write() )
			.pipe( app.dest( config.css.dest ) );
	} );

};
