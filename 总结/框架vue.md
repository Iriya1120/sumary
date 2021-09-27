### vue的组件通信 ###
- 父子组件
  1. prop
  2. $emit
  3. $parent + $children
  4. ref
- 兄弟组件
  1. prop + $emit
  2. eventBus
  3. vuex


### diff 算法 ###
- 理解：最小量更新算法。先将DOM生成虚拟DOM树
- 在采取diff算法比较新旧节点的时候，比较只会在同层级进行, 不会跨层级比较。


### Vue自定义指令 ###
1. 注册全局指令： Vue.directive(指令名,handle)
2. 注册局部指令： directives: {指令名1: handle1, 指令名2:handle2 ...}
- handle里面的钩子函数
  1. bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
  2. inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
  3. update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
  4. componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
  5. unbind：只调用一次，指令与元素解绑时调用。


### Vue中 v-if 与 v-show 的区别 ###
- v-if 与 v-show 是用于进行条件判断来实现视图展示的指令
- v-if 的原理是根据判断条件来动态的进行增删DOM元素；
- v-show 的原理是根据判断条件来动态的进行显示和隐藏元素；
- 由于v-if操作DOM会导致性能损耗，所以它适合应用在条件不怎么改变的情况下，而v-show就比较适合


### Vuex ###
- Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式，集中式存储管理应用的组件状态，并以相应的规则保证状态以一种可预测的方式发生变化
  它的核心就是一个 store 仓库，包含着应用中大部分状态
  1. State
  2. Getters
  3. Mutation
  4. Action
  5. Module


### Vuex和全局变量的区别 ###
1. Vuex 的状态存储是响应式的
2. 不能直接改变 store 中的状态，而必须显式的提交mutation


### Vue 与 React 的异同点 ###
- 相同点： 
  1. 都是JavaScript的UI框架。
  2. 都用了虚拟DOM。
  3. 提供了响应式 (Reactive) 和组件化 (Composable) 的视图组件。
  4. 将注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库。
- 不同点：
  1. Vue 的模板与 React 的 JSX (JSX只是JavaScript混合着XML语法)
  2. 状态管理。 在 React 中状态是关键，但是在Vue中不是必须的
  3. React Native。 React Native能在手机上创建原生应用
  4. 优化方面(计算虚拟DOM的异同)


### Vue data为什么是函数 ###
- 为了不共享同一份数据。在组件复用的时候，用的都是一份新的data


### Vue nextTick的作用 ###
- 在下一次DOM更新后获取到更新后的DOM。vue更新DOM是异步的
- 可以用来替换 mounted 函数，因为 mounted 不会承诺所有的子组件也都一起被挂载。


### 双向绑定原理 ###
- 数据劫持[Object.defineProperty]结合发布者-订阅者模式的方式
  defineProperty 劫持数据的各个属性的 getter 和 setter，在数据变动时发布消息给订阅者，触发监听回调
  - 使用 defineProperty 有什么缺点(或者说为什么vue3要使用 Proxy 来代替 defineProperty)
    在对数组数据进行操作时，无法劫持到，vue2 修改了7个数组的方法来实现劫持。


### computed 与 watch 的区别 ###
- computed：
  1. 它支持缓存，只有依赖的数据发生了变化，才会重新计算(默认走缓存)
  2. 不支持异步
  3. 如果属性值是函数，默认会用get方法(计算属性有get方法和set方法)
- watch：
  1. 它不支持缓存，数据变化时，它就会触发相应的操作
  2. 支持异步监听
- 应用场景：
  1. 当需要进行数值计算,并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时都要重新计算。
  2. 当需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许执行异步操作 ( 访问一个 API )，限制执行该操作的频率，并在得到最终结果前，设置中间状态。这些都是计算属性无法做到的


### Computed 和 Methods 的区别 ###
- 调用上的区别，计算属性依赖于它们参与计算的值进行缓存，而函数是调用即执行


### slot是什么？有什么作用？原理是什么？ ###
- 理解： 插槽，它是Vue的内容分发机制，插槽的内容由占位的组件决定，而它是否显示以及怎么显示由父组件决定
- 三种插槽： 默认插槽、具名插槽、作用域插槽
- 实现原理： 当vue实例化时，遇到父组件传入的slot标签内容，就将它保存在$slot内，在渲染时，再使用$slot中的内容进行替换


