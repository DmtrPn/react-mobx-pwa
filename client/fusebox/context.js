const { context } = require('fuse-box/sparky');
const { FuseBox, WebIndexPlugin, SassPlugin, QuantumPlugin, CSSModulesPlugin, CSSPlugin } = require('fuse-box');

context(
    class  {
        getSWConfig() {
            return FuseBox.init({
                homeDir: 'src/serviceWorker',
                target: 'es6',
                output: '../public/$name.js',
                useTypescriptCompiler: true,
            });
        }
        getConfig() {
            return FuseBox.init({
                homeDir: 'src/',
                target: 'browser@es6',
                output: '../public/$name.js',
                useTypescriptCompiler: true,
                allowSyntheticDefaultImports: true,
                log: {
                    enabled: !this.isProduction,
                    showBundledFiles: false
                },
                cache: true,
                alias: {
                    '@store/*': '~/store/',
                    '@api/*': '~/api/',
                    '@modules/*': '~/modules/',
                    '@common/*': '~/modules/common/'
                },
                plugins: [
                    WebIndexPlugin({
                        template : 'src/index.html'
                    }),
                    [
                        SassPlugin(),
                        CSSModulesPlugin({
                            useDefault: false
                        }),
                        CSSPlugin()
                    ],
                    this.isProduction && QuantumPlugin({
                        css: {
                            path: 'styles.css',
                        },
                    })
                ]
            });
        }
    }
);
