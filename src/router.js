import VueRouter from 'vue-router'  //导入vue-router包-01

//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'

//导入首页的路由组件
import NewsList from './components/news/NewsList.vue'//新闻
import NewsInfo from './components/news/NewsInfo.vue'
//导入图片分享的路由组件
import Photolist from './components/photos/Photolist.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
//导入商品列表
import GoodsList from './components/goods/GoodList.vue'

//-03 创建路由对象
var router = new VueRouter({
    routes: [   //配置路由规则
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/search', component: SearchContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/member', component: MemberContainer },
        { path: '/home/newslist', component: NewsList },
        { path: '/home/newsinfo/:id', component: NewsInfo },
        { path: '/home/photolist', component: Photolist },
        { path: '/home/photoinfo/:id', component: PhotoInfo },
        { path: './home/goodslist', component: GoodsList },
    ],
    linkActiveClass: 'mui-active'
})

export default router
