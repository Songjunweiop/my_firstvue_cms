<template>
  <div>
    <!--顶部滑动条  -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item',item.id==0 ? 'mui-active' : '']"
            v-for="item in cates"
            :key="item.id"
            @click="getPhotoListByCateId(item.id)"
          >{{ item.title }}</a>
        </div>
      </div>
    </div>

    <!-- 图片 -->
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
        <img v-lazy="item.img_url"  />
        <div class="info">
          <h1 class="info-title">{{item.title}}</h1>
          <div class="info-body">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 10px;

  li {
    background: #ccc;
    margin-bottom: 10px;
    box-shadow: 0 0 10px #999;
    text-align: center;
    img{
        width: 100%;
        vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info{
        overflow: hidden;
        color: white;
        text-align: left;
        position: relative;
        bottom: 0;
        background-color: rgba(0,0,0,0.4);
        max-height: 84px;
        .info-title{
            font-size: 12px;
        }
        .info-body{
            font-size: 9px;
        }
    }
  }
}
</style>
<script>
//导入mui
import mui from "../../lib/mui/js/mui.js";
mui(".mui-scroll-wrapper").scroll({
  deceleration: 0.0005
});

export default {
  data() {
    return {
      cates: [],
      list: []
    };
  },
  created() {
    this.getAllCategory();
    this.getPhotoListByCateId();
  },
  methods: {
    getAllCategory() {
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status === 0) {
          result.body.message.unshift({ title: "全部", id: 0 });
          this.cates = result.body.message;
        }
      });
    },
    getPhotoListByCateId(catsId) {
      this.$http.get("api/getimages/" + catsId).then(result => {
        if (result.body.status === 0) {
          this.list = result.body.message;
        }
      });
    }
  }
};
</script>