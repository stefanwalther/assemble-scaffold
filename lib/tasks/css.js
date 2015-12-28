"use strict";
var sourceMaps = require( "gulp-sourcemaps" );
var debug = require( "gulp-debug" );
var less = require( "gulp-less" );
var nano = require( "gulp-cssnano" );

module.exports = function ( base ) {

	// http://cssnano.co/optimisations/
	var nanoOpts = {
		autoprefixer: false
	};

	base.app.task( "css", function () {
		return base.app.src( base.config.css.src )
			.pipe( sourceMaps.init() )
			.pipe( less() )
			.pipe( nano( nanoOpts ) )
			.pipe( debug( {title: "less:"} ) )
			.pipe( sourceMaps.write() )
			.pipe( base.app.dest( base.config.css.dest ) )
	} );
};