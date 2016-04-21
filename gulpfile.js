// the packages

/*
*
* gulp-main-bower-files
* https://www.npmjs.com/package/gulp-main-bower-files
*
*
*
*
*
*
* */

var gulp = require('gulp'),
    gulpFilter = require('gulp-filter'),
    concat = require('gulp-concat'),
    bower = require('gulp-bower'),
    mainBowerFiles = require('gulp-main-bower-files'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

// custom config objects

var config = {
    bowerDir: './bower_components'
};

// *******************************************************************************************
// Tasks
// *******************************************************************************************

// ===========================================================================================
// Task Name: scripts
// Description: uglifies files and adds a .min suffix
// ===========================================================================================

gulp.task('scripts', function(){
    gulp.src(['src/js/**/*.js', '!src/js/**/*.min.js', '!src/js/libs'])
        .pipe(uglify())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('src/js'))
        .pipe(reload({stream:true}))
});

// ===========================================================================================
// Task Name: sass
// Description: compiles sass, writes to src dir and triggers browser sync
// ===========================================================================================

gulp.task('sass', function(){
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(reload({stream:true}))
});

// ===========================================================================================
// Task Name: html
// Description: Triggers browser sync on changes to .html files
// ===========================================================================================

gulp.task('html', function(){
    gulp.src('src/**/*.html')
        .pipe(reload({stream:true}))
});

// ===========================================================================================
// Task Name: browser-sync
// Description: Initializes browserSync gulp plugin
// ===========================================================================================

gulp.task('browser-sync', function(){
    browserSync.init({
       server: {
           baseDir: 'src'
       }
   })
});

// ----------
// bower
// ----------

gulp.task('bower', function(){
   return bower()
       .pipe(gulp.dest(config.bowerDir))
});

gulp.task('bower-files', function(){
   return gulp.src('./bower.json')
       .pipe(mainBowerFiles())
       //.pipe(uglify())
       .pipe(gulp.dest('./src/js/libs/'))
});

gulp.task('main-bower-files', function() {
    var filterJS = gulpFilter('**/*.js', { restore: true });
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles())
        .pipe(filterJS)
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(filterJS.restore)
        .pipe(gulp.dest('./build/js'));
});

// ===========================================================================================
// Task Name: bower-install-plugins
// ===========================================================================================
gulp.task('bower-install-plugins', ['bower']);

// ===========================================================================================
// Task Name: watch
// Description:
// ===========================================================================================

gulp.task('watch', ['browser-sync'], function(){
    gulp.watch('src/js/**/*.js', ['scripts']);
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/**/*.html', ['html']);
});

// ===========================================================================================
// Task Name: default
// ===========================================================================================

gulp.task('default', ['scripts', 'main-bower-files', 'sass', 'browser-sync', 'watch']);


/*

- First run 'gulp bower-install-plugins' which will install bower dependencies

- Next run 'gulp watch'





 */

