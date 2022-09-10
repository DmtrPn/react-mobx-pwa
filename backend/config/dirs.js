const path = require('path');
const rootDir = path.resolve(__dirname, '../');
const servicesDir = `${rootDir}/dist/modules/**/`;

module.exports = {
    rootDir,
    servicesDir,
}

