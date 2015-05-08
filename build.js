'use strict';

var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var templates = require('metalsmith-templates');

metalsmith(__dirname)
  .use(markdown())
  .use(templates('handlebars'))
  .destination('./build')
  .build(function(err) {
    if (err) {
      throw err;
    }
  });
