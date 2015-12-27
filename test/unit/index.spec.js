"use strict";
var AssembleScaffold = require("./../../lib/");
var chai = require("chai");
var expect = chai.expect;
var path = require("path");
var fs = require("fs");

var assembleScaffold = null;
describe( "assemble-scaffold", function () {

	beforeEach( function ( done ) {
		assembleScaffold = new AssembleScaffold( require("./config"));
		assembleScaffold.runTask( "clean", function ( err ) {
			done();
		})
	} );

	it( "is an object", function ( ) {
		expect( assembleScaffold ).to.be.an("object");
	} );

	/**
	 * @todo: Add some files before to check ...
	 */
	it( "cleans up the .build folder", function ( done ) {
		assembleScaffold.runTask("clean", function ( err ) {
			expect( err ).to.not.exist;
			done();
		})
	} );

	it( "converts less files to a single .css file", function ( done ) {
		return assembleScaffold.runTask("css", function ( err ) {
			expect( err ).to.not.exist;
			expect( fs.existsSync(path.join(__dirname, "./../.build/assets/css/main.css")) ).to.be.true;
			done();
		})
	} );

	it( "does not convert imported css files", function ( done ) {
		assembleScaffold.runTask("css", function ( err ) {
			expect( err ).to.not.exist;
			expect( fs.existsSync(path.join(__dirname, "./../.build/assets/css/variables.css")) ).to.be.false;
			done();
		})
	} );

	it( "runs", function ( done ) {
		assembleScaffold.run( function ( err ) {
			expect( err ).to.not.exist;
			done();
		});
	} );



} );