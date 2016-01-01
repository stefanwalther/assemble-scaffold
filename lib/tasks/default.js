'use strict';

module.exports = function ( base ) {

	var app = base.app;
	var taskChain = [
		'clean',
		'assets',
		'css',
		'content:index',
		'content:default-pages',
		'content:static-pages',
		'content:articles:assets',
		'content:articles',
		'serve'
	];

	app.task( 'watch:css', function () {
		app.watch( base.config.css.watch, ['css'] );
	} );

	app.task( 'site', taskChain, function ( cb ) {
		cb();
	} );

	app.task( 'default', ['site', 'watch:css'] );

};
