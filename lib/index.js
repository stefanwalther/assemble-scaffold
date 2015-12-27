"use strict";
var assemble = require( "assemble" );
var extname = require( "gulp-extname" );
var extend = require( "extend" );
var jsYaml = require( "js-yaml" );
var fs = require( "fs" );
var path = require( "path" );
var less = require( "gulp-less" );
var minifyCss = require("gulp-minify-css");
var sourceMaps = require("gulp-sourcemaps");
var debug = require("gulp-debug");

var AssembleScaffold = function ( config ) {
	this.app = assemble();
	this.origConfig = config;

	this.baseConfig();
	this.setupTasks();

};

AssembleScaffold.prototype.baseConfig = function () {

	var defaultConfig = jsYaml.safeLoad( fs.readFileSync( path.join( __dirname, "./default-config.yml" ) ), "utf8" );
	this.config = extend( defaultConfig, this.origConfig );

	/**
	 * Customize how templates are stored. This changes the
	 * key of each template, so it's easier to lookup later
	 */
	this.app.option( 'renameKey', function ( fp ) {
		return path.basename( fp, path.extname( fp ) );
	} );
};

AssembleScaffold.prototype.setupTasks = function () {
	this.css();
};

AssembleScaffold.prototype.css = function () {
	var self = this;
	this.app.task( "css", function ( ) {
		return self.app.src( self.config.css.src )
			.pipe( sourceMaps.init())
			.pipe( less() )
			.pipe( minifyCss())
			.pipe( debug({title: "less:"}))
			.pipe(sourceMaps.write())
			.pipe( self.app.dest( self.config.css.dest ) )
	} );
};

AssembleScaffold.prototype.run = function ( cb ) {
	this.app.build( ["css"], function ( err ) {
		if ( err ) {
			console.error( "Error: ", err );
		}
		cb( err );
	} )
};

module.exports = AssembleScaffold;

