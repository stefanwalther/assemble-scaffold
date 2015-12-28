"use strict";
var AssembleScaffold = require( "./../../lib/" );
var chai = require( "chai" );
var expect = chai.expect;
var path = require( "path" );
var fs = require( "fs" );
var mkdirp = require( "mkdirp" );
var glob = require("glob");
var config = require("./config");

var assembleScaffold = null;
describe( "assemble-scaffold", function () {

	beforeEach( function ( done ) {
		assembleScaffold = new AssembleScaffold( config );
		assembleScaffold.runTask( "clean", function ( err ) {
			expect( err ).to.not.exist;
			done( err );
		} )
	} );

	it( "is an object", function () {
		expect( assembleScaffold ).to.be.an( "object" );
	} );

	it( "tasks are loaded from dir", function () {
		expect( assembleScaffold.app ).to.be.an( "object" );
		expect( assembleScaffold.app.tasks.clean ).to.exist;
		expect( assembleScaffold.app.tasks["content:static"] ).to.exist;
	} );

	it( "cleans up the .build folder", function ( done ) {
		mkdirp( config.dest , {}, function ( err, made ) {
			expect( err ).to.not.exist;
			expect( made ).to.exist;
			assembleScaffold.runTask( "clean", function ( err ) {
				expect( err ).to.not.exist;
				done();
			} )
		});
	} );

	it( "converts less files to a single .css file", function ( done ) {
		return assembleScaffold.runTask( "css", function ( err ) {
			expect( err ).to.not.exist;
			expect( fs.existsSync( path.join( config.dest, "./assets/css/main.css" ) ) ).to.be.true;
			done();
		} )
	} );

	it( "does not convert imported css files", function ( done ) {
		assembleScaffold.runTask( "css", function ( err ) {
			expect( err ).to.not.exist;
			expect( fs.existsSync( path.join( config.dest, "./assets/css/variables.css" ) ) ).to.be.false;
			done();
		} );
	} );

	it( "copies assets", function ( done ) {
		assembleScaffold.runTask( "assets", function ( err ) {
			expect( err ).to.not.exist;
			expect( fs.existsSync( path.join( config.dest, "./assets/data.json" ) ) ).to.be.true;
			expect( fs.existsSync( path.join( config.dest, "./assets/images/a.png" ) ) ).to.be.true;
			expect( fs.existsSync( path.join( config.dest, "./assets/images/sub/y.png" ) ) ).to.be.true;
			done();
		} );
	} );

	it( "creates pages dir", function ( done ) {
		assembleScaffold.runTask( "content:static", function ( err ) {

			expect( err ).to.not.exist;
			expect( fs.existsSync( path.join( config.dest, "./pages" ) ) ).to.be.true;
			done();
		} );
	} );

	it( "creates pages contents", function ( done ) {
		assembleScaffold.runTask( "content:static", function ( err ) {

			expect( err ).to.not.exist;
			var g = glob.sync( path.join(config.dest, "./pages/**"), {});
			expect( g ).to.be.an("array" ).of.length.of.at.least(4);
			done();
		} );
	} );

	// Todo: Write this test at the end
	it( "runs", function ( done ) {
		assembleScaffold.run( function ( err ) {
			expect( err ).to.not.exist;
			done();
		} );
	} );

} );