var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var sass = require('gulp-sass')
var sequence = require('run-sequence');

gulp.task('test', function(){
	console.log('Congratulations! Gulp is working correctly!');
});

//does nunjucks
gulp.task('nunjucks', function() {

	console.log('running nunjucks');

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
	.pipe(gulp.dest('dist'));


});

//does sass
gulp.task('styles', function(){

	console.log('runnin gulp-sass')

	gulp.src('app/templates/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist'));
});

//watch task
gulp.task('default', function(done) {

	console.log('running default')

	sequence('nunjucks', 'styles', done);
	
});

