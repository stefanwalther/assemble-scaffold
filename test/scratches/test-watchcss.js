'use strict';
var AssembleScaffold = require( './../../lib/index.js' );
var config = require( './../config/config' );

var assembleScaffold = new AssembleScaffold( config );

assembleScaffold.runTask( 'defaultserve', function ( err, results ) {
	if ( err ) {
		console.error( err );
	} else {
		console.log( 'done: ', results);
	}
} );
