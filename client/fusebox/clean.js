const { src } = require("fuse-box/sparky");

module.exports = async context => {
    await src('./')
        .clean('../public/')
        .exec();
};
