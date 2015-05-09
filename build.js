'use strict';

var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var templates = require('metalsmith-templates');
var sass = require('metalsmith-sass');
var watch = require('metalsmith-watch');
var livereload = require('livereload');
var connect = require('connect');
var http = require('http');
var serveStatic = require('serve-static');

var port = 35729;



metalsmith(__dirname)
  .use(watch({
    livereload: true
  }))
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

/**
 * create connect app
 */
var app = connect();

app
  .use(require('connect-livereload')({
    port: port
  }))
  .use(serveStatic(__dirname + '/build'));

http.createServer(app).listen(9001);

