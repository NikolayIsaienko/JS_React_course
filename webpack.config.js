'use strict';

let path = require('path');

module.exports = {
    mode: 'development',
    entry: './JS_step_20(Food)/js/script.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/JS_step_20(Food)/js'
    },
    watch: true,

    devtool: "source-map",

    module: {}
};