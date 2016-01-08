'use strict';
var del = require( 'del' );

/**
 * Clean the output directory.
 * @todo: Logging
 * @todo: Error handling
 */
module.exports = function ( base ) {
	var app = base.app;
	var config = base.config;

	app.task( 'clean', function ( cb ) {
		del( config.dest, {force: true} )
			.then( function ( /*files*/ ) {
				cb();
			} );
	} );
};

