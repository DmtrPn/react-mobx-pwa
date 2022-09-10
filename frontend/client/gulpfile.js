const { series, parallel, watch, task } = require('gulp');

const { cleanPublic } = require('./build-scripts/gulp/cleanPublic');
const { buildBundle } = require('./build-scripts/gulp/buildBundle');
const { buildDevBundle } = require('./build-scripts/gulp/buildDevBundle');
const { buildSvgSprite } = require('./build-scripts/gulp/buildSvgSprite');
const { serveFonts } = require('./build-scripts/gulp/serveFonts');
const { serveExternalStyles } = require('./build-scripts/gulp/serveExternalStlyes');
const { serveImages } = require('./build-scripts/gulp/serveImages');
const { runTslint } = require('./build-scripts/gulp/runTslint');

task('clean', cleanPublic);
task('sprite', buildSvgSprite);
task('assets', parallel(serveImages, serveExternalStyles, serveFonts));
task('bundle', buildBundle);
task('devBundle', buildDevBundle);
task('tslint', runTslint);

task('default', series(
    'clean',
    parallel('tslint', 'sprite', 'assets'),
    'bundle',
));

task('watch', function w() {
    watch([
        'src/**/*.ts',
        'src/**/*.tsx',
        'src/**/*.js',
        'src/**/*.scss',
    ], series('bundle'));
});

task('dev', series(
    'clean',
    parallel('sprite', 'assets'),
    'devBundle',
));
