const path = require('path');
const fs = require('fs');

// 获取当前工作目录
const appDistory = fs.realpathSync(process.cwd());
// 从相对路径中解析绝对路径
const resolveApp = (resolvePath) => path.resolve(appDistory, resolvePath);
// 默认的模块扩展名
const moduleFileExtensions = ['jsx', 'js', 'tsx', 'ts', 'json'];
const resolveModule = (resolveFn, resolvePath) => {
  // 遍历查找存在满足条件路径的文件后缀
  const extension = moduleFileExtensions.find(
    // fs检查当前路径的文件是否存在,存在则返回true
    (extensionItem) => fs.existsSync(resolveFn(`${resolvePath}.${extensionItem}`)),
  );
  if (extension) {
    return resolveFn(`${resolvePath}.${extension}`);
  }
  // 如果没有，就默认是js文件
  return resolveFn(`${resolvePath}.js`);
};

module.exports = {
  // 打包路径
  appRoot: resolveApp('/'),
  appBuild: resolveApp('build'),
  // 静态文件路径
  appPublic: resolveApp('public'),
  // html模版路径
  appHtml: resolveApp('public/index.html'),
  // 打包入口文件
  appIndexJs: resolveModule(resolveApp, 'src/index'),
  // node_modules路径
  appNodeModules: resolveApp('node_modules'),
  // 主文件入口
  appSrc: resolveApp('src'),
  appAssets: resolveApp('src/assets'),
  buildCssPath: 'static/css',
  buildImagePath: 'static/images',
  moduleFileExtensions,
};
