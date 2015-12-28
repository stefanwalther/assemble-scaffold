"use strict";

module.exports = function ( base ) {

	var taskChain = [
		"clean",
		"assets",
		"css",
		"content:static",
		"content:articles"
	];

	base.app.task("default", taskChain, function ( cb ) {
		cb();
	})
};