const gulp = require('gulp');

const { ASSETS_PATH, IMAGES_PATH } = require('../constants');

function serveImages() {
    return gulp.src(`${ASSETS_PATH}/*.*(png|ico|gif|jpg|svg`).pipe(gulp.dest(IMAGES_PATH));
}

module.exports = { serveImages };
