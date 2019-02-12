module.exports = function() {

$.gp.sass.compiler = require('node-sass');
$.gulp.task('sass', function () {
	return $.gulp.src('src/static/sass/main.sass')
	.pipe($.gp.sourcemaps.init())
	.pipe($.gp.sass({
		'include css': true
	}))
	.pipe($.gp.autoprefixer({
        browsers: ['last 10 versions'],
        cascade: false
    }))
    .pipe($.gp.sass({outputStyle: 'compressed'}).on('error', $.gp.sass.logError))
	.pipe($.gp.csso())
	.pipe($.gp.sourcemaps.write())
	.pipe($.gulp.dest('build/static/css'));
});
}