import Vue from 'vue'
import Router from 'vue-router'
const home = ()=> import('@/views/home/home.vue') 
const category = ()=> import('@/views/category/category.vue') 
const shopcar = ()=> import('@/views/shopcar/shopcar.vue') 
const my = ()=> import('@/views/my/my.vue') 
const home_popular= ()=> import('@/views/home/childComps/childPopular.vue')
const home_new= ()=> import('@/views/home/childComps/childNew.vue')
const home_tuiJian= ()=> import('@/views/home/childComps/childTuiJian.vue')

const detail = ()=>import('@/views/detail/detail.vue')

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
                // {
                //     //在home创建时created就手动重定向===这里重定向无法传参
                //     // name: 'default',
                //     // path: '',
                //     // redirect: 'popular'
                // },
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

        {
            name:'detail',
            path:'/detail/:id',
            component: detail
        }
    ]
})

export default router