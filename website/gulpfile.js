var gulp = require('gulp');
var browserSync = require('browser-sync');
var handlebars = require('gulp-static-handlebars');
var rename = require('gulp-rename');
var sass = require('gulp-sass');


gulp.task('default', function() {
	console.log("Congratulations, Gulp is successfully working.");
});

gulp.task('watch', function() {
	gulp.watch('src/**/*.*', function(){

		browserSync.reload();
	})
});	

gulp.task('bs',['watch'], function(){
	browserSync({
		server: {
			baseDir: 'src'
		}
	})
});