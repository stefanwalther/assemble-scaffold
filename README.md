# assemble-scaffold

> Scaffold for an assemble based web site.

**Work in progress: stay tuned**

## About

[Assemble](https://github.com/assemble/assemble.git) seems to be the most promising static site generator if you prefer to use JavaScript. The entire solution has been completely rewritten in 2015, now (as of 12/2015) the new version 0.6.0 is available.

This project is an attempt to verify if _assemble_ fits my needs to create a bit more complex website based on a static website generator.

The **goal of this project** is to create a nice scaffold using Assemble which can then be used in multiple projects with very little configuration.

### Planned features:

* [ ] Markdown conversion
* [x] Cleaning the build directory
* [ ] Error handling to ensure that everything went well
* [ ] Error notification
* Basic Setup:
  - [x] Copying site assets
  - [ ] Fetching external content (mainly from GitHub pages)
  - [x] Less conversion
  - [x] CSS minification
  - [x] CSS sourcemaps
  - [ ] Html minification

* Content Types
  - [ ] Article
  - [ ] Blog
  - [ ] Archive
  - [ ] Projects

* Different:
  - [ ] layouts
  - [ ] collections

* Validation:
  - [ ] CSS Lint
  - [ ] Html Lint
  - [ ] Link validation
  - [ ] Front matter validation & defaults

* Optimization
  - [ ] Remove unused CSS
  - [ ] Uglify JavaScript files

* Dynamic loading of:
  - [ ] handlebar templates
  - [ ] partials
  - [ ] plugins

* SEO
  - [ ] Include excerpt
* Single page features
  - [ ] Conditional table of contents
  - [ ] Code formatting
  - [ ] Hybrid formatting (.md + .html)
  - [ ] Responsive images

* Site features:
  - [ ] Lunr search
  - [ ] Tags
  - [ ] Permalinks
  - [ ] Comments, either linking to GitHub or to Disqus
  - [ ] Collections
  - [ ] Sitemap
  - [ ] Aliases for pages
  - [ ] RSS generator
  - [ ] Related posts
  - [ ] Favicons

* Api documentation integration
  - [ ] Integrate pages with JSDoc/ESDoc output

* Publishing process
  - [ ] Auto versioning
  - [ ] Auto upload to Amazon S3

* Logging
  - [ ] Need good logging to see if everything went well
* Full test coverage to ensure that everything continues to work

## Install

```sh
$ npm i assemble-scaffold --save
```

## Configuration

(TBD)

## Author

**Stefan Walther**

+ [qliksite.io](http://qliksite.io)
* [twitter/waltherstefan](http://twitter.com/waltherstefan)
* [github.com/stefanwalther](http://github.com/stefanwalther)

## License

Released under the MIT license.

***