const { FuseBox, WebIndexPlugin, SassPlugin, QuantumPlugin, CSSModules, CSSPlugin } = require("fuse-box");

const isProduction = process.env.NODE_ENV === 'production';

const fuse = FuseBox.init({
    homeDir: "src/",
    target: "browser@es6",
    output: "public/$name.js",
    useTypescriptCompiler: true,
    allowSyntheticDefaultImports: true,
    cache: false,
    alias: {
        "@store/*": "~/store/",
        "@api/*": "~/api/",
        "@modules/*": "~/modules/",
        "@common/*": "~/modules/common/"
    },
    plugins: [
        WebIndexPlugin({
            template : "src/index.html"
        }),
        [
            SassPlugin(),
            CSSModules({
                useDefault: false
            }),
            CSSPlugin()
        ],
        isProduction && QuantumPlugin({
            css: {
                path: "styles.min.css",
            },
        })
    ]
});

const app = fuse.bundle('app')
.instructions(" > App.tsx");

// Launch dev http server.
if (!isProduction) {
    app.watch();
    app.hmr();

    fuse.dev({
        port: 4444
    });
}

fuse.run();
