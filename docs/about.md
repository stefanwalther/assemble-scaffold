[Assemble](https://github.com/assemble/assemble.git) seems to be the most promising static site generator if you prefer to use JavaScript. The entire solution has been completely rewritten in 2015, now (as of 12/2015) the new version 0.6.0 is available.

This project is an attempt to verify if *assemble* fits my needs to create a bit more complex website based on a static website generator.

The **goal of this project** is to create a nice scaffold using Assemble which can then be used in multiple projects with very little configuration.

### Planned features:

- [ ] Markdown conversion
- [ ] Cleaning the build directory
- [ ] Error handling to ensure that everything went well
- [ ] Error notification
- Basic Setup:
	- [ ] Copying site assets
	- [ ] Fetching external content (mainly from GitHub pages)
	- [x] Less conversion
	- [x] CSS minification
	- [ ] Html minification
- Content Types
	- [ ] Article
	- [ ] Blog
	- [ ] Archive
- Different:
	- [ ] layouts
	- [ ] collections
- Validation:
	- [ ] CSS Lint
	- [ ] Html Lint
	- [ ] Link validation
- Dynamic loading of:
	- [ ] handlebar templates
	- [ ] partials
	- [ ] plugins
- Site features:
	- [ ] Lunr search
	- [ ] Tags
	- [ ] Permalinks
	- [ ] Comments, either linking to GitHub or to Disqus
	- [ ] Collections
- Logging
	- [ ] Need good logging to see if everything went well
- Full test coverage to ensure that everything continues to work
