### CSS绘制三角形的方式 ###
1. border
2. canvas绘图
3. svg绘图
4. 线性渐变，45deg
5. clip-path: polygon()


### BFC ###
- 定义： 块级格式化上下文，如果一个元素设置了BFC，那么其内部元素不会影响外部元素，外部元素也不会影响内部元素
- 可以解决哪些问题：
  1. 清除浮动
  2. 防止外边距重叠
  3. 防止元素被浮动元素覆盖
- 怎么设置BFC：
  1. html 根元素
  2. float不是none的元素
  3. position不是static或relative的元素
  4. display的值是inline-block,table-cell,table-caption,flex,inline-flex
  5. overflow不是visible的元素


  ### flex弹性布局 ###
- 属性
  1. **flex-direction**: 主轴的方向（row、column、row-reverse、column-reverse）
  2. **flex-wrap**: 是否换行(nowrap、wrap、wrap-reverse)
  3. **flex-flow**: flex-driection与flex-wrap的组合（row nowrap）
  4. **justify-content**: 项目在主轴上的对齐方式（flex-start、flex-end、center、space-between、space-around）
  5. **align-items**: 项目在侧轴上的对齐方式（flex-start、flex-end、center、baseline[第一行文字为基准线]、stretch[拉伸]）
  6. **align-content**: 多根轴线的对齐方式(flex-start、flex-end、center、space-between、space-around、stretch)
- 项目的属性：
  1. order: 显示的顺序（越小越靠前）
  2. flex-grow: 定义项目的放大比例(默认为0，即不放大，如果全为1，则平分剩余空间[其实就是flex属性])
  3. flex-shrink: 定义了项目的缩小比例(默认为1，如果空间不足，将会缩小)
  4. flex-basis: 定义了在分配多余空间之前，项目占据的主轴空间
  5. flex: 是flex-grow、flex-shrink、flex-basic的组合缩写(默认值是 0 1 auto)
  6. align-self: 允许单个项目有与其他项目不一样的对齐方式(auto、flex-start、flex-end、center、baseline、stretch)


  ### 水平垂直居中 ### 
- 不固定：
  1. flex
  2. table-cell
  3. transform(-50%, -50%)
  4. grid布局
- 固定：
  1. abslute + margin:auto
  2. abslute + 负margin


  ### 清除浮动 ###
1. 尾部添加元素设置clear: both
2. 伪元素after
3. BFC
4. 父元素也设置浮动


### 选择器优先级 ###
**!important > 行内样式 > ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性**


### CSS3新特性 ###
1. 新增了一些选择器
2. 边框和背景
3. 渐变(gradients) 线性渐变： linear-gradients、  径向渐变：radial-gradient
4. 转换(transform)
5. 过渡(transition)  transition-property、 transition-duration、 transition-timing-function、 transition-delay
6. 动画(animation)
7. 盒模型
8. 弹性布局(flex)
9. 媒体查询