"use strict";

"use strict";

module.exports = function ( base ) {
	base.app.task("load", function ( cb ) {
		base.app.layouts( this.config.layouts );
		base.app.helpers( this.config.helpers );
		base.app.partials( this.config.partials );
		cb();
	})
};