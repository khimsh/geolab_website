const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const imageMin = require('gulp-imagemin');
const clean = require('gulp-rimraf');
const browserSync = require('browser-sync');

// Compile SASS to CSS
gulp.task('sass', function() {
  return gulp.src('./src/assets/sass/**/*.sass')
    .pipe(plumber())
    .pipe(sass()
    .on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('./dist/assets/css'))
    .pipe(browserSync.stream());
});

// Clean out images folder before running imageMin
gulp.task('clean', () => {
    return gulp.src('./dist/assets/images', { read: false })
        .pipe(clean());
});

// Optimize Images
gulp.task('imageMin', ['clean'], () =>
    gulp.src('./src/assets/images/**')
        .pipe(imageMin())
        .pipe(gulp.dest('./dist/assets/images'))
);

// Watch and Serve
gulp.task('watch', function() {

    browserSync.init({
      server: "dist/"
    });

    gulp.watch("./src/assets/sass/**/*.sass", ['sass']);
    gulp.watch("./dist/**/*.html").on('change', browserSync.reload);
  });

// Default Task
gulp.task('default', ['watch']);