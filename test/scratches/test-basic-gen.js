var assemble = require("assemble");

var app = assemble();

app.task("default", function (  ) {
	app.src("./../fixtures/content/*.md")
		.pipe( app.dest(".build"))
});

app.build(["default"], function ( err ) {
	if (err) {
		console.error( err);
	} else {
		console.log("done");
	}
});