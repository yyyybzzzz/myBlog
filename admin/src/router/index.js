import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/article/Article'
import Tag from '@/components/tag/Tag'
import Login from '@/components/login/Login'
import Me from '@/components/me/Me'
import MsgBox from '../utils/MsgBox.js'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      authPage: true
    }, {
      path: '/article',
      name: 'article',
      component: Article
    }, {
      path: '/tag',
      name: 'tag',
      component: Tag
    }, {
      path: '/me',
      name: 'me',
      component: Me
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (from.name == 'article') {
    var vue = this.a.app
    if (vue.$store.state.writing) {
      MsgBox.alert("zyb", 'zyb', (action) => {
        MsgBox.message(action)
        if (action == 'confirm') {
          vue.$store.state.publishing = false;
          vue.$store.state.writing = false;
        }
      })
    } else {
      vue.$store.state.currentId = 0
      next()
    }
  }
  else {
    next()
  }
})
export  default router
