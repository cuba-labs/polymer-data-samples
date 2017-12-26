'use strict';

const gulp = require('gulp');
const del = require('del');
const polymerBuild = require('polymer-build');
const mergeStream = require('merge-stream');
const path = require('path');
const polyserve = require('polyserve');

const projectOptions = require('./polymer.json');
const project = new polymerBuild.PolymerProject(projectOptions);

gulp.task('clean', function() {
  return del(path.join('build','bundled'));
});

gulp.task('build:unbundled', ['clean'], function() {
  const project = new polymerBuild.PolymerProject(projectOptions);
  return mergeStream(project.sources(), project.dependencies())
    .pipe(project.updateBaseTag(projectOptions.basePath))
    .pipe(gulp.dest(path.join('build','bundled')));
});

gulp.task('build', ['build:unbundled', 'clean'], function() {
  return mergeStream(project.sources(), project.dependencies())
    .pipe(project.bundler())
    .pipe(project.updateBaseTag(projectOptions.basePath))
    .pipe(gulp.dest(path.join('build','bundled')));
});

gulp.task('build-sw', ['build'], function(callback) {
  var swPrecacheConfig = require(path.resolve(project.config.root, 'sw-precache-config.js'));
  return polymerBuild.addServiceWorker({
    buildRoot: path.join('build','bundled'),
    project: project,
    bundled: true,
    swPrecacheConfig: swPrecacheConfig
  });
});

gulp.task('serve', function() {
  polyserve.startServers({});
});