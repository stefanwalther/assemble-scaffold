'use strict';
var _ = require( 'lodash' );

/**
 * Copy article-assets
 * @todo Error handling
 * @todo Logging is completely missing with this approach.
 */
module.exports = function ( base ) {
	var app = base.app;
	var contentDef = _.find( base.config.collections, {name: 'articles'} );

	app.task( 'content:articles:assets', function () {
		return base.app.copy( contentDef.includeSubDirs[0], contentDef.dest );
	} );
};
