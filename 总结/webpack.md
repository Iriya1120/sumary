### CommonJS 与 ES6 Module的区别 ###
- CommonJS导出的是变量的拷贝， ES6 Module导出的是变量的绑定，除了expert default
- CommonJS是单个值导出， ES6 Module可以导出多个
- CommonJs是动态语法可以写在判断里，ES6 Module静态语法只能写在顶层


### 常见的Loader以及它们的作用 ###
1. file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件
2. url-loader：和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式把文件内容注入到代码中去
3. source-map-loader：加载额外的 Source Map 文件，以方便断点调试
4. image-loader：加载并且压缩图片文件
5. babel-loader：把 ES6 转换成 ES5
6. css-loader：加载 CSS，支持模块化、压缩、文件导入等特性
7. style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS。
8. eslint-loader：通过 ESLint 检查 JavaScript 代码


### 有哪些常见的Plugin？他们是解决什么问题的? ###
1. define-plugin：定义环境变量
2. commons-chunk-plugin：提取公共代码
3. uglifyjs-webpack-plugin：通过UglifyES压缩ES6代码


### Loader和Plugin的不同 ###
- 不同的作用： Loader直译为"加载器"，webpack只能解析js文件，Loader的作用是让webpack拥有了加载和解析非JavaScript文件的能力。Plugin直译为"插件"，Plugin可以扩展webpack的功能。
- 不同的用法： Loader在module.rules中配置，也就是说他作为模块的解析规则而存在。Plugin在plugins中单独配置。


### webpack的构建流程是什么 ###
1. 初始化参数
2. 开始编译
3. 确定入口文件
4. 编译模块
5. 输出资源


### 如何利用webpack来优化前端性能 ###
1. 压缩代码
2. 利用CDN加速
3. 删除死代码
4. 提取公共代码


### 怎么提高webpack的构建速度 ###
1. 多入口情况下，使用CommonsChunkPlugin来提取公共代码
2. 通过externals配置来提取常用库
3. 利用DllPlugin和DllReferencePlugin预编译资源模块 通过DllPlugin来对那些我们引用但 是绝对不会修改的npm包来进行预编译，再通过DllReferencePlugin将预编译的模块加载进来。
4. 使用Happypack 实现多线程加速编译
5. 使用webpack-uglify-parallel来提升uglifyPlugin的压缩速度
6. 使用Tree-shaking和Scope Hoisting来剔除多余代码