//这是路口文件
console.log("ok");//1.git init   2.git add .  3.git status    4.

//按需导入Mint-UI 中的组件
// import {Header} from 'mint-ui'
// import 'mint-ui/lib/style.css'//
// Vue.component(Header.name,Header)
import { Swipe, SwipeItem,Button } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
//导入Mint-UI所有组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'//
Vue.use(MintUI)

//导入mui的样式
import './lib/mui/css/mui.min.css'

//导入icon 的样式
import './lib/mui/css/icons-extra.css'

//1.1导入路由的包
import Vuerouter from 'vue-router'
Vue.use(Vuerouter)  //1.2安装路由
import router from './router.js'  //1.3导入 router.js 模块

//定义全局的过滤器:  安装： nom moment -S
//导入moment
import moment from 'moment'
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH-mm-ss"){
    return moment(dataStr).format(pattern)
})


//  2.1 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)  //2.2  安装 vue-resource
//设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'

import Vue from 'vue'
//导入 App 根组件
import app from './App.vue'
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router  //1.4 挂载路由模块到 vm 上
})
