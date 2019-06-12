module.exports = async context => {
    context.isProduction = true;

    const fuse = context.getConfig();

    fuse.bundle('app').instructions(" > App.tsx");

    await fuse.run();
};
