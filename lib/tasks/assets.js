"use strict";

/**
 * Copy assets
 * @todo Error handling
 */
module.exports = function ( base ) {
	base.app.task("assets", function ( cb ) {
		base.app.copy( base.config.assets.src, base.config.assets.dest )
			.on("error", cb)
			.on("finish", cb)
	})
};