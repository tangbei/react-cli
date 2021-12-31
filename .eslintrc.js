/*
'off'或者0    //关闭规则关闭
'warn'或者1    //在打开的规则作为警告（不影响退出代码）
'error'或者2    //把规则作为一个错误（退出代码触发时为1）
*/
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // 包含所欲ES6+ 规范
    'airbnb-base',
    // react jsx 规范支持
    // 'plugin:react/recommended',
    // 如果是react17，需要添加这个
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // 箭头函数不强制return
    'consistent-return': 0,
    semi: 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 防止react被错误地标记为未使用
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // 在数组或迭代器中验证JSX具有key属性
    'react/jsx-key': 2,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    // 'import/no-unresolved': 2,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    // 箭头函数
    'arrow-body-style': [2, 'as-needed'],
    // 强制类方法使用 this
    'class-methods-use-this': 0,
    // 缩进Indent with 4 spaces
    // SwitchCase冲突 闪烁问题
    indent: ['error', 2, { SwitchCase: 1 }],
    // Indent JSX with 4 spaces
    'react/jsx-indent': ['error', 2],
    // Indent props with 4 spaces
    'react/jsx-indent-props': ['error', 2],
    'no-console': 0, // 不禁用console
    'react/jsx-props-no-spreading': 0,
    'import/no-unresolved': [
      2,
      {
        // @ 是设置的路径别名
        // ignore: ['^@/'],
      },
    ],
  },
  // 如果在webpack.config.js中配置了alias 并且在import时使用了别名需要安装eslint-import-resolver-webpack
  settings: {
    'import/resolve': {
      webpack: {
        config: 'config/webpack.dev.js',
      },
    },
  },
};
