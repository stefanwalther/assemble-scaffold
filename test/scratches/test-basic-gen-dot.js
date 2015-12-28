var assemble = require("assemble");

var app = assemble();

app.helper("markdown", "./../fixtures/helpers/markdown");

app.task('default', function() {
	return app.src( "./../fixtures/content/**/*.md")
		.on('err', console.log)
		.pipe(app.renderFile())
		.on('err', console.log)
});

app.build(["default"], function ( err ) {
	if (err) {
		console.error( err);
	} else {
		console.log("done");
	}
});