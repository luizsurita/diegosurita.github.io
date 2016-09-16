var gulp = require("gulp")
    sass = require("gulp-sass");

gulp.task("css", function () {
	return gulp.src('./scripts/sass/**/*.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('./assets/css'));
});

gulp.task("watch", function() {
	gulp.watch([
		'./app/sass/**/*.scss',
	], ["css"]);
});

gulp.task("default", ["css", 'watch']);
