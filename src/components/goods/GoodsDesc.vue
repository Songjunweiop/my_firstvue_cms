<template>
  <div class="container">
    <h1>{{info.title}}</h1>
    <hr />
    <div class="content" v-html="info.content"></div>
    <!-- 上面这行因为返回的数据是带有标签的，所以只能用v-html -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {} //图文数据
    };
  },
  created() {
    this.getGoodsDesc();
  },
  methods: {
    getGoodsDesc() {
      this.$http
        .get("api/goods/getdesc/" + this.$route.params.id)
        .then(result => {
          if (result.body.status === 0) {
            this.info = result.body.message[0];
          }
        });
    }
  }
};
</script>

<style lang="scss" >
.container {
  padding: 9px;
  h1 {
    font-size: 20px;
  }
  .content {
    width: 100%;
    p {
      margin: 0px;
      padding: 0px;
    }

    .gomeImgLoad {
      // img{
      margin: 0px;
      width: 100%;
      height: 100%;
      // }
    }
  }
}
</style>