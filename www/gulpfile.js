const gulp = require('gulp');
const sass = require('gulp-sass');
const jade = require('gulp-jade');
var runSequence = require('run-sequence');

gulp.task('sass', function() {
  return gulp.src('assets/css/main.sass') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('assets/css'))
})

gulp.task('jade', function () {
  return gulp.src('*.jade')
    .pipe(jade({
      jade: jade,
      pretty: true
    }))
    .pipe(gulp.dest('/'))
})


gulp.task('watch', function(){
  gulp.watch('assets/css/main.sass', ['sass']);
  gulp.watch('*.jade', ['sass']);
  // Other watchers
})

gulp.task('default', function (callback) {
  runSequence(['watch'],
    callback
  )
})
