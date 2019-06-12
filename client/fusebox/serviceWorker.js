module.exports = async context => {
    const fuse = context.getSWConfig();

    fuse.bundle('sw').instructions(" > sw.ts");

    await fuse.run();
};
