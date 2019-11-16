<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <!-- 设置点击进入info的页面的id值 -->
        <router-link :to="'/home/newsinfo/' + item.id">  

          <img class="mui-media-object mui-pull-right" :src="item.img_url" />
          <div class="mui-media-body">
            {{item.title}}
            <p class="mui-ellipsis">
              <span>发表时间：{{item.add_time | dateFormat('YYYY-MM-DD')}}</span>
              <span>点击:{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      newslist: [] //新闻列表
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.get("api/getnewslist").then(result => {
        if (result.body.status === 0) {
          this.newslist = result.body.message;
          console.log(result.body);
          console.log(this.newslist);
        } else {
          Toast("获取新闻列表失败");
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.mui-table-view {
  li {
    font-size: 13px;
    .mui-ellipsis {
      font-size: 11px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>