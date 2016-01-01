'use strict';

module.exports = function ( context ) {
	var list = this.app.list( this.app.views.articles );
	return list.items.map( function ( article ) {
		return context.fn( article.data );
	} ).join( '\n' );
};
