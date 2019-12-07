//这是路口文件
console.log("ok");//1.git init   2.git add .  3.git status    4.

//按需导入Mint-UI 中的组件
// import {Header} from 'mint-ui'
// import 'mint-ui/lib/style.css'//
// Vue.component(Header.name,Header)
import { Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Lazyload)
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

//注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)
//每次进入页面，把本地存储的购物车的数据拿出来
var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
    state: {// this.$store.state.***
        car:car,  //购物车中的商品的数据， 
    },
    mutations: { // this.$store.commit('方法的名称','按需传递唯一的参数')
        addToCar(state, goodsinfo) {
            //点击加入购物车，把商品信息，保存到store中的car

            var flag = false

            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })
            //如果循环完毕还是false，则把数据直接push到购物车中
            if (!flag) {
                state.car.push(goodsinfo)
            }
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        removeFormCar(state,id){
            state.car.some((item,i)=>{
                if(item.id==id){
                    state.car.splice(this.i,1);
                    return true;
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        }
    },
    getters: { // this.$store.getters.***
        //相当于 计算属性 
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count
            })
            return c
        },
        getGoodsCount(state){
            var o={};
            state.car.forEach(item=>{
                o[item.id]=item.count
            })
            return o
        }
    },
})




//定义全局的过滤器:  安装： nom moment -S
//导入moment
import moment from 'moment'
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH-mm-ss") {
    return moment(dataStr).format(pattern)
})


//  2.1 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)  //2.2  安装 vue-resource
Vue.http.options.root = 'http://www.liulongbin.top:3005'//设置请求的根路径
Vue.http.options.emulateJSON = true;


import Vue from 'vue'
//导入 App 根组件
import app from './App.vue'
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,  //1.4 挂载路由模块到 vm 上
    store  //挂载 store 状态管理对象
})
