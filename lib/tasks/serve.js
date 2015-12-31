'use strict';
var browserSync = require( 'browser-sync' ).create();

module.exports = function ( base ) {
	var app = base.app;
	app.task( 'serve', function () {
		browserSync.init( {
			server: {
				baseDir: base.config.dest
			}
		} );
	} );
};
