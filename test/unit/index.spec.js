"use strict";
var AssembleScaffold = require("./../../lib/");
var chai = require("chai");
var expect = chai.expect;

var assembleScaffold = null;
describe( "assemble-scaffold", function () {

	beforeEach( function () {
		assembleScaffold = new AssembleScaffold( require("./config"));
	} );

	it( "is an object", function ( ) {
		expect( assembleScaffold ).to.be.an("object");
	} );

	it( "runs", function ( done ) {
		assembleScaffold.run( function ( err ) {
			expect( err ).to.not.exist;
			done();
		});
	} );
	
} );