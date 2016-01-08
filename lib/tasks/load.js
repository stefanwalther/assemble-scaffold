'use strict';

module.exports = function ( base ) {

	var app = base.app;
	var config = base.config;

	app.task( 'load', function ( cb ) {
		app.helper( 'markdown', require( 'helper-markdown' ) );
		app.helper( 'debug', require( './../helpers/debug' ) );
		app.helper( 'articles', require( './../helpers/articles' ) );
		app.layouts( config.layouts );
		app.helpers( config.helpers );
		app.partials( config.partials );
		cb();
	} );
};
