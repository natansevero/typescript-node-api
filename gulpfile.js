const gulp = require('gulp'),
      clean = require('gulp-clean');

gulp.task('default', ['copy'], () => {
  gulp.start('tsless');
});

gulp.task('copy', ['clean'], () => {
  return gulp.src('server/**/*')
    .pipe(gulp.dest('build'));
});

gulp.task('clean', () => {
  return gulp.src('build')
    .pipe(clean());
});

gulp.task('tsless', ['jsless'], () => {
  gulp.src(['build/**/*.ts', 'build/*.ts'])
    .pipe(clean());
});

gulp.task('jsless', () => {
  return gulp.src(['server/**/*.js', 'server/*.js'])
    .pipe(clean());
})
