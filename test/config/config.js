'use strict';
var path = require( 'path' );

var srcDir = path.join( __dirname, './../../node_modules/static-test-content/src' );
var buildDir = path.join( __dirname, './../.build' );

var config = {
	dest: buildDir,
	helpers: path.join( srcDir, './helpers/*.js' ),
	layouts: path.join( srcDir, './templates/layouts/**/*.hbs' ),
	partials: path.join( srcDir, './templates/partials/*.hbs' ),
	data: {
		foo: 'bar'
	},
	dataFiles: [
		path.join( __dirname, './data.json' )
	],
	css: {
		watch: path.join( srcDir, './less/**/*.less'),
		src: path.join( srcDir, './less/**/main.less' ),
		dest: path.join( buildDir, './assets/css' )
	},
	assets: {
		src: path.join( srcDir, './assets/**' ),
		dest: path.join( buildDir, './assets' )
	},
	collections: [
		{
			name: 'index',
			src: path.join( srcDir, './content/index.{md,hbs}' ),
			dest: path.join( buildDir, './' )
		},
		{
			name: 'static-pages',
			src: path.join( srcDir, './content/static-pages/**/*.{md,hbs}' ),
			dest: path.join( buildDir, './static' )
		},
		{
			name: 'articles',
			src: path.join( srcDir, './content/articles/**/*.{md,hbs}' ),
			dest: path.join( buildDir, './articles' ),
			includeSubDirs: [
				path.join( srcDir, './content/articles/**/images/*.*' )
			]
		},
		{
			name: 'default-pages',
			src: path.join( srcDir, './content/default-pages/**/*.{md,hbs}' ),
			dest: path.join( buildDir, './pages' )
		}
	],
	browserSync: {
		port: 8080,
		startPath: 'static/articles/'
	}
};

module.exports = config;
