/**
 * Created by zyb on 2017/6/1.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aList: [
      {
        "title": "垂直居中的深入探讨122345566666666",
        "time": "2016-09-26 19:30:20",
        "content": "1这样一个路由链接，我已经点击进去，现在的路由就是这个，浏览器url 就是localhost：4000/query 但是，我再次点击这个查询首页 链接， 当前页面不会从新加载，我想重新初始化组件",
        "active": true
      },
      {
        "title": "垂直居中的深入探讨",
        "time": "2016-09-26 19:30:20",
        "content": "2这样一个路由链接，我已经点击进去，现在的路由就是这个，浏览器url 就是localhost：4000/query 但是，我再次点击这个查询首页 链接， 当前页面不会从新加载，我想重新初始化组件",
        "active": false
      },
      {
        "title": "垂直居中的深入探讨",
        "time": "2016-09-26 19:30:20",
        "content": "3这样一个路由链接，我已经点击进去，现在的路由就是这个，浏览器url 就是localhost：4000/query 但是，我再次点击这个查询首页 链接， 当前页面不会从新加载，我想重新初始化组件",
        "active": false
      },
      {
        "title": "垂直居中的深入探讨",
        "time": "2016-09-26 19:30:20",
        "content": "4这样一个路由链接，我已经点击进去，现在的路由就是这个，浏览器url 就是localhost：4000/query 但是，我再次点击这个查询首页 链接， 当前页面不会从新加载，我想重新初始化组件",
        "active": false
      }
    ],
    publishing:true,
    wrting:false,
    currentId:0
  }
})
