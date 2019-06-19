
<template>
    <div>
      <header class="mui-bar mui-bar-nav">
		    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		    <h1 class="mui-title">图文表格</h1>
		</header>
		<div class="mui-content" style="background-color:#fff">
		    <h5 style="background-color:#efeff4">慢生活</h5>
		    <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" src="../images/shuijiao.jpg">
		                <div class="mui-media-body">幸福就是可以一起睡觉</div></a></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" src="../images/muwu.jpg">
		                <div class="mui-media-body">想要一间这样的木屋，静静的喝咖啡</div></a></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#"><img class="mui-media-object" src="../images/cbd.jpg">
		                <div class="mui-media-body">Color of SIP CBD</div></a></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" src="../images/yuantiao.jpg">
		                <div class="mui-media-body">静静看这世界</div></a></li>
		    </ul>    
		</div>
    </div>
   
</template>

<script>
import mui from '../lib/mui/js/mui.min.js';
mui.init({
			swipeBack:true //启用右滑关闭功能
		});

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
/* export var title='小星星'
export var star='哈哈哈哈'
export var three={
    name:"张三",
    dsc:"菜鸡"
} */
</script>

<style scoped>
h5{
		        padding-top: 8px;
		        padding-bottom: 8px;
		        text-indent: 12px;
		    }
		    
			.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
				font-size: 15px;
				margin-top:8px;
				color: #333;
			}
</style>




