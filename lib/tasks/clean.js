"use strict";
var del = require("del");

/**
 * Clean the output directory.
 */
module.exports = function ( base ) {
	base.app.task( "clean", function () {
		return del( base.config.dest );
	} )
};

