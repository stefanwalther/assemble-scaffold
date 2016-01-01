'use strict';

module.exports = function ( base ) {
	var app = base.app;
	app.task( 'serve', function () {
		base.browserSync.init( {
			port: base.config.browserSync && base.config.browserSync.port || 8080,
			startPath: base.config.browserSync && base.config.browserSync.startPath || null,
			server: {
				baseDir: base.config.dest
			}
		} );
	} );
};
