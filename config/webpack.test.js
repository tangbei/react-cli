const { merge } = require('webpack-merge');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const baseWebpack = require('./webpack.base');
const paths = require('./paths');

const devWebpack = {
  mode: 'production',
  devtool: 'inline-source-map',
  target: 'web',
  plugins: [
    new EslintWebpackPlugin({
      // 将启用ESLint 自动修复功能，默认false。请注意：此选项将更改源文件
      fix: true,
      // 指定应检查的扩展
      extensions: ['jsx', 'js', 'tsx', 'ts'],
      // 指示文件根的字符串
      context: paths.appSrc,
      // 指定要排除的文件和/或目录。必须相对于options.context
      exclude: paths.appNodeModules,
    }),
  ],
  // 只在发生错误或有新的编译时输出
  stats: 'errors-only',
};

module.exports = merge(baseWebpack, devWebpack);
