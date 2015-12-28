"use strict";

/**
 * Copy assets
 * @todo Error handling
 * @todo Logging is completely missing with this approach.
 */
module.exports = function ( base ) {
	var app = base.app;
	app.task( "assets", function ( ) {
		return base.app.copy( base.config.assets.src, base.config.assets.dest );
	} )
};