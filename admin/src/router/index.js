import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
import Tag from '@/components/Tag'
import Login from '@/components/Login'
import Me from '@/components/Me'

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
