var gulp = require('gulp');
var browserSync = require('browser-sync');
var handlebars = require('gulp-static-handlebars');
var rename = require('gulp-rename');
var sass = require('gulp-sass');


gulp.task('default', function() {
	console.log("Congratulations, Gulp is successfully working.");
});

gulp.task('build',['hb', 'sass']);

gulp.task('watch', function() {
	gulp.watch('src/**/*.*', function(){

		browserSync.reload();
		gulp.run('build');
	})
});	

gulp.task('bs',['watch'], function(){
	browserSync({
		server: {
			baseDir: 'dist'
		}
	})
});

gulp.task('hb', function(){
	gulp.src('./src/index.hbs')
	    .pipe(handlebars({contents:"whatever"}, {
	        partials: gulp.src('./src/components/**/*.hbs')
	    }))
	    .pipe(rename('index.html'))
	    .pipe(gulp.dest('./dist'));
});
	
gulp.task('sass', function() {
	gulp.src('./src/main.scss')
	.pipe(sass())
	.pipe(gulp.dest('./dist'))
});