[Assemble](https://github.com/assemble/assemble.git) seems to be the most promising static site generator if you prefer to use JavaScript. The entire solution has been completely rewritten in 2015, now (as of 12/2015) the new version 0.6.0 is available.

This project is an attempt to verify if *assemble* fits my needs to create a bit more complex website based on a static website generator.

The **goal of this project** is to create a nice scaffold using Assemble which can then be used in multiple projects with very little configuration.

### Planned features:

- [ ] Error handling to ensure that everything went well
- [ ] Error notification
- Basic Setup:
	- [x] Cleaning the build directory
	- [x] Copying site assets
	- [ ] Fetching external content (mainly from GitHub pages)
	- [x] Less conversion
	- [x] CSS minification
	- [x] CSS sourcemaps
- Content Types
	- [x] Pages
	- [x] Article
	- [ ] Blog
	- [ ] Archive
	- [ ] Projects
- Content Handling
	- [x] Markdown conversion
	- [ ] Partials
- Different:
	- [ ] layouts
	- [ ] collections
- Output validation:
	- [ ] CSS Lint
	- [ ] Html Lint
	- [ ] Link validation
	- [ ] Front matter validation & defaults
- Optimization
	- [ ] Remove unused CSS
	- [ ] Uglify JavaScript files
	- [x] Prettifying Html output
- Dynamic loading of:
	- [x] handlebar templates
	- [x] partials
	- [x] layouts
	- [ ] plugins
- SEO
	- [ ] Include excerpt
- Single page features
	- [ ] Conditional table of contents
	- [ ] Code formatting
	- [ ] Hybrid formatting (.md + .html)
	- [ ] Responsive images
- Site features:
	- [ ] Lunr search
	- [ ] Tags
	- [x] Permalinks
	- [ ] Permalink configuration per doc (slug)
	- [ ] Comments, either linking to GitHub or to Disqus
	- [ ] Collections
	- [ ] Sitemap
	- [ ] Aliases for pages
	- [ ] RSS generator
	- [ ] Related posts
	- [ ] Favicons
	- [ ] robot.txt
	- [ ] sitemap.xml
	- [x] Ability to define drafts which then will not be rendered.
- Api documentation integration
	- [ ] Integrate pages with JSDoc/ESDoc output
- Publishing process
	- [ ] Auto versioning
	- [ ] Create summary of published results / changes
	- [ ] Auto upload to Amazon S3 
- Logging
	- [ ] Need good logging to see if everything went well
- Testing
	- [ ] Full test coverage to ensure that everything continues to work
