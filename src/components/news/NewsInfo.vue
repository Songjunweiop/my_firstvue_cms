<template>
  <div class="newsinfo-container">
    <h3>{{newsinfo.title}}</h3>
    <p>
      <span>发表时间:{{newsinfo.add_time | dateFormat}}</span>
      <span>点击次数: {{newsinfo.click}}</span>
    </p>
    <hr />
    <div class="content" v-html="newsinfo.content"></div>

    <comment-box :id="this.id"></comment-box>
  </div>
</template>
<script>

//1.导入评论的子组件
import comment from '../subcomponents/comment.vue'

export default{
    data(){
        return{
            id:this.$route.params.id,  // 将url传过来的id 挂在到 data 上
            newsinfo:{}
        }
    },
    created() {
        this.getnewsinfo()
    },
    methods: {
      
        getnewsinfo() {
      this.$http.get("api/getnew/"+this.id).then(result => {
        if (result.body.status === 0) {
          this.newsinfo = result.body.message[0];
        } else {
          Toast("获取新闻失败");
        }
      });
        }
    },
    components:{  //用来注册子组件的节点
        "comment-box":comment
    }
}
</script>
<style lang="less" scoped>
.newsinfo-container {
  padding: 0 10px;
  margin: 20px;
  h3 {
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px
  }
  p {
    display: flex;
    justify-content: space-between;
    font-style: italic;
    font-size: 12px;
  }
  
}
</style>