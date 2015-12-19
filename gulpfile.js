// set the path of plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

// Set up the tasks styles
gulp.task('styles', function() {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('css/styles.css'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(gulp.dest('./'))
    .pipe(reload({stream: true}));
});

// set up task watch
gulp.task('watch', function() {
  gulp.watch('sass/*.scss', ['styles']);
  gulp.watch('js/*.js', ['jshint']);
  gulp.watch('*.html', reload);
});

// set up task for jshint - javascript files
gulp.task('jshint', function() {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(reload({stream: true}));
});

// Browser-sync
gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: 'http://localhost:8888/Cuchufly/'
  });
});

gulp.task('default', ['browser-sync','styles', 'jshint', 'watch']);