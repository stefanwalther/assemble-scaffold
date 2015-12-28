"use strict";

module.exports = function ( base ) {

	var taskChain = [
		"load",
		"clean",
		"assets",
		"css",
		"content:static"
	];

	base.app.task("default", taskChain, function ( cb ) {
		cb();
	})
};