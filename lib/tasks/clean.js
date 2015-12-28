"use strict";
var del = require("del");

/**
 * Clean the output directory.
 */
module.exports = function ( base ) {
	var app = base.app;
	app.task( "clean", function () {
		return del( base.config.dest, {force: true} );
	} )
};