### 过滤器的作用，以及如何实现一个过滤器 ###
- 理解： 过滤器就是用来过滤数据的,本质上是一个函数。它不会修改数据，而是改变用户看到的数据
- 使用场景： 格式化[时间｜价格]


### 如何保存页面的当前的状态 ###
- localStorage 与 sessionStorage
- 路由传值
- 父组件记录子组件状态


### 常见的事件修饰符以及其作用 ###
1. stop： 防止事件冒泡
2. prevent: 防止默认事件
3. capture: 事件捕获
4. self: 只会触发自己范围内的事件，不包含子元素
5. once: 只会触发一次


### v-model是怎么实现的 ###
- 理解：v-model 是数据双向绑定，但是只能应用于表单元素。它的实现很简单，就是将表单的值绑定到变量var[这里实现了数据绑定到视图]，通过表单事件[如input事件或change事件]来改变变量的值[这里实现了视图到数据]


### v-model用于自定义组件 ###
- 理解： v-model应用于自定义组件的时候，实际上相当于父子组件传值。即将v-model绑定的变量以value的名字传递给子组件，同时子组件可以通过唤醒input事件来调用绑定的事件


### keep-alive ###
- 理解： 在需要组件切换时，保存一些组件的状态防止多次渲染。


### 单页面应用(SPA)与多页面应用(WPA)的区别 ###
- 结构： 单页面应用是一个页面+许多模块；多页面应用是多个完整页面
- 切换： 单页面应用切换快； 多页面应用切换慢
- 公共资源加载： 单页面(一次); 多页面(独立)
- 适用场景： 单页面应用:体验和流畅度高； 多页面应用:对SEO要求高


### Vue 模版到渲染的过程 ###
- 过程: template -> ast -> 优化optimize -> render
  - 优化： 判断静态节点(不包含表达式｜v-if｜v-show等指令的节点)，对不是静态节点的节点进行优化


### extends 与 mixin ###
- mixin混合，可以理解为多继承； extends继承，可以理解为单继承


### assets和static的理解 ###
- 相同点：它们都是用来存放静态资源文件的
- 不同点：assets内的资源文件会经过打包压缩进入static，而static则不会


### MVVM的优缺点 ###
- 优点:
  1. 分离视图和模型，降低耦合度
  2. 双向绑定自动更新DOM
- 缺点：
  1. Bug很难被调试
  2. 对于⼤型的图形应⽤程序，视图状态较多，ViewModel的构建和维护的成本都会⽐较⾼


### 怎么获取到hash值的变化 ###
1. 监听$route
2. location.hash读取hash值判断是否改变


### 路由 query 与 params 的区别 ###
1. 引入方式：
  - query： 以 path 引入，跳转是this.$router.push({path: '/path', query: {}})
  - params: 以 name 引入，跳转是this.$router.push({name: 'name', params: {}})
2. 在url上的显示:
  - query: query类似于GET， 参数在url上显示
  - params: params类似于POST， 参数在url上不显示
3. 刷新: 
  - query: query在刷新页面时，参数不会丢失
  - params: params在刷新页面时，参数会丢失


### vue-router导航守卫有哪些 ###
1. 全局前置/钩子：beforeEach、beforeResolve、afterEach
2. 路由独享的守卫：beforeEnter
3. 组件内的守卫：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave


### 前端路由的理解 ###
- 在早期，一个url对应一个页面，如果需要切换页面就必然会导致页面刷新，这种体验并不好，随着ajax出现，不刷新页面也能更新页面这样的需求，出现了SPA，但是那个时期的SPA没有路由的概念，SPA并不会记录状态。所以就出现了前端路由。其实只是起到一个标识作用。


### Vuex 与 localStorage 的区别 ###
- Vuex存储在内存中，localStorage则是以文件的形式存储在本地
- Vuex可以做到响应式[Vue.set()]，但是localStorage不行


### Vue严格模式 ###
- 在严格模式下，无论何时发生了状态变更且不是由mutation函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。通过在实例化时设置strict来开启严格模式


### vue中key的作用 ###
- 在v-if中的key： 用来标识一个独立的元素
- 在v-for中的key： v-for默认是就地复用，作用是:高效的更新渲染虚拟DOM


### 为什么不建议用index作key ###
- 使用index 作为 key和没写基本上没区别，因为不管数组的顺序怎么颠倒，index 都是 0, 1, 2...这样排列，导致 Vue 会复用错误的旧子节点，做很多额外的工作。