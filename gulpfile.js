var gulp = require('gulp'),
    gulpFilter = require('gulp-filter'),
    concat = require('gulp-concat'),
    bower = require('gulp-bower'),
    mainBowerFiles = require('gulp-main-bower-files'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    order = require('gulp-order'),
    reload = browserSync.reload;

// custom config objects

var config = {
    bowerDir: './bower_components',
    buildDir: './build/',
    sourceDir: '/src/'
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
});

// ===========================================================================================
// Task Name: scripts-site
// Description: concatenate vendor js files in js/vendor to one file, uglify and copy to build folder
// ===========================================================================================

gulp.task('scripts-vendor', function(){
    gulp.src('./src/js/vendor/**/*.js')
        .pipe(order([
            'jquery*.js'
        ]))
        .pipe(uglify())
        .pipe(concat('vendor.js'))
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./build/js/'))
});

// ===========================================================================================
// Task Name: sass
// Description: compiles sass, writes to src dir and triggers browser sync
// URL: https://www.npmjs.com/package/gulp-sass
// ===========================================================================================

gulp.task('sass', function(){
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/css'))
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
// URL: https://www.npmjs.com/package/browser-sync
// ===========================================================================================

gulp.task('browser-sync', function(){
    browserSync.init({
       server: {
           baseDir: 'src'
       }
   })
});

// ===========================================================================================
// Task Name: imagemin
// Description: Optimize images
// URL: https://www.npmjs.com/package/gulp-imagemin
// ===========================================================================================
gulp.task('imagemin', function() {
    return gulp.src('src/images/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('build/images'));
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












// -
// --
// ---
// ----
// -----
// Tasks that call other tasks
// -----
// ----
// ---
// --
// -

// ===========================================================================================
// Task Name: build
// ===========================================================================================

gulp.task('build', ['imagemin', 'scripts-site', 'scripts-vendor']);



// ===========================================================================================
// Task Name: default
// ===========================================================================================

gulp.task('default', ['scripts', 'sass', 'browser-sync', 'watch']);


/*

- First run 'gulp bower-install-plugins' which will install bower dependencies

- Next run 'gulp watch'





 */

