// const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
// const { ESBuildMinifyPlugin } = require('esbuild-loader')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const { ProvidePlugin } = require('webpack');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');

const path = require('path');
const fs = require('fs');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getLocalIdent = require('./build-scripts/getLocalIdent');
const { PUBLIC_PATH, ROOT_DIR } = require('./build-scripts/constants');

const sprites = fs.readFileSync(path.resolve(ROOT_DIR, './dist/sprite.svg'), 'utf8');

module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'static/app.js',
        path: PUBLIC_PATH,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'esbuild-loader',
                options: {
                    loader: 'tsx',
                    target: 'es2017',
                },
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]',
                                getLocalIdent: getLocalIdent,
                            },
                            sourceMap: true,
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            postcssOptions: {
                                plugins: [
                                    ['autoprefixer'],
                                ],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    type: 'css/mini-extract',
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
            minify: false,
            template: './src/template.ejs',
            inject: false,
            templateParameters: {
                sprites,
                isProduction: process.env.NODE_ENV === 'production',
            },
        }),
        new MiniCssExtractPlugin({
            filename: 'static/[name].css',

        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '*'],
        alias: {
            '@facades': path.resolve(__dirname, './src/facades'),
            '@store': path.resolve(__dirname, './src/store'),
            '@core': path.resolve(__dirname, './src/core'),
            '@api': path.resolve(__dirname, './src/api'),
            '@components': path.resolve(__dirname, './src/components'),
            '@hoc': path.resolve(__dirname, './src/components/HOC'),
            '@common': path.resolve(__dirname, './src/modules/common'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@modules': path.resolve(__dirname, './src/modules'),
            '@dream': path.resolve(__dirname, './src/modules/dream'),
        },
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
};
