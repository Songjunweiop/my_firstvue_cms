# 这是一个项目
## 士大夫撒点
### 三打哈
    1. git init   
    2. git add .  
    3. git status    查看
    4. git commit -m "init my project"
    5. git push

# 项目开始

## 制作首页App组件
    1. 完成 Header 区域,使用的是 Mint-UI 中的Header组件
    2. 制作底部的 Tabbar 区域,使用的是 MUI 的 Tabbar.html
        + 在制作 购物车 小图标的时候,操作会相对多一些:
        + 先把 扩展图标的 css 样株式,拷贝到 项目中
        + 拷贝 扩展字体库 ttf 文件,到项目中
        + 为 购物车 小图标,添加 如下样式 'mui-icon mui-icon-extra mui-icon-ertra-cart'
    3. 要在中间区域放置一个 t=router-view 来展示路由匹配到的组件
## 改造 tabbar为 router-link

## 设置路由高亮

## 点击tabbar中的路由链接,展示对应的路由组件

## 加载首页轮播图数据
    1. 获取数据：vue-resource  :  npm i vue-resource -S
    2. 使用 vue-resouce 的 this.$http.get 获取数据
    3. 把获取到的数据保存到 lunbotuList 的data中
    4. 使用 v-for 循环渲染每个item 项
 
## 改造九宫格区域的样式

## 改造新闻链接路由

## 新闻资讯 页面制作  
    1. 绘制页面
    2. 使用vue-resourse 获取数据
    3. 渲染真实数据   

## 新闻资讯实现点击详情
    1. 把列表的每一项改造为 router-link ，同时在跳转的时候，应该提供一个唯一的标识符
    2. 创建新闻详情的组件页面 NewsInfo.vue
    3. 在路由模块中，将新闻详情的路由地址和页面组件对应起来

## 实现新闻详情的 页面布局 和数据渲染

## 单独封装一个 commen.vue 子组件
    1. 先创建一个 单独的 comment.vue 组件模板
    2. 在需要使用comment.vue 组件的页面中 ，向手动导入comment 组件
        + ‘import comment from './comment.vue'’
    3. 在父组件中，使用‘components’属性，将刚才导入的 comment组件注册为自己的子组件
    4. 将注册子组件的时候，注册名称，以标签的形式，在页面中引入即可  

## 获取所有的评论数据显示到页面中

## 实现点击加载更多
    1. 为加载更多按钮，绑定点击事件，在实践中，请求下一页数据
    2. 点击加载更多，让pageIndex++，然后重新调用this.getComments获取最新一页的数据

## 发表评论
    1. 把文本框做双向数据绑定
    2. 为发表按钮绑定一 个事件
    3. 校验评论内容是否为空,如果为空，则Toast提示用户评论内容不能为空
    4. 通过vue-resource 发送个请求，把评论内容提交给服务器
    5. 当发表评论oK后,重新刷新列表，以查看最新的评论
        + 如果调用getComments 方法重新刷新评论列表的话,可能只能得到最后一 页的评论，前几页的评论获取
    不到
        + 换一种思路:当评论成功后，在客户端，手动拼接出一个最新的评论对象，然后调用数组的
    unshift方法，把最新的评论 ，追加到data 中comments 的开头;这样，就能完美实现刷新评论列
    表的需求;

## 改造图片分享页面
## 绘制图片列表页面
    1. 顶部滑动条
    2. 制作底部的图片列表

## 制作图片列表