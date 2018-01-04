const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src(['assets/css/scss/**/*.scss'])

    .pipe(sass({outputStyle: ''}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
      }))
        .pipe(gulp.dest("assets/css"))
        .pipe(browserSync.stream());
});


// Watch Sass & Serve
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"
});

gulp.watch(["assets/css/scss/**/*.scss"], ['sass']);

gulp.watch("./*.html").on('change', browserSync.reload);
gulp.watch("assets/js/*.js").on('change', browserSync.reload);

});

// Default Task
gulp.task('default', ['serve']);
