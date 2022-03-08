module.exports = async context => {
    context.isProduction = true;

    const fuse = context.getConfig();

    fuse.bundle('app').instructions(" > app.ts");

    await fuse.run();
};
