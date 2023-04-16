var gulp       = require('gulp')
var sass       = require('gulp-sass')(require('sass'));
var livereload = require('gulp-livereload')
var minify     = require('gulp-minify')
var minifyCss  = require('gulp-clean-css')
var path       = require('path')
var rename     = require("gulp-rename")
var cache      = require('gulp-cached')

gulp.task('sass', function () {
  return gulp.src('scss/style.min.scss')
     .pipe(sass())
     .pipe(minifyCss())
     .pipe(gulp.dest(path.join(__dirname, '/css/')))
     .pipe(livereload())
});

// gulp.task('js', function() {
//   return gulp.src([ "_js/*.js" ])
//      .pipe(cache('linting'))
//      .pipe(minify({
//         ext: {
//            min: '.min.js'
//         },
//         noSource: true
//      }))
//      // .pipe(rename({ suffix: '.min' }))
//      .pipe(gulp.dest(path.join(__dirname, '/js/')))
//      .pipe(livereload())
// });

// Watch Files For Changes
gulp.task('watch', function () {
  livereload.listen()
  gulp.watch('scss/*.scss', gulp.series('sass'))
  // gulp.watch([
  //    '_js/*.js'
  // ], gulp.series('js'));
});
