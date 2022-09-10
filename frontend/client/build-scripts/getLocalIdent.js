const path = require('path');
const lodash = require('lodash');

const LOCAL_SUBTRAHEND = 2;
const COMPONENT_SUBTRAHEND = 1;

module.exports = function getLocalIdent(context, localIdentName, localName, options_) {

    const filePath = context.resourcePath;
    const pathParts = filePath.split(path.sep);
    const lastIndex = pathParts.length - 1;

    let className = '';

    if (/_.scss$/i.test(pathParts[lastIndex])) {
        className = localName;
    } else {
        const local = pathParts[lastIndex - LOCAL_SUBTRAHEND];
        const component = pathParts[lastIndex - COMPONENT_SUBTRAHEND];

        const parts = [
            lodash.kebabCase(local),
            lodash.kebabCase(component),
            localName,
        ];

        className = parts.join('__');
    }

    return className;
};