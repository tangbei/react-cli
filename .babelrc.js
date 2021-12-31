module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // useBuiltIns: "usage"| "entry"| false，默认为 false,
        // usage 会根据配置的浏览器兼容，和只对你用到的 API 来进行 polyfill，实现按需添加补丁
        useBuiltIns: 'entry',
        corejs: '3.20.0',
        // 对要支持的最低环境版本的对象 做兼容
        targets: {
          chrome: '58',
          ie: '11',
        },
      },
    ],
    [
      '@babel/preset-react',
      {
        development: process.env.NODE_ENV === 'development',
      }
    ]
  ],
  plugins: [
    // 把类和对象的装饰器编译成 ES5 代码
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    // 转换静态类属性以及使用属性初始值化语法声明的属性
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
    ["@babel/plugin-proposal-private-methods", { "loose": true }],
    // 支持动态加载 import,@babel/preset-env 不支持动态 import 语法转译。
    '@babel/plugin-syntax-dynamic-import',
  ],
};