'use strict';

var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');

metalsmith(__dirname)
  .use(markdown())
  .destination('./build')
  .build(function(err) {
    if (err) {
      throw err;
    }
  });
