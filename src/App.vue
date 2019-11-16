<template>
  <div class="app-container">
    <!-- 顶部 Header 区域开始 -->
    <mt-header fixed title="songjunwei"></mt-header>
    <!-- 顶部 Header 区域结束 -->

    <!-- 中间的路由 router-view 区域开始 -->
    
	<transition>
	<!-- <transition mode="out-in"> -->
		<router-view></router-view>
	</transition>
    <!-- 中间的路由 router-view 区域结束 -->

    <!-- 底部 Tabbar 区域开始 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cold"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-express">
          <span class="mui-badge" id="badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>

    <!-- 底部 Tabbar 区域结束 -->
  </div>
</template>
<script>
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;   //  这里设置页面切换效果
}
.v-enter{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease;
}
</style>