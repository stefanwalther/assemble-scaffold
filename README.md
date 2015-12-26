# assemble-scaffold

> Scaffold for an assemble based web site.

**Work in progress: stay tuned**

## About

[Assemble](https://github.com/assemble/assemble.git) seems to be the most promising static site generator if you prefer to use JavaScript. The entire solution has been completely rewritten in 2015, now (as of 12/2015) the new version 0.6.0 is available.

This project is an attempt to verify if _assemble_ fits my needs to create a bit more complex website based on a static website generator.

The **goal of this project** is to create a nice scaffold using Assemble which can then be used in multiple projects with very little configuration.

### Status so far

What's planned (not everything covered right now):

* [ ] Markdown conversion
* [ ] Cleaning the build directory
* [ ] Error handling to ensure that everything went well
* [ ] Error notification
* Basic Setup:
  - [ ] Copying site assets
  - [ ] Fetching external content
  - [ ] Less conversion
  - [ ] Html minification
  - [ ] CSS minification

* Different:
  - [ ] layouts
  - [ ] content types
  - [ ] collections

* Dynamic loading of:
  - [ ] handlebar templates
  - [ ] partials
  - [ ] plugins

* Site features:
  - [ ] Tags
  - [ ] Permalinks
  - [ ] Comments
  - [ ] Collections
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