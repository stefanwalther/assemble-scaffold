'use strict';
var AssembleScaffold = require( './../../lib/' );
var chai = require( 'chai' );
var expect = chai.expect;
var path = require( 'path' );
var fs = require( 'fs' );
var mkdirp = require( 'mkdirp' );
var glob = require( 'glob' );
var config = require( './config' );

chai.use( require( 'chai-fs' ) );

var assembleScaffold = null;
describe( 'assemble-scaffold', function () {

	beforeEach( function ( done ) {
		assembleScaffold = new AssembleScaffold( config );
		assembleScaffold.runTask( 'clean', function ( err ) {
			expect( err ).to.not.exist;
			done( err );
		} );
	} );

	it( 'is an object', function () {
		expect( assembleScaffold ).to.be.an( 'object' );
	} );

	it( 'tasks are loaded from dir', function () {
		expect( assembleScaffold.app ).to.be.an( 'object' );
		expect( assembleScaffold.app.tasks.clean ).to.exist;
		expect( assembleScaffold.app.tasks['content:static-pages'] ).to.exist;
	} );

	it( 'cleans up the .build folder', function ( done ) {
		mkdirp( config.dest, {}, function ( err, made ) {
			expect( err ).to.not.exist;
			expect( made ).to.exist;
			assembleScaffold.runTask( 'clean', function ( err ) {
				expect( err ).to.not.exist;
				done();
			} );
		} );
	} );

	it( 'converts less files to a single .css file', function ( done ) {
		return assembleScaffold.runTask( 'css', function ( err ) {
			expect( err ).to.not.exist;
			expect( fs.existsSync( path.join( config.dest, './assets/css/main.css' ) ) ).to.be.true;
			done();
		} );
	} );

	it( 'does not convert imported css files', function ( done ) {
		assembleScaffold.runTask( 'css', function ( err ) {
			expect( err ).to.not.exist;
			expect( fs.existsSync( path.join( config.dest, './assets/css/variables.css' ) ) ).to.be.false;
			done();
		} );
	} );

	it( 'copies assets', function ( done ) {
		assembleScaffold.runTask( 'assets', function ( err ) {
			expect( err ).to.not.exist;
			expect( fs.existsSync( path.join( config.dest, './assets/data.json' ) ) ).to.be.true;
			expect( fs.existsSync( path.join( config.dest, './assets/images/a.png' ) ) ).to.be.true;
			expect( fs.existsSync( path.join( config.dest, './assets/images/sub/y.png' ) ) ).to.be.true;
			done();
		} );
	} );

	it( 'creates index.html', function ( done ) {
		assembleScaffold.runTask( 'content:index', function ( err ) {

			expect( err ).to.not.exist;
			expect( fs.existsSync( path.join( config.dest, './index.html' ) ) ).to.be.true;
			done();
		} );
	} );

	it( 'creates static pages', function ( done ) {
		assembleScaffold.runTask( 'content:static-pages', function ( err ) {

			expect( err ).to.not.exist;
			expect( fs.existsSync( path.join( config.dest, './static' ) ) ).to.be.true;
			done();
		} );
	} );

	it( 'creates default pages', function ( done ) {
		assembleScaffold.runTask( 'content:default-pages', function ( err ) {

			expect( err ).to.not.exist;
			var g = glob.sync( path.join( config.dest, './pages/**' ), {} );
			expect( g ).to.be.an( 'array' ).of.length.of.at.least( 1 );
			done();
		} );
	} );

	it( 'creates pages contents', function ( done ) {
		assembleScaffold.runTask( 'content:static-pages', function ( err ) {

			expect( err ).to.not.exist;
			var g = glob.sync( path.join( config.dest, './static/**' ), {} );
			expect( g ).to.be.an( 'array' ).of.length.of.at.least( 4 );
			expect( path.join( config.dest, './static/about/index.html' ) ).to.have.content.that.match( /<!DOCTYPE html>/ );
			done();
		} );
	} );

	it( 'creates articles', function ( done ) {
		assembleScaffold.runTask( 'content:articles', function ( err ) {

			expect( err ).to.not.exist;
			var g = glob.sync( path.join( config.dest, './articles/**' ), {} );
			expect( g ).to.be.an( 'array' ).of.length.of.at.least( 1 );
			expect( path.join( config.dest, './articles/article-1.html' ) ).to.have.content.that.match( /<!DOCTYPE html>/ );
			done();
		} );
	} );

	it( 'skips articles if not defined', function ( done ) {
		expect( true ).to.equal( false );
		done();
	} );

	// Todo: Write this test at the end
	it( 'runs', function ( done ) {
		assembleScaffold.run( function ( err ) {
			expect( err ).to.not.exist;
			done();
		} );
	} );

} );
