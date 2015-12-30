'use strict';
var del = require( 'del' );

/**
 * Clean the output directory.
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

