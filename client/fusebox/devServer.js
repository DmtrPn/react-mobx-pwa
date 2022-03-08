module.exports = async context => {
    const fuse = context.getConfig();

    const app = fuse.bundle('app').instructions(" > app.ts");

    app.watch();
    // app.hmr();
    //
    // fuse.dev({
    //     port: 4444,
    //     fallback: 'index.html',
    //     proxy: {
    //         '/api': {
    //             target: "http://0.0.0.0:3000",
    //             changeOrigin: true,
    //         },
    //     },
    // });

    await fuse.run();
};
