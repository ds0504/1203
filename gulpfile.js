var gulp = require('gulp'),
    server = require('gulp-webserver'),
    js = require('gulp-uglify'),
    scss = require('gulp-sass'),
    concat = require('gulp-concat'),
    css = require('gulp-clean-css');

gulp.task('dev', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(scss())
        .pipe(concat('all.css'))
        .pipe(css())
        .pipe(gulp.dest('./src/css'))
});

gulp.task('Js', function() {
    return gulp.src('./src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(js())
        .pipe(gulp.dest('./src/minjs/'))
})

gulp.task('watch', function() {
    return gulp.watch('./src/scss/*.scss', gulp.series('dev'))
})

gulp.task('server', function() {
    return gulp.src('./src')
        .pipe(server({
            port: 9090,
            open: true,
            livereload: true
        }))
})


gulp.task('default', gulp.series('dev', 'server', 'Js', 'watch'))