<template>
  <div class="cmt-content">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入内容（最多写入120字）" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
        <div class="cmt-title">
            第{{i+1}}楼&nbsp;&nbsp;
            用户:{{item.user_name}}&nbsp;&nbsp;
            发表时间：{{item.add_time|dateFormat('YYYY-MM-DD')}}</div>
        <div class="cmt-body">{{item.content === 'undefined'? '此用户很懒，什么都没留下': item.content}}</div>
      </div>
    </div>

    <mt-button type="primary" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
        pageIndex:1,//默认展示第一页评论
        comments:[],
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {  //获取评论
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex="+this.pageIndex)
        .then(result => {
          if (result.body.status === 0) {
            // this.comments = result.body.message;
            this.comments = this.comments.concat(result.body.message)
          } else {
            Toast("获取新闻列表失败");
          }
        });
    },
    getMore(){  //价值啊更多
        this.pageIndex++;
        this.getComments();
    }
  },
  props: ["id"] // 接受从父组件传过来 的 id 值
};
</script>
<style lang="less" scoped>
.cmt-content {
  margin-top: 15px;
  h3 {
    font-size: 12px;
  }
  .cmt-title {
    font-size: 12px;
    background-color: rgb(161, 230, 247);
  }
  .cmt-body {
    margin-top: 2px;
    font-size: 12px;
    text-indent: 2em;
  }
}
</style>