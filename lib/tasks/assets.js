'use strict';

/**
 * Copy assets
 * @todo Error handling
 * @todo Logging is completely missing with this approach.
 */
module.exports = function ( base ) {
	var app = base.app;
	var config = base.config;

	app.task( 'assets', function () {
		return app.copy( config.assets.src, config.assets.dest );
	} );
};
