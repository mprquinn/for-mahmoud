var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var minify = require('gulp-babel-minify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
  gulp.watch('./scss/**', ['scss']);
  gulp.watch('./js/**', ['min']);
});


gulp.task('min', function () {
    return gulp.src('./js/*.js')
        .pipe(minify({
            ext: {
                src: '.js',
                min: '.js'
            }
        })).pipe(gulp.dest('./build/js/'))
});

gulp.task('scss', function (){
  return gulp.src('./scss/styles.scss')
    .pipe(sourcemaps.init({
			loadMaps: true,
			identityMap: true
    }))
    .pipe(sass({ indentedSyntax: true, errLogToConsole: true, outputStyle: 'expanded' }))
    .pipe(sourcemaps.write('.', {
			sourceRoot: './css'
    }))
    .pipe(gulp.dest('./css'));
});