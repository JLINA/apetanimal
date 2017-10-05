var gulp=require('gulp');
var uglify=require('gulp-uglify');
var minifycss=require('gulp-minify-css');
gulp.task('minify',function(){
	gulp.src('js/adopt.js')
	    .pipe(uglify())
	    .pipe(gulp.dest('dist/js'))
})

gulp.task('minifycss',function(){
	gulp.src(['css/*.css'])
	    .pipe(minifycss())
	    .pipe(gulp.dest('dist/css'))
})
gulp.task('default',['minify','minifycss']);