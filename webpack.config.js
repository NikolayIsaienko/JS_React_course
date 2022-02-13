'use strict';

let path = require('path');

module.exports = {
  mode: 'production',
      entry: './JS_step_20(Food)/js/script.js',
      output: {
          filename: 'bundle.js',
          path: __dirname + '/JS_step_20(Food)/js'
    },
    watch: true,

  devtool: "source-map",

  module: {
      rules: [{
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
              loader: 'babel-loader',
              options: {
                  presets: [
                      ['@babel/preset-env', {
                          debug: true,
                          corejs: 3,
                          useBuiltIns: "usage"
                      }]
                  ]
              }
          }
      }]
  }
};