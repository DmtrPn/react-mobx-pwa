const gulp = require('gulp');
const webpack = require('webpack-stream');

const { PUBLIC_PATH, ROOT_DIR } = require('../constants');

function buildBundle() {
    return gulp.src(`${ROOT_DIR}/src/app.ts`)
        .pipe(webpack( require(`${ROOT_DIR}/webpack.prod.config.js`) ))
        .pipe(gulp.dest(PUBLIC_PATH));
}

module.exports = { buildBundle };
