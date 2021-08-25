### JS基本数据类型 ###
1. String
2. Number
3. Null
4. Undefined
5. Boolean
6. Symbol
7. Bigint


### JS隐式类型转换规则 ###
1. 遇到 == ， 两边转化成number类型进行比较
2. 遇到 ！操作符，首先转化成Boolean类型
3. null == undefined 结果为true
4. 遇到大小比较时，如果两边是String，则直接比较unicode， 如果有一边是Number， 则转化成Number比较
5. 遇到字符串 + ， 转化成字符串拼接
6. 遇到 ++ -- ，转化成Number
7. 在进行 == 比较时， null与undefined不会转换类型(重要！！！！)


### 原型与原型链 ###
- 理解： 原型本质上是一个对象，是为了给实例添加一组属性和方法存在的，JS在寻找实例的属性的时候，首先会在实例本身的属性去找，如果没有找到，
  那么就会去它的原型对象里面找，如果还没有找到，就会继续去这个原型的原型找，直到找到这个属性或是找到原型的顶点为止。原型对象之间的这种层层递进的关系就形成了原型链。
1. 实例的__proto__属性指向其构造函数的 prototype 属性
2. 构造函数的__proto__属性指向 Function 的 prototype 属性
3. Function 的 prototype 的__proto__属性指向 Object 的 prototype 属性


### JS闭包 ###
- 理解： 闭包就是能够访问其他函数内部变量的函数
- 可能导致的问题： 内存泄露(原因是变量不会被销毁)


### 事件 ###
1. 事件捕获
2. 事件冒泡
3. 事件代理
4. 阻止事件冒泡的方式：stopPropagation()、 cancelBubble = true(IE)
5. 阻止默认事件的方式：preventDefault()、 returnValue = false(IE)


### 事件循环EventLoop ###
- 理解： 由于JS单线程执行的缘故，如果所有任务都同步执行，那么在某些操作上就会让CPU处于空闲等待状态，于是任务就被分成了同步执行跟异步执行
  两种，异步执行的任务又分为宏任务和微任务。于是JS的执行机制就是所有的同步任务都在主线程上执行，同时在主线程之外还有一个任务队列，当异步任务执行有了结果后，就会在任务队列里添加一个事件。一旦执行栈中的同步任务执行完毕，系统就会读取任务队列，将其放到执行栈中执行，主线程会不断重复地去执行这个过程，这就是事件循环


### 宏任务与微任务 ###
- 宏任务：
  1. script (外层同步代码)
  2. setTimeout / setInterval
  3. UI事件
  4. postMessage，MessageChannel
  5. setImmediate，I/O（Node.js）
- 微任务：
  1. Promise
  2. MutaionObserver
  3. Object.observe
  4. process.nextTick（Node.js）


### 数组方法apply、bind、call的作用 ###
- 理解： 用于修改方法内部的 this 指向
- 格式：
  1. apply: xxx.apply(context, [参数1， 参数2， ..., 参数n])
  2. call: xxx.call(context, 参数1， 参数2， ..., 参数n)
  3. bind: xxx.bind(context, 参数1， 参数2， ..., 参数n)()


### 浅拷贝与深拷贝 ###
- 浅拷贝：
  1. Object.create()
  2. Object.assign()
  3. 扩展运算符 ...
- 深拷贝：
  1. JSON.parse(JSON.stringify(xxx))
  2. 递归


### 数组的方法 ###
- 改变自身的：
  1. splice(位置，删除个数，新增个数);
  2. pop() 返回删除元素
  3. push(插入元素) 返回长度
  4. unshift(插入首部的元素) 返回长度
  5. shift() 返回删除的头部元素
  6. reverse() 倒序
  7. sort() 排序
  8. fill(填充值, 开始, 结束)；
- 不改变自身的：
  1. slice(开始,结束) 截取
  2. indexOf(字符) 查询指定字符 不存在返回-1
  3. lastIndexOf(字符) 倒序查询
  4. concat(连接数字)
  5. join(符号) 数组转字符串
  6. includes(字符) 有返回true


### 防抖和节流 ###
- 理解： 防抖是指在一定时间间隔内触发的多次事件只会处理最后一次，每次触发都会重新计时；节流是在一定时间间隔内触发的多次时间只会被处理第
  一次，处理后不会重新计时。
- 作用： 防抖和节流能有效减少浏览器引擎的损耗，防止出现页面堵塞卡顿现象


### 数组扁平化处理 ###
1. flat(Infinity)
2. toString() + split(',') + join('')
3. 递归


### 二分查找的前提条件 ###
1. 元素必须保持有序
2. 必须采用顺序存储结构


### JS的this指向 ###
- this最终指向的是那个直接调用它的对象
- 通过apply、bind、call可以改变this指向
- 在严格模式下默认的this不再是window，而是undefined
- new 操作符会改变this的指向


### JS变量提升 ###
- 理解： 变量提升是指在JS代码执行前会将变量的声明提升到作用域的顶部，等到执行到的时候再进行赋值