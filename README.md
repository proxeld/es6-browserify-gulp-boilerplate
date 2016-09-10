es6-gulp-browserify-template
============================

### Getting started

Clone or download repository.

To use gulp tasks you need to have gulp command available globally (`npm i gulp -g`) or you can use gulp from node_modules directory:

```
node_modules/.bin/gulp
```

For coverage information, you have to install `babel-cli`

### What is included

- support for es6 (ECMAScript 2015)
- automatic code transpilation (with code change detection)
- bundling into single file
- uglify 
- tests setup (running in console/browser)
- code coverage using `istanbul`

### Usage

To build final bundle (both minified and not minified) just type `npm run build`. 
You can configure destination of the bundle in `Gulpfile.js` file.

To watch for changes in source files and auto-build type `npm run watch` or `gulp watch`.

To run tests in console type `npm test`. If you want to run tests in the browser type `npm run build-browser-tests-bundle`
and open tests.html in your browser.

To get coverage of your code type `npm run coverage`.