const gulp = require('gulp');
const webpack = require('webpack-stream');

const { PUBLIC_PATH, ROOT_DIR } = require('../constants');

function buildDevBundle() {
    return gulp.src(`${ROOT_DIR}/src/app.ts`)
        .pipe(webpack( require(`${ROOT_DIR}/webpack.dev.config.js`) ))
        .pipe(gulp.dest(PUBLIC_PATH));
}

module.exports = { buildDevBundle };
