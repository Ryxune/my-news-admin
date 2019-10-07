import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Index from '@/views/Index'
import PostList from '@/views/PostList'
import PostAdd from '@/views/PostAdd'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:'/login',component:Login},
    {
      path: '/', component: Index, children: [
        { path: 'post_list', component: PostList },
        { path: 'post_add', component:PostAdd }
    ]},
  ]
})
