"use strict";
var debug = require( "gulp-debug" );
var extname = require( "gulp-extname" );
var prettify = require( "gulp-prettify" );
var permalinks = require( "assemble-permalinks" );
var path = require( "path" );
var rename = require("gulp-rename");

/**
 * Pages
 * @param base
 * @todo: better weay to load the config for a collection
 * @todo: test whether to manually create a collection or not, this is not the case here.
 */
module.exports = function ( base ) {

	var pagesDef = base.config.collections[0];

	base.app.create("pages")
		.use(permalinks(':name/index.html')); // <== index.html doesn't make a difference here, have to use gulp-rename

	base.app.task( "content:pages", ["load"], function () {
		return base.app.pages.src( pagesDef.src)
			.on( 'err', console.log )
			.pipe( base.app.renderFile() )
			.on( 'err', console.log )
			.pipe( extname() )
			.pipe( rename({
				basename: "index"
			}))
			.pipe( prettify() )
			.pipe( base.app.dest( dest(pagesDef.dest) ) )
			.pipe( debug( {title: "pages:"} ) )
	} );

	function dest(dir) {
		return function (file) {
			return path.join(dir, path.dirname(file.data.permalink));
		}
	}
};