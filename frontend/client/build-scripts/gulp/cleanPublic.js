const gulp = require('gulp');
var clean = require('gulp-clean');

const { PUBLIC_PATH } = require('../constants');

function cleanPublic() {
    return gulp.src(`${PUBLIC_PATH}/*`, { read: false })
        .pipe(clean({ force: true }));
}

module.exports = { cleanPublic };
