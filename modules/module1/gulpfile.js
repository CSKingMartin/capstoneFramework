var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('default', function() {
	console.log("Congratulations, Gulp is successfully working.");
});

gulp.task('watch', function() {
	gulp.watch('src/**/*.*', function(){
		browserSync.reload();
	})
});	

gulp.task('browserSync',['watch'], function(){
	browserSync({
		server: {
			baseDir: 'src'
		}
	})
});