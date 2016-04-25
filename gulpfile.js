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
    order = require('gulp-order'),
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
    return gulp.src(['src/js/**/*.js'])
        .pipe(uglify())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('build/js'))
        .pipe(reload({stream:true}));
});

// ===========================================================================================
// Task Name: scripts-site
// Description: concatenate js files in js/site, uglify and copy to build folder.
//   If order of inclusion is necessary then use the order() plugin
// ===========================================================================================

gulp.task('scripts-site', function(){
    gulp.src('./src/js/site/**/*.js')
        .pipe(order([
            'one.js',
            'two.js',
            'three.js'
        ]))
        .pipe(uglify())
        .pipe(concat('site.js'))
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./build/js/'))
        .pipe(reload({stream:true}));
});

// ===========================================================================================
// Task Name: scripts-vendor
// Description: concatenate src/js/vendor js files to one file, uglify and copy to build folder
// ===========================================================================================

gulp.task('scripts-vendor', function(){
    gulp.src('./src/js/vendor/**/*.js')
        .pipe(order([
            'jquery*'
        ]))
        .pipe(uglify())
        .pipe(concat('vendor.js'))
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./build/js/'))
        .pipe(reload({stream:true}));
});

// ===========================================================================================
// Task Name: sass
// Description: compiles sass, writes to src dir and triggers browser sync
// ===========================================================================================

gulp.task('sass', function(){
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/css'))
        .pipe(reload({stream:true}));
});

// ===========================================================================================
// Task Name: html
// Description: Triggers browser sync on changes to .html files and copies html files to build folder
// ===========================================================================================

gulp.task('html', function(){
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('./build'))
        .pipe(reload({stream:true}));
});


// ===========================================================================================
// Task Name: images
// Description: Triggers browser sync on changes to .html files
// ===========================================================================================

gulp.task('images', function(){
    gulp.src('src/images/**/*')
        .pipe(gulp.dest('./build/images'));
});


// ===========================================================================================
// Task Name: browser-sync
// Description: Initializes browserSync gulp plugin
// ===========================================================================================

gulp.task('browser-sync', function(){
    browserSync.init({
       server: {
           baseDir: 'build'
       }
   });
});

// ----------
// bower
// ----------

gulp.task('bower', function(){
   return bower()
       .pipe(gulp.dest(config.bowerDir));
});

gulp.task('bower-files', function(){
   return gulp.src('./bower.json')
       .pipe(mainBowerFiles())
       //.pipe(uglify())
       .pipe(gulp.dest('./build/js/libs/'))
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
    gulp.watch('src/js/**/*.js', ['scripts-site', 'scripts-vendor']);
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/images/**/*.*', ['images']);
});

// ===========================================================================================
// Task Name: default
// ===========================================================================================

gulp.task('default', ['html' , 'images' , 'scripts-site', 'scripts-vendor', 'sass', 'browser-sync', 'watch']);


/*

- First run 'gulp bower-install-plugins' which will install bower dependencies

- Next run 'gulp watch'





 */
