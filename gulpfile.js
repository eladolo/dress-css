import 'dotenv/config';
import gulp from 'gulp';
import * as nsass from 'sass';
import gsass from 'gulp-sass';
import concat from 'gulp-concat';
import cleanCss from 'gulp-clean-css';
const sass = gsass(nsass);

const buildscss = async () => {
    gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
};
const minifycss = async () => {
    gulp.src('dist/css/base/dress.css')
    .pipe(concat(`dress.${process.env.DRESS_VERSION}.min.css`))
    .pipe(cleanCss())
    .pipe(gulp.dest('dist/css/min'));
};
const watchChanges = async () => gulp.watch('./src/sass/**/*.scss', gulp.series(['sass:build', 'sass:min']));

gulp.task('sass:build', buildscss);
gulp.task('sass:min', minifycss);
gulp.task('sass:watch', watchChanges);
gulp.task('default', gulp.series(['sass:watch']));