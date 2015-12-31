'use strict';
var Handlebars = require( 'handlebars' );

module.exports = function ( ctxValue ) {

	console.log( 'Current Context' );
	console.log( '-------------------------------' );
	console.log( this );

	if ( ctxValue ) {
		console.log( 'Value: ' );
		console.log( '-------------------------------' );
		console.log( ctxValue );
	}
};
