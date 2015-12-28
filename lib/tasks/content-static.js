"use strict";
var debug = require( "gulp-debug" );
var extname = require( "gulp-extname" );
var prettify = require( "gulp-prettify" );
var permalinks = require( "assemble-permalinks" );
var rename = require("gulp-rename");
var path = require( "path" );

/**
 * Generate pages.
 * @param base
 * @todo: better way to load the config for a collection
 * @todo: test whether to manually create a collection or not, this is not the case here.
 */
module.exports = function ( base ) {

	var pagesDef = base.config.collections[0];

	base.app.create("static")
		.use(permalinks(':name/index.html')); // <== index.html doesn't make a difference here, have to use gulp-rename

	base.app.task( "content:static", ["load"], function () {
		return base.app.static.src( pagesDef.src)
			.on( 'err', console.error )
			.pipe( base.app.renderFile() )
			.on( 'err', console.error )
			.pipe( extname() )
			.pipe( rename({
				basename: "index"
			}))
			.pipe( prettify() )
			.pipe( base.app.dest( dest(pagesDef.dest) ) )
			.pipe( debug( {title: "pages:"} ) )
			.on( 'err', console.error )
	} );

	function dest(dir) {
		return function (file) {
			return path.join(dir, path.dirname(file.data.permalink));
		}
	}
};