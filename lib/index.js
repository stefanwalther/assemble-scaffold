'use strict';
var assemble = require( 'assemble' );
var extend = require( 'extend' );
//var jsYaml = require( 'js-yaml' );
//var fs = require( 'fs' );
var path = require( 'path' );
var glob = require( 'glob' );
var toc = require( 'markdown-toc' );

var AssembleScaffold = function ( config ) {
	this.app = assemble();
	this.origConfig = config;

	this.baseConfig();
	this.loadTasks();
};

AssembleScaffold.prototype.baseConfig = function () {

	var self = this;
	var defaultConfig = {};//jsYaml.safeLoad( fs.readFileSync( path.join( __dirname, './default-config.yml' ) ), 'utf8' );
	this.config = extend( defaultConfig, this.origConfig );

	this.browserSync = require( 'browser-sync' ).create();

	/**
	 * Customize how templates are stored. This changes the
	 * key of each template, so it's easier to lookup later
	 */
	this.app.option( 'renameKey', function ( fp ) {
		return path.basename( fp, path.extname( fp ) );
	} );

	//Todo: make configurable
	//Todo: Double-check, not sure if this is the right approach
	this.app.option( 'assets', '/assets' );

	// ****************************************************************************************
	// Middleware
	// ****************************************************************************************
	/**
	 * Set the default layout for files with the extension .md or .hbs.
	 */
	this.app.preLayout( /\/content\/.*\.(md|hbs)/, function ( view, next ) {
		if ( !view.layout ) {
			view.layout = 'default';
		}
		next();
	} );

	/**
	 * Make collections available in the views.
	 */
	this.app.preRender( /./, function ( view, next ) {
		view.data.articles = this.app.views.articles;
		next();
	} );

	/**
	 * Bind an object called `toc` to each view containing the table of contents using markdown-toc.
	 */
	this.app.preRender( /\.md/, function ( view, next ) {
		view.data.toc = toc( view._content ).json;
		next();
	} );

	if ( self.config.dataFiles ) {
		this.app.data( self.config.dataFiles );
	}
};

AssembleScaffold.prototype.loadTasks = function () {

	var self = this;
	var pattern = path.join( __dirname, './tasks/*.js' );
	glob.sync( pattern, {} ).forEach( function ( file ) {
		require( file )( self );
	} );
};

AssembleScaffold.prototype.run = function ( cb ) {
	this.app.build( ['default'], function ( err ) {
		if ( err ) {
			console.error( 'Error: ', err );
		}
		cb( err );
	} );
};

AssembleScaffold.prototype.runTask = function ( taskName, cb ) {
	this.app.build( taskName, function ( err ) {
		if ( err ) {
			console.error( 'Error: ', err );
		}
		cb( err );
	} );
};

module.exports = AssembleScaffold;

