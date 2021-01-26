import Vue from 'vue'
import Router from 'vue-router'
const home = ()=> import('@/views/home/home.vue') 
const category = ()=> import('@/views/category/category.vue') 
const shopcar = ()=> import('@/views/shopcar/shopcar.vue') 
const my = ()=> import('@/views/my/my.vue') 
Vue.use(Router)

const router=new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            redirect: '/home'
        },
        {
            name: 'home',
            path: '/home',
            component: home
        },
        {
            name: 'category',
            path: '/category',
            component: category
        },
        {
            name: 'shopcar',
            path: '/shopcar',
            component: shopcar
        },
        {
            name: 'my',
            path: '/my',
            component: my
        },
    ]
})

export default router