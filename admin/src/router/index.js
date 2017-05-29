import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/article/Article'
import Tag from '@/components/tag/Tag'
import Login from '@/components/login/Login'
import Me from '@/components/me/Me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component:Login,
      authPage:true
    }, {
      path:'/article',
      name:'article',
      component:Article
    }, {
      path:'/tag',
      name:'tag',
      component:Tag
    }, {
      path:'/me',
      name:'me',
      component:Me
    }
  ]
})
