const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    cache: true,
    watch: true,
    devtool: 'source-map',
});
