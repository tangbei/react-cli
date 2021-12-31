const devWebpackConfig = require('../config/webpack.dev');
const testWebpackConfig = require('../config/webpack.test');
const prodWebpackConfig = require('../config/webpack.prod');
const analyzeWebpackConfig = require('../config/webpack.analyze');

const webpackMap = {
  dev: devWebpackConfig,
  test: testWebpackConfig,
  prod: prodWebpackConfig,
  analyze: analyzeWebpackConfig,
};

module.exports = {
  // 本地代码推推送到指定服务器
  deployUrl: '127.0.0.0:3004',
  proxyUrlMap: {
    // 代理接口
    '/api': 'location:3000',
    '/api2': 'location:4000',
  },
  // 端口号
  port: 9000,
  // 主机号
  host: 'localhost',
  webpackMap,
};
