"use strict";
var debug = require("gulp-debug");
var extname = require("gulp-extname");
var prettify = require("gulp-prettify");

/**
 * Pages
 * @param base
 * @todo: Load "load" task as dependency
 */
module.exports = function ( base ) {
	var pages = base.config.collections[0];
	base.app.task( "content:pages", ["load"], function () {
		return base.app.src( pages.src )
			.on( 'err', console.log )
			.pipe( base.app.renderFile() )
			.on( 'err', console.log )
			.pipe( debug( {title: "pages:"} ) )
			.pipe( prettify() )
			.pipe( extname() )
			.pipe( base.app.dest( pages.dest ) )
	});
};