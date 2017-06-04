// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './vuex/store.js'
import VueBus from 'vue-bus'


Vue.config.productionTip = false


Vue.use(ElementUI)
Vue.use(VueBus)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: {App},
  store: store,
})
