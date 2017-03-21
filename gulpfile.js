'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')({lazy:true});
const path = require('path');
const config = require('./gulp.config')();

gulp.task('watch', ()=>{
    gulp.watch(config.less, ['less']);
});

gulp.task('lint', ()=>{
    return gulp
        .src(config.js)
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.eslint.failAfterError());
});

gulp.task('less', ()=>{
    gulp.src(config.less)
    .pipe($.plumber())
    .pipe($.less())
    .pipe($.autoprefixer({browsers: ['last 2 version','> 5%']}))
    .pipe(gulp.dest('./styles/css/'))
    .pipe($.cssmin())
    .pipe($.rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./styles/css/'))
});

gulp.task('wiredep', () => {
    let options = config.getWiredepDefaultOptions();
    const wiredep = require('wiredep').stream;

    return gulp 
        .src(config.index)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.js)))
        .pipe(gulp.dest(config.client))
});

gulp.task('inject', ['wiredep','less'], () => {
    return gulp 
        .src(config.index)
        .pipe($.inject(gulp.src(config.css)))
        .pipe($.inject(gulp.src(config.css)))
        .pipe(gulp.dest(config.client))
})