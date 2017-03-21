var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var plumber = require('gulp-plumber');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var nodemon = require('gulp-nodemon');

gulp.task('watch', function(){
    gulp.watch('./styles/less/*.less', ['less']);
});

gulp.task('less', function(){
    gulp.src('./styles/less/*.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('./styles/css/'))
    .pipe(cssmin())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./styles/css/'))
})