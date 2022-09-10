const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: { removeAll: true },
                        },
                    ],
                },
            }),
            new TerserPlugin({
                // Default чуть меньше размером но чуть дольше
                // terserOptions: {
                //     compress: true,
                // },
                // esBuild
                minify: TerserPlugin.esbuildMinify,
                terserOptions: {
                    target: 'es2017',
                    loader: 'tsx',
                    legalComments: 'none',
                    minifyWhitespace: true,
                    minifyIdentifiers: true,
                    minifySyntax: true,
                },
            }),
            // Оригинальный на пару килобайт больше но на 2 сек быстрее + стили компресует
            // new ESBuildMinifyPlugin({
            //     target: 'es2017',
            //     loader: 'tsx',
            //     minifyWhitespace: true,
            //     minifyIdentifiers: true,
            //     minifySyntax: true,
            //     css: true,
            // }),
        ],
    },
});
