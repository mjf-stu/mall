import Vue from 'vue'
import Router from 'vue-router'
const home = ()=> import('@/views/home/home.vue') 
const category = ()=> import('@/views/category/category.vue') 
const shopcar = ()=> import('@/views/shopcar/shopcar.vue') 
const my = ()=> import('@/views/my/my.vue') 
const home_popular= ()=> import('@/views/home/childComps/childPopular.vue')
const home_new= ()=> import('@/views/home/childComps/childNew.vue')
const home_tuiJian= ()=> import('@/views/home/childComps/childTuiJian.vue')

Vue.use(Router)

const router=new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            redirect: '/home',
        },
        {
            name: 'home',
            path: '/home',
            component: home,
            children:[
                {
                    // name: 'default',
                    path: '',
                    redirect: 'popular'
                },
                {
                    name:'home_popular',
                    path: 'popular',
                    component: home_popular
                },
                {
                    name:'home_new',
                    path: 'new',
                    component: home_new
                },
                {
                    name:'home_tuiJian',
                    path: 'tuijian',
                    component: home_tuiJian
                },
            ]
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