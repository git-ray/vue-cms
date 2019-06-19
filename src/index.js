import path from "path";
import $ from 'jquery';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
    // import Vue from '../node_modules/vue/dist/vue.js';



// 引入mui
import main from './main.vue';
import '../lib/mui/css/mui.min.css';
import mui from '../lib/mui/js/mui.min.js';
// import './lib/mui/css/mui.css';


/* import account from "./man/account.vue";
import goodList from "./man/goodList.vue";
import login from "./accounts/login.vue";
import register from "./accounts/register.vue"; */






// 路由
// var vueRouter = new VueRouter({
//     routes: [{

//     }]
// })

var vue = new Vue({
    el: '#app',
    data: {
        msg: 'niubi'
    },
    render: function(createElement) {
        return createElement(main)
    },
    // router: vueRouter
})