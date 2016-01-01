'use strict';
var Handlebars = require( 'handlebars' );

module.exports = function ( context ) {

	console.log( 'Current Context' );
	console.log( '-------------------------------' );
	console.log( this );

	if ( context ) {
		console.log( 'Value: ' );
		console.log( '-------------------------------' );
		console.log( context );
	}
};
