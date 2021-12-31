# babel
Babel 应该有知道吧 是一个 JavaScript 编译器 官方的定义，它的作用的是让低版本浏览器使用 ES 上新的语法和新的数据类型, 将高版本的 ES 语法和 API 转换成现有浏览器可以运行的代码, 起转译作用。
# @babel/core
babel-core 的作用是把 js 代码分析成 ast ，方便各个插件分析语法进行相应的处理
它是 Babel 核心库，提供了很多转译源文件的 API，它需要插件才能转译本身不会转译
# @babel/preset-env
@babel/preset-env 就是利用你指定的任何目标环境,然后检查它们对应的插件,并传给 Babel 进行转译.
是语法转译器也可以叫预设，但是它只转换新的 ES 语法。而不转换新的 ES API，比如 Iterator, Generator, Set, Maps, Proxy, Reflect,Symbol,Promise，而对与这些新的 API 可以通过 babel-profill 转译，让浏览器实现 新 API 的功能 但是 babek-profill 已经不建议使用了建议使用 core-js
# @babel/preset-react
对react语法的转换
# babel-loader
webpack 通过 babel-loader 使用 Babel 。
# chalk
chalk是一个颜色的插件
# clean-webpack-plugin
打包之前清除之前的文件
# css-loader
js中引用css时，需要使用
# html-webpack-plugin
HtmlWebpackPlugin 简化了 HTML 文件的创建，以便为你的 webpack 包提供服务。这对于那些文件名中包含哈希值，并且哈希值会随着每次编译而改变的 webpack 包特别有用。你可以让该插件为你生成一个 HTML 文件，使用 lodash 模板提供模板，或者使用你自己的 loader。
# mini-css-extract-plugin
该插件将 CSS 提取到单独的文件中。分离样式，它为每个包含 CSS 的 JS 文件创建一个 CSS 文件，他为 style-loader 不能一起用，所以让它生产模式才生效。
# css-minimizer-webpack-plugin
这个插件使用 cssnano 优化和压缩 CSS。
就像 optimize-css-assets-webpack-plugin 一样，但在 source maps 和 assets 中使用查询字符串会更加准确，支持缓存和并发模式下运行。
# terser-webpack-plugin
该插件使用 terser 来压缩 JavaScript。
# image-webpack-loader
压缩图片也是平时打包优化的一重要环节
image-webpack-loader 可以帮助我们对图片进行压缩和优化,但是安装这这个遇到了一些坑，Cannot find module 'gifsicle,安装 gif 的时候报错了，image-minimizer-webpack-plugin 也一样安装不了gif插件，不过科学上网可以安装


# scripts脚本命令
在 Webpack 4 里面通过 webpack-dev-server起服务 在 Webpack 5 里面启动服务里通过 webpack serve

[# https://juejin.cn/post/7023242274876162084#heading-2]
