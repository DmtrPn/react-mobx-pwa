const gulp = require('gulp');

const { ASSETS_PATH, STATIC_PATH } = require('../constants');

function serveExternalStyles() {
    return gulp.src(`${ASSETS_PATH}/*.css`).pipe(gulp.dest(STATIC_PATH));
}

module.exports = { serveExternalStyles };
