"use strict";

module.exports = function ( base ) {

	var taskChain = [
		"load",
		"clean",
		"assets",
		"css",
		"content:pages"
	];

	base.app.task("default", taskChain, function ( cb ) {
		cb();
	})
};