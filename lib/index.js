"use strict";
var assemble = require( "assemble" );
var extend = require( "extend" );
var jsYaml = require( "js-yaml" );
var fs = require( "fs" );
var path = require( "path" );
var glob = require("glob");

var AssembleScaffold = function ( config ) {
	this.app = assemble();
	this.origConfig = config;

	this.baseConfig();
	this.loadTasks();
};

AssembleScaffold.prototype.baseConfig = function () {

	var defaultConfig = {};//jsYaml.safeLoad( fs.readFileSync( path.join( __dirname, "./default-config.yml" ) ), "utf8" );
	this.config = extend( defaultConfig, this.origConfig );

	/**
	 * Customize how templates are stored. This changes the
	 * key of each template, so it's easier to lookup later
	 */
	this.app.option( 'renameKey', function ( fp ) {
		return path.basename( fp, path.extname( fp ) );
	} );

	this.app.preLayout( /\/content\/.*\.md/, function ( view, next ) {
		if ( !view.layout ) {
			view.layout = 'default';
		}
		next();
	} );
};

AssembleScaffold.prototype.loadTasks = function () {

	var self = this;
	var pattern = path.join( __dirname, "./tasks/*.js" );
	glob.sync( pattern, {} ).forEach( function ( file ) {
		require( file )( self );
	} );
};

AssembleScaffold.prototype.run = function ( cb ) {
	this.app.build( ["default"], function ( err ) {
		if ( err ) {
			console.error( "Error: ", err );
		}
		cb( err );
	} );
};

AssembleScaffold.prototype.runTask = function ( taskName, cb ) {
	this.app.build( taskName, function ( err ) {
		if ( err ) {
			console.error("Error: ", err);
		}
		cb( err );
	} );
};

module.exports = AssembleScaffold;

