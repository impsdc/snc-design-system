// see video explanation: https://youtu.be/ubHwScDfRQA

const { src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass')); // This is different from the video since gulp-sass no longer includes a default compiler. Install sass as a dev dependency `npm i -D sass` and change this line from the video.
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const replace = require("gulp-replace");

//compile, prefix, and min scss
function compilescssForDev() {
  return src(['src/styles/app.scss']) // change to your source directory
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(minify())
    .pipe(dest('src/styles/scss')) // change to your final/public directory
};

function compilescssForProd() {
  return src(['src/styles/app.scss']) // change to your source directory
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(minify())
    .pipe(dest('dist/styles/css')) // change to your final/public directory
};

// replace @charset "UTF-8";
function removeCharset() {
  return src(['src/styles/scss/app.css'])
    .pipe(replace('@charset "UTF-8";', ''))
    .pipe(dest('dist/styles/css'));
};

//optimize and move images
function optimizeimg() {
  return src('src/images/*.{jpg,png}') // change to your source directory
    .pipe(imagemin([
      imagemin.mozjpeg({ quality: 80, progressive: true }),
      imagemin.optipng({ optimizationLevel: 2 }),
    ]))
    .pipe(dest('dist/images')) // change to your final/public directory
};
//watchtask
function watchTask(){
  watch('src/styles/scss/**/*.scss', compilescssForDev); // change to your source directory
}

exports.prod = series(
  compilescssForProd,
  removeCharset
);
// Default Gulp task 
exports.default = series(
  compilescssForDev,
  optimizeimg,
  watchTask
);