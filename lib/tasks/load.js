"use strict";

"use strict";

module.exports = function ( base ) {
	base.app.task("load", function ( cb ) {
		base.app.layouts( base.config.layouts );
		base.app.helpers( base.config.helpers );
		base.app.partials( base.config.partials );
		cb();
	})
};