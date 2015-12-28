"use strict";
var minifyCss = require( "gulp-minify-css" );
var sourceMaps = require( "gulp-sourcemaps" );
var debug = require( "gulp-debug" );
var less = require( "gulp-less" );

module.exports = function ( base ) {

	base.app.task( "css", function () {
		return base.app.src( base.config.css.src )
			.pipe( sourceMaps.init() )
			.pipe( less() )
			.pipe( minifyCss() )
			.pipe( debug( {title: "less:"} ) )
			.pipe( sourceMaps.write() )
			.pipe( base.app.dest( base.config.css.dest ) )
	} );
};