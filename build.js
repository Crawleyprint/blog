'use strict';

var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var templates = require('metalsmith-templates');
var sass = require('metalsmith-sass');

metalsmith(__dirname)
  .use(markdown())
  .use(sass({
    outputDir: 'css'
  }))
  .use(templates('handlebars'))
  .destination('./build')
  .build(function(err) {
    if (err) {
      throw err.message;
    }
  });
