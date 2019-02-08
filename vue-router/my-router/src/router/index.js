import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Nav from '@/components/nav'
import Manage from '@/components/manage'
import About from '@/components/about/about'
import Login from '@/components/login'
import Register from '@/components/register'
import News from '@/components/about/news'
import Order from '@/components/about/order'
import Link from '@/components/about/link'
import Express from '@/components/about/express'
import Detail from '@/components/detail'

Vue.use(Router)

let routes = [
  {
    path: '/',
    component: Home,
    name:'home'
  },
  {
    path:'/nav',
    component:Nav,
    name:'nav'
  },
  {
    path:'/manage',
    component:Manage,
    name:'manage'
  },
  {
    path:'/detail',
    component:Detail,
    name:'detail'
  },
  {
    path:'/about',
    component:About,
    redirect:'/about/news',
    name:'about',
    children:[
      {
        path:'news',
        component:News
      },
      {
        path:'link',
        component:Link
      },
      {
        path:'order',
        component:Order
      },
      {
        path:'express',
        component:Express
      }
    ]
  },
  {
    path:'/login',
    component:Login,
    name:'login'
  },
  {
    path:'/register',
    component:Register,
    name:'register'
  },
  {
    path:'*',
    component:Home
  }
];

let router = new Router({
  routes,
  mode:'history'
})

//全局前置守卫
router.beforeEach((to,from,next) => {
  if(to.path == '/login' || to.path == '/register'){
    next() //确保next被调用，否则钩子就不会reslove
  }else{
    alert('没有登录，请先登录')
    next('/login')
  }
})


export default router
