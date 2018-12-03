var gulp = require('gulp'),
    server = require('gulp-webserver'),
    js = require('gulp-uglify'),
    scss = require('gulp-sass'),
    css = require('gulp-clean-css');


gulp.task('dev', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(scss())
        .pipe(css())
        .pipe(gulp.dest('./src/css'))
});


gulp.task('server', function() {
    return gulp.src('./src')
        .pipe(server({
            port: 8080,
            open: true,
            livereload: true
        }))
})