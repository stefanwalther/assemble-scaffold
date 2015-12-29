"use strict";

module.exports = function ( base ) {

	var app = base.app;
	var taskChain = [
		"clean",
		"assets",
		"css",
		"content:static-pages",
		"content:articles",
		"content:pages"
	];

	app.task("default", taskChain, function ( cb ) {
		cb();
	})
};