'use strict';
var _ = require( 'lodash' );

module.exports = function ( base ) {
	var app = base.app;
	var config = base.config;

	app.task( 'serve', function () {
		base.browserSync.init( {
			port: config.browserSync && config.browserSync.port || 8080,
			startPath: config.browserSync && config.browserSync.startPath || null,
			server: {
				baseDir: config.dest
			}
		} );

		app.watch( [config.css.watch], ['css'] );
		app.watch( _.find( base.config.collections, {name: 'articles'} ).src, ['content:articles'] );
	} );
};
