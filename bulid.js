'use strict';

var metalsmith = require('metalsmith');

metalsmith(__dirname)
  .destination('./build')
  .build();
