var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('test', function(){
	console.log('Congratulations! Gulp is working correctly!');
});


gulp.task('nunjucks', function() {

	console.log('starting the process');

	return gulp.src('app/pages/**/*.html')
	// render template with nunjucks
	.pipe(nunjucksRender({
		path: ['app/templates'],
		data: { css_path: 'app/templates/style.css'}
	}))

	// .on('error', function (err) {
	// 	console.log('error');
	// })

	
	// output files in gulpTest
	.pipe(gulp.dest('app'));


});




