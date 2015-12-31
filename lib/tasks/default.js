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

	app.task( 'default', taskChain, function ( cb ) {
		cb();
	} );
};
