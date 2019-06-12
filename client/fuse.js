const { task } = require("fuse-box/sparky");

require('./fusebox/context');
const clean = require('./fusebox/clean');
const devServer = require('./fusebox/devServer');
const prodBuild = require('./fusebox/prodBuild');
const serviceWorker = require('./fusebox/serviceWorker');

task('clean', clean);
task('prodBuild', prodBuild);
task('devServer', devServer);
task('sw', serviceWorker);

task('default', [ 'clean', 'sw', 'prodBuild' ]);

task('dev', [ 'clean', 'sw', 'devServer' ]);
