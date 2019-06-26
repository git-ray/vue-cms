// 这个地方是必须要导入vue-router的
// 因为必须要先创建出这个对象，导出的才是个vue-router对象，才不会报错
import VueRouter from 'vue-router';

import HomeContainer from './commponents/tabbar/HomeContainer.vue';
import MemberContainer from './commponents/tabbar/MemberContainer.vue';
import SearchContainer from './commponents/tabbar/SearchContainer.vue';
import ShopcarContainer from './commponents/tabbar/ShopcarContainer.vue';


var vueRouter = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        {
            path: '/home',
            component: HomeContainer
        },
        {
            path: '/member',
            component: MemberContainer
        },
        {
            path: '/shopcar',
            component: ShopcarContainer
        },
        {
            path: '/search',
            component: SearchContainer
        },
    ],
    linkActiveClass: 'mui-active'
        // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})
export default vueRouter