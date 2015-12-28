"use strict";


/**
 * Copy assets
 * @todo Error handling
 */
module.exports = function ( base ) {
	base.app.task( "assets", function ( ) {
		return base.app.copy( base.config.assets.src, base.config.assets.dest );
	} )
};