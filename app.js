const path = require('path');

global.appRoot = path.resolve(__dirname);

// eslint-disable-next-line no-global-assign
require = require('esm')(module);
module.exports = require('./src/server.js');
