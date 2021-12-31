const Webpack = require('webpack');
const WebpackDevserver = require('webpack-dev-server');
const appConfig = require('./config');
const logger = require('./logger');

const { port, host, webpackMap } = appConfig;
const { NODE_ENV = 'dev' } = process.env;

logger.point(`环境：${NODE_ENV}`);

const webpackConfig = webpackMap[NODE_ENV];
const complier = Webpack(webpackConfig);

const onListening = (devServer) => {
  if (!devServer) {
    throw new Error('webpack-dev-server is not defined');
  }
  logger.appStarted(port, host);
};

const devServerOptions = {
  ...webpackConfig.devServer,
  // 自动打开游览器
  // open: true,
  // 启用gzip压缩
  compress: true,
  // 指定端口
  port,
  host,
  client: {
    // 当出现编译错误或警告时，在浏览器中显示全屏覆盖
    overlay: true,
    // 在浏览器中以百分比显示编译进度
    progress: true,
  },
  onListening,
};

const server = new WebpackDevserver(devServerOptions, complier);

// const runServer = async () => {
//   console.log('Starting server...');
//   await server.start();
// };
// runServer();

server.startCallback((callback) => {
  if (callback && callback.message) {
    logger.error(callback.message);
  }
});
