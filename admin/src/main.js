// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuebus from 'vue-bus'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


Vue.config.productionTip = false
Vue.use(Vuebus)
Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: {App},
  created: function () {//初始化全局变量
    var data = {
      aList: "",
      currentId: 0,
      writing: false,
      publishing: false
    };
    //console.log(bus)
    this.$bus.data = data;
  }
})
