const gulp = require('gulp');
const eslint = require('gulp-eslint');

// const { PUBLIC_PATH } = require('../constants');

function runTslint() {
    // var program = tslint.Linter.createProgram('./tsconfig.json');

    return gulp.src(['src/**/*.tsx', 'src/**/*.ts', '!src/**/*.scss.d.ts'], { base: '.' })
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

module.exports = { runTslint };
