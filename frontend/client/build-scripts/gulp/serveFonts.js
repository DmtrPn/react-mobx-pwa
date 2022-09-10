const gulp = require('gulp');

const { ASSETS_PATH, FONTS_PATH } = require('../constants');

function serveFonts() {
    return gulp.src(`${ASSETS_PATH}/*.woff`).pipe(gulp.dest(FONTS_PATH));
}

module.exports = { serveFonts };
