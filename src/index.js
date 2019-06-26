import Vue from "vue";

// 导入主页组件
import main from "./main.vue";

// 导入路由的包
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 引入mui   只有CSS
import "./lib/mui/css/mui.min.css";
import "./lib/mui/css/icons-extra.css";

// 引入mint-ui基础css
import "mint-ui/lib/style.css";
// 引入mint-ui header   组件
import { Header } from "mint-ui";
Vue.component(Header.name, Header);
// 引入mint-ui 轮播图   组件
import { Swipe, SwipeItem } from "mint-ui";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// // 引入mint-ui消息弹窗组件
// import { Toast } from "mint-ui";
// Vue.component(Toast);

// 导入安装vue-resource 用于 (get post jsonp)请求
import VueResource from "vue-resource";
Vue.use(VueResource)

// 路由
// var vueRouter = new VueRouter({
//     routes: [{

//     }]
// })
// 导入自己的路由
import router from "./router.js";

var vue = new Vue({
    el: "#app",
    data: {
        msg: "niubi"
    },
    render: function(createElement) {
        return createElement(main);
    },
    router: router
        // router: vueRouter
});