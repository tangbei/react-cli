const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const baseWebpack = require('./webpack.base');

const prodWebpack = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new ProgressBarWebpackPlugin({
      format: `${chalk.green.bold('build[:bar]')}${chalk.green.bold(':percent')}(:elapsed seconds)`,
      clear: false,
      width: 60,
    }),
  ],
  // 标准输出
  stats: 'normal',
};

module.exports = merge(baseWebpack, prodWebpack);
