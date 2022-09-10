const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../');
const PUBLIC_PATH = path.resolve(ROOT_DIR, '../public');
const ASSETS_PATH = path.resolve(ROOT_DIR, 'assets');
const STATIC_PATH = path.resolve(PUBLIC_PATH, 'static');
const FONTS_PATH = path.resolve(STATIC_PATH, 'fonts');
const IMAGES_PATH = path.resolve(STATIC_PATH, 'images');

module.exports = {
    ROOT_DIR,
    PUBLIC_PATH,
    ASSETS_PATH,
    STATIC_PATH,
    FONTS_PATH,
    IMAGES_PATH,
};
