<template>
  <div class="goods-list">
    <!-- 这是通过标签的跳转 -->

    <!-- <router-link
      :to="'/home/goodsinfo/' + item.id"
      class="goods-item"
      v-for="item in goodslist"
      :key="item.id"
    >
      <img :src="item.img_url" alt />
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">{{item.sell_price}}</span>
          <span class="old">{{item.market_price}}</span>
        </p>
        <p class="all">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </router-link>-->

    <!-- 这是通过点击div的方式跳转 -->
    <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
      <img :src="item.img_url" alt />
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">{{item.sell_price}}</span>
          <span class="old">{{item.market_price}}</span>
        </p>
        <p class="all">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>

    <!-- 加载更多按钮 -->
    <mt-button type="danger" size="large" @click="getmore">加载更多</mt-button>
  </div>
</template>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
  .goods-item {
    width: 49%;
    margin: 3px 0;
    border: 1px solid #ccc;
    padding: 2px;
    box-shadow: 0 0 8px #ccc;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 250px;
    img {
      width: 100%;
    }
    h1 {
      font-size: 14px;
    }
    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 3px;
      }
      .price {
        .now {
          color: red;
          margin-left: 5px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      pageindex: 1,
      goodslist: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      //获取商品列表
      this.$http
        .get("api/getgoods?pageindex=" + this.pageindex)
        .then(result => {
          if (result.body.status === 0) {
            this.goodslist = this.goodslist.concat(result.body.message);
          }
        });
    },
    getmore() {
      this.pageindex++;
      this.getGoodsList();
    },
    goDetail(id){
      //使用js的形式进行路由导航
      this.$router.push("/home/goodsinfo/" + id)
    }
  }
};
</script>