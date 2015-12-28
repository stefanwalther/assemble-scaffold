var AssembleScaffold = require("./../../lib/index.js");
var config = require("./../unit/config");

var assembleScaffold = new AssembleScaffold( config );

assembleScaffold.run( function ( err ) {
	if (err) {
		console.error(err);
	} else {
		console.log("done");
	}
});