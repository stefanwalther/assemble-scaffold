'use strict';
var AssembleScaffold = require( './../../lib/index.js' );
var config = require( './../config/config' );

var assembleScaffold = new AssembleScaffold( config );

assembleScaffold.app.build( 'default:watch:css', function ( err, results ) {
	if ( err ) {
		console.error( 'Error: ', err );
	} else {
		console.log( 'done' );
	}
} );
