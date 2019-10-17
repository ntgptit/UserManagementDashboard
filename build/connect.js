var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function (done) {
	connect.server({
		root: 'dist/',
		livereload: true,
		port: 8080,
		fallback: 'dist/intel_analytics_dashboard.html'
	});
	done();
})