<template>
  <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" 
    type="number" value="1" @change="countChanged" ref="numbox" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
import mui from '../../lib/mui/js/mui.js'
export default {
    mounted() {
      //初始化数字选择框组件
      mui(".mui-numbox").numbox();
    },
    methods: {
      countChanged(){
        //每当 文本框中的数据被修改时，立即把最新的数据通过事件调用，传递给父组件
        this.$emit("getcount",parseInt(this.$refs.numbox.value))
      }
    },
}
</script>