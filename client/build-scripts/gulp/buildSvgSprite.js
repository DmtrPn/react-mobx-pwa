const SVGSpriter = require('svg-sprite');
const mkdirp = require('mkdirp');
const path = require('path');
const fs = require('fs');
const glob = require('glob');

async function buildSvgSprite() {
    const spriter = new SVGSpriter({
        dest: '.',
        mode: {
            symbol: {
                dest: '.',
                sprite: 'dist/sprite.svg',
                // sprite: '../../public/static/sprite.svg'
            },
        },
        shape: {
            id: {
                generator: (name) => {
                    let parsedPath = path.parse(name);
                    return parsedPath.name;
                },
            },
        },
    });

    const cwd = path.resolve('src');

    return new Promise((resolve, reject_) => {
        glob.glob('**/*.svg', { cwd: cwd }, function (err, files) {
            files.forEach(function (file) {
                const filePath = path.join(cwd, file);
                spriter.add(filePath, null, fs.readFileSync(filePath, { encoding: 'utf-8' }));
            });

            // Compile the sprite
            spriter.compile(function (error, result) {
                for (var mode in result) {
                    for (var resource in result[mode]) {
                        mkdirp.sync(path.dirname(result[mode][resource].path));
                        fs.writeFileSync(result[mode][resource].path, result[mode][resource].contents);
                    }
                }
                resolve();
            });


        });
    });
}

module.exports = { buildSvgSprite };
