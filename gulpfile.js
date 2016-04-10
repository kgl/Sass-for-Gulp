var gulp = require('gulp'),
    compass   = require('gulp-compass'),
	browserSync = require('browser-sync').create();
    
   // Static Server + watching scss/html files
	gulp.task('serve', ['compass'], function() {

    browserSync.init({
        server: "./"
    });
	 gulp.watch("./sass/*.scss", ['compass']);
   gulp.watch("*.html").on('change', browserSync.reload);
});


    gulp.task('compass',function(){
      gulp.src('./sass/*.scss')
        .pipe(compass({
            sourcemap: true,
            time: true,
      css: './css/',
      sass: './sass/',
      style: 'compact' //nested, expanded, compact, compressed
        }))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
});

    gulp.task('watch',function(){
    gulp.watch('./sass/*.scss',['compass']);
});

gulp.task('default',['serve']);