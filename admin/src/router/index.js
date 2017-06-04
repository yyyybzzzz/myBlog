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
      path: '/',
      name: 'login',
      component: Login,
    }, {
      path: '/article',
      name: 'article',
      component: Article,
      meta: {
        authPage: true
      }
    }, {
      path: '/tag',
      name: 'tag',
      component: Tag,
      meta: {
        authPage: true
      }
    }, {
      path: '/me',
      name: 'me',
      component: Me,
      meta: {
        authPage: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  var vue = this.a.app
  if (to.meta.authPage) {
    if (from.name == null) {
      next({path: '/'})
      return
    }//直接从网址栏输入
    if (vue.$store.state.token == '') {
      next({path: '/'})
      return
    }
  }
  if (from.name == 'article') {
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
  } else
    next()
})
export  default router
