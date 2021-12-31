const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const prodWebpack = require('./webpack.prod');

const analyzeWebpack = {
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
};

module.exports = merge(prodWebpack, analyzeWebpack);
