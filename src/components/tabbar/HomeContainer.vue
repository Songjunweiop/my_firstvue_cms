<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.img" />
      </mt-swipe-item>
    </mt-swipe>


    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/">
          <img src="../../images/2.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/3.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/4.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/5.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/6.png" alt="">
          <div class="mui-media-body">Phone</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { log } from "util";
export default {
  data() {
    return {
      lunbotuList: []
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      //这是获取轮播图的方法
      this.$http
        .get("api/getlunbo")
        .then(result => {
          console.log(result.body);
          if (result.body.status === 0) {
            this.lunbotuList = result.body.message;
            console.log(this.lunbotuList);
          } else {
            Toast("加载轮播图失败...");
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe-item:nth-child(1) {
  background-color: rgb(189, 81, 231);
}
.mint-swipe-item:nth-child(2) {
  background-color: rgb(85, 231, 231);
}
.mint-swipe-item:nth-child(3) {
  background-color: rgb(107, 128, 252);
}
img {
  width: 100%;
  height: 100%;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
    img{
        width: 60px;
        height: 60px;
    }
    
}
.mui-grid-view.mui-grid-9{
    background-color: white;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {  // img 下面的字体的大小
    font-size: 13px
}
</style>