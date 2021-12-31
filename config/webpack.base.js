const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const paths = require('./paths');

// 设置 常量
const jsRegex = /\.(js|jsx|ts|tsx)?$/;
const jsModuleRegex = /node_modules/;
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
const imageRegex = /\.(gif|png|jpe?g|svg|webp)$/i;
const imageInlineSizeLimit = 8 * 1024;
const resourceRegex = /\.(eot|svg|ttf|woff|woff2?)$/;

const { NODE_ENV = 'dev' } = process.env;
// 是否生产环境
const isEnvProduction = NODE_ENV === 'prod';
// const isEnvDevelopment = NODE_ENV === 'dev' || NODE_ENV === 'test';

module.exports = {
  // development 开发模式，打包更加快速，省了代码优化步骤
  // production 生产模式，打包比较慢，会开启 tree-shaking 和 压缩代码
  // none 不使用任何默认优化选项
  mode: 'production',
  // 入口文件
  entry: paths.appSrc,
  // context: process.cwd(),
  output: {
    // 输出的位置 绝对路径
    path: paths.appBuild,
    // 此输出目录对应的公开 URL
    publicPath: '/',
    // 每个输出 bundle 的名称
    filename: 'scripts/[name][contenthash].bundle.js',
    // 非初始（non-initial）chunk 文件的名称
    chunkFilename: 'chunk/[chunkhash].js',
    // 与 output.filename 相同，不过应用于Asset Modules
    // assetModuleFilename: `${paths.buildImagePath}/[hash][ext][query]`,
  },
  cache: {
    // 使用持久化缓存 memory:使用内容缓存 filesystem：使用文件缓存
    type: 'memory',
  },
  devtool: false,
  module: {
    rules: [
      {
        test: jsRegex,
        exclude: jsModuleRegex,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: false,
            },
          },
        ],
      },
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: [
          isEnvProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
              importLoaders: 1,
            },
          }, 'postcss-loader'],
      },
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: [
          isEnvProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              // 查询参数 importLoaders，用于配置「css-loader 作用于 @import 的资源之前」有多少个 loader
              importLoaders: 1,
            },
          }, 'postcss-loader', 'sass-loader'],
      },
      {
        test: imageRegex,
        type: 'asset',
        generator: {
          // 输出文件位置以及文件名
          // [ext] 自带 "." 这个与 url-loader 配置不同
          filename: `${paths.buildImagePath}/[name][hash:8][ext]`,
        },
        parser: {
          dataUrlCondition: {
            // 小于8kb转换为base64
            maxSize: imageInlineSizeLimit,
          },
        },
      },
      {
        test: resourceRegex,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    // 是否是生产环境
    minimize: isEnvProduction,
    minimizer: [
      new CssMinimizerWebpackPlugin({
        // 开启多进程并发执行，默认 os.cpus().length - 1
        parallel: true,
      }),
      new TerserWebpackPlugin({
        // 开启多进程并发执行
        parallel: true,
      }),
    ],
  },
  resolve: {
    // 使用第三模块 第一反应去 根目录下的 node_modules 寻找
    modules: [paths.appNodeModules],
    // 在 import 的时候不加文件扩展名,会依次遍历extensions 添加扩展名进行匹配
    // extensions: paths.moduleFileExtensions,
    mainFields: ['browser', 'jsnext:main', 'main'],
    // 创建别名， 在import 或 require 的别名，来确保模块引入变得更简单
    alias: {
      moment$: 'moment/moment.js',
      '@src': paths.appSrc,
      '@public': paths.appPublic,
      '@assets': paths.appAssets,
    },
  },
  // server配置
  devServer: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.appHtml,
    }),
    new MiniCssExtractPlugin({
      // 输出的 CSS 文件的名称
      filename: `${paths.buildCssPath}/[name]${isEnvProduction ? '[fullhash:8]' : ''}.css`,
      // 非入口的 css chunk 文件名称
      chunkFilename: `${paths.buildCssPath}/[id]${isEnvProduction ? '[fullhash:8]' : ''}.css`,
      // 忽略有关顺序冲突的警告
      ignoreOrder: true,
    }),
  ],
};
