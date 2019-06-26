
<template>
    <div class="appContainer">
        <!-- 顶部 -->
        <mt-header fixed title="徐大虫"></mt-header>

     <!-- 内容区 组件区-->   
        <transition>
    
           <router-view id="view"></router-view>
         </transition>     
     <!-- 底部 -->
         <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
       	</nav>
    
    </div>
   
</template>

<script>
//   import Vue from 'vue';
// import { Header } from 'mint-ui';
// Vue.component(Header.name, Header);

export default {
    data () {
        return {
            msg:"123"
        }
    },
    methods: {
        show(){
            console.log("调用了main组件的 show方法")
        }
    }
}

</script>

<style scoped>
  .appContainer {
      padding-top: 40px;
      padding-bottom: 50px;
      margin: 0;
    /*  这一堆样式 是为了 铺满body因为 body设置不了样式，，不清楚是为什么--------*/
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow-y: auto;
         background-color: white;
    /* --------------------------------------------------------------------------- */

    overflow-x:hidden;
  }
   #body {
    padding: 0;
    margin: 0;
   
  }
   mt-header {
    padding: 0;
    margin: 0;
  }
   #view {
    padding: 0;
    margin: 0;
  }
  .v-enter{
      opacity: 0;
      /* 让动画 元素从百分百位置进入 */
      transform: translateX(100%);
  }
  .v-leave-to{
      /* 让动画 元素从负百分百21位置出去
      实现了  从右向左的移动 */
      transform: translateX(-100%);
      /* 绝对定位 让内容动画不会 上下乱动 */
      position: absolute;
  }
  .v-enter-active,
  .v-leave-active{
      transition: all 0.5s ease;
  }



</style>




