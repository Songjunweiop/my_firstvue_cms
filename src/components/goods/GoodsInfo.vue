<template>
  <div class="goodsinfo-container">
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner" v-for="item in lunbotu" :key="item.id">
          <img :src="item.src" />
        </div>
      </div>
    </div>

    <!-- 小球 -->

    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballflag" ref="ball"></div>
    </transition>

    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{goodsinfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;
            销售价：
            <span class="now_price">￥{{goodsinfo.sell_price}}</span>
          </p>
          <p>
            购买数量：
            <!-- 用 @getcount="getSelectedCount" 将这个方法传递给 -->
            <numbox @getcount="getSelectedCount"></numbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodsinfo.goods_no}}</p>
          <p>库存情况：{{goodsinfo.stock_quantity}}件</p>
          <p>上架时间：{{goodsinfo.add_time | dateFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
// import { log } from "util";
//导入num_box子组件
import numbox from "../subcomponents/goodsinfo_numbox.vue";
export default {
  data() {
    return {
      id: this.$route.params.id, //将路由参数对象中的id 挂载到data ，方便后期调用
      lunbotu: [],
      goodsinfo: {},
      ballflag: false, //控制小球隐藏和显示
      selectedCount: 1 //保存用户选中的商品数量
    };
  },
  created() {
    this.getLunbotu();
    this.getInfo();
  },
  methods: {
    getLunbotu() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          console.log(this.lunbotu);
          this.lunbotu = result.body.message;
        } else {
          Toast("加载轮播图失败...");
        }
      });
    },
    getInfo() {
      //获取商品信息
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.goodsinfo = result.body.message[0];
        }
      });
    },
    goDesc(id) {
      this.$router.push("/home/goodsdesc/" + id);
    },
    goComment(id) {
      this.$router.push("/home/goodscomment/" + id);
    },
    addToShopCar() {
      //添加到购物车
      //拼接出一个要保存到store中的car数组里的商品对象信息
      this.ballflag = !this.ballflag;
      var goodsinfo = {
        id: this.id,
        count: this.selectedCount,
        price: this.goodsinfo.sell_price,
        selected: true
      }
      //调用store中的mutations来将商品加入到购物车
      this.$store.commit("addToCar",goodsinfo);
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;

      //获取小球的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      //获取购物车的徽标在页面中的位置
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();
      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;
      el.style.transform = `translate(${xDist}px,${yDist}px)`;
      el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el) {
      this.ballflag = !this.ballflag;
    },
    getSelectedCount(count) {
      //当子组件把选中的数量传递给父组件的时候，把选中的值保存到data上
      this.selectedCount = count; //接受子组件传过来的值
      console.log(this.selectedCount);
    }
  },
  components: {
    numbox //注册一下子组件
  }
};
</script>
<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;

  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99; // 这里规定小球的层数位置，应该在最高
    top: 794px;
    left: 152px;
  }
  .now_price {
    color: red;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 10px 0;
    }
  }
}
</style>