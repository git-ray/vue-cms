<template>
    <div>
            <!-- mint ui 轮播图区 -->
            <mt-swipe :auto="4000">
                <mt-swipe-item>1</mt-swipe-item>
                <mt-swipe-item>2</mt-swipe-item>
                <mt-swipe-item>3</mt-swipe-item>
            </mt-swipe>
            <!--mui 九宫格改的六宫格的 -->
             <ul class="mui-table-view mui-grid-view mui-grid-9"  >
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		          
		     </ul> 
        
    </div>
</template>
<script>

import { Toast } from "mint-ui";

export default {
        data(){
            return{
                // 保存轮播图的数组
                lunbotuList:[]
            }
        },
        created(){
            console.log(123)
            this.getLunbotu();
             console.log(321)
        },
        methods: {
            getLunbotu(){
                // 获取轮播图数据的方法
                console.log('进入getLunbotu方法')
                this.$http.jsonp("https:www.baidu.com").then(result=>{
                        console.log("get请求被触发了")
                    if(result.body.status===0){
                        // 获取数据成功
                        console.log('加载轮播图OK')
                        Toast('加载轮播图OK')
                        this.lunbotuList=result.body.message;
                    }else{
                        console.log('加载轮播图失败')
                        Toast('加载轮播图失败')
                    }
                })
            }
        }

}
</script>
<style scoped lang="less">
/* 轮播图默认高度0 看不见  需要自己设置
 mint-swipe是从审查元素里看出来的*/
    .mint-swipe {
        height: 200px;

        .mint-swipe-item{
         &:nth-child(1){background-color: rgb(245, 8, 8);}
         &:nth-child(2){background-color: blue;}
         &:nth-child(3){background-color: green;}
        }
        
    }
    .mui-grid-view.mui-grid-9 {
            background-color: white;
            border: none;
        }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 0;
    }

</style>


