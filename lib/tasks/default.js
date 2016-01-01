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
		'content:articles'
	];

	app.task( 'watch:css', function () {
		app.watch( base.config.css.watch, ['css'] );
	} );

	app.task( 'site', taskChain, function ( cb ) {
		cb();
	} );

	var taskChainServe = taskChain.push( 'serve' );
	app.task( 'site:serve', taskChainServe, function ( cb ) {
		cb();
	} );

	app.task( 'default', ['site'] );

	app.task( 'default:watch:css', ['site:serve', 'watch:css'] );

};
