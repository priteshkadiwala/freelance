const gulp = require('gulp');
const path = require('path');
const sass = require('gulp-sass');
// const autoprefixer = require('gulp-autoprefixer');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const open = require('gulp-open');

const Paths = {
  HERE: './',
  DIST: 'dist/',
  CSS: './assets/css/',
  SCSS_TOOLKIT_SOURCES: './assets/scss/blk-design-system.scss',
  SCSS: './assets/scss/**/**',
};

gulp.task('compile-scss', () => gulp
  .src(Paths.SCSS_TOOLKIT_SOURCES)
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([autoprefixer()]))
  .pipe(sourcemaps.write(Paths.HERE))
  .pipe(gulp.dest(Paths.CSS)));

gulp.task('watch', () => {
  gulp.watch(Paths.SCSS, ['compile-scss']);
});

gulp.task('open', () => {
  gulp.src('index.html').pipe(open());
});

gulp.task('open-app', ['open', 'watch']);
