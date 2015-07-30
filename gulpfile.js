
var gulp = require('gulp'),
	browserSync = require('browser-sync').create()

var baseDir = './',
	watchHtmlPath = './*.html',
	watchJsPath = './js/*.js'

gulp.task('serve', function(){
	browserSync.init({
		server: {
			baseDir: baseDir
		}
	})

	return gulp.watch([watchHtmlPath, watchJsPath]).on('change', browserSync.reload)
})

gulp.task('default', ['serve'])