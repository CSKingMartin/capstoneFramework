var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var sass = require('gulp-sass')
var sequence = require('run-sequence');
var browserSync = require('browser-sync');

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
	// output files in gulpTest
	.pipe(gulp.dest('dist'))
	.pipe(browserSync.reload({
		stream: true
	}));


});

//does sass
gulp.task('styles', function(){

	console.log('runnin gulp-sass')

	return gulp.src('app/templates/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

//default task
gulp.task('default', function(done) {

	console.log('running default')

	sequence('browserSync','nunjucks', 'styles', done);
	
});

//watch task
gulp.task('watch', ['default'], function(){
	gulp.watch('app/templates/sass/**/*.scss',['default']);
	gulp.watch('app/pages/**/*.html', ['default'])
});

//browsersync
gulp.task('browserSync', function()	{
	browserSync({
		server: {
			baseDir: 'dist'
		}
	})
});