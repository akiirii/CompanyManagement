/**
 * Created by:  Dinca Roberto
 * On:          21/05/2016
 * For project: companyManagement
 * Description: It contains minimal tasks for the project to run
 */

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    bowerFiles = require('main-bower-files'),
    inject = require('gulp-inject'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    runSequence = require('run-sequence');


gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
    gulp.watch('app/**/*.html', reload);
    gulp.watch('app/**/*.js', reload);
});


gulp.task('build', function () {
    return gulp.src('./app/index.html')
        .pipe(inject(gulp.src(bowerFiles(), {base: '/app/bower_components', read: false}), {
            name: 'bower',
            relative: true
        }))
        .pipe(inject(gulp.src('./app/**/*.module.js', {read: false}), {relative: true, name:"module"}))
        .pipe(inject(gulp.src(['./app/**/*.js', '!./app/bower_components/**/*.js', '!./app/**/*.module.js'], {read: false}), {relative: true}))
        .pipe(gulp.dest('./app'));
    }
);


gulp.task('default', function () {
    return runSequence('build', 'watch')
});



