'use strict';
var del = require( 'del' );

/**
 * Clean the output directory.
 * @todo: Logging
 * @todo: Error handling
 */
module.exports = function ( base ) {
	var app = base.app;
	app.task( 'clean', function ( cb ) {
		del( base.config.dest, {force: true} )
			.then( function ( /*files*/ ) {
				cb();
			} );
	} );
};

