const gulp = require('gulp');
const $ = require('gulp-load-plugins')({lazy:true});
const path = require('path');
const config = require('./gulp.config')();

gulp.task('watch', function(){
    gulp.watch(config.less, ['less']);
});

gulp.task('lint', function(){
    return gulp
        .src(config.js)
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.eslint.failAfterError());
});

gulp.task('less', function(){
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
})