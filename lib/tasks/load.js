'use strict';

module.exports = function ( base ) {

	var app = base.app;

	app.task( 'load', function ( cb ) {
		app.helper( 'markdown', require( 'helper-markdown' ) );
		app.helper( 'debug', require( './../helpers/debug' ) );
		app.layouts( base.config.layouts );
		app.helpers( base.config.helpers );
		app.partials( base.config.partials );
		cb();
	} );
};
