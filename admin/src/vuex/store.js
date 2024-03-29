/**
 * Created by zyb on 2017/6/1.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import MsgBox from '../utils/MsgBox'
import Http from '../utils/HttpUtil'

Vue.use(Vuex)
var vue = new Vue();

//抽离文章选择函数
function articleSelect(state, index) {
  state.publishing = (state.aList[index]['type'] == 0)
  state.aList[index]['active'] = true;
  if (state.aList.length != 1) {
    state.aList[state.currentId]['active'] = false;
    state.currentId = index;
    state.newContent = state.aList[index]['content']
  }
  state.currentId = index;
  vue.$bus.$emit("a-select", index)
}

export default new Vuex.Store({
  state: {
    aList: [],
    publishing: false,
    writing: false,
    currentId: 0,
    newContent: "",
    host: 'http://localhost:3000',
    token: ''
  },
  getters: {
    aList(state){
      return state.aList
    },
    publishing(state){
      return state.publishing
    },
    writing(state){
      return state.writing
    },
    currentId(state){
      return state.currentId
    },
    newContent(state){
      return state.oldContent
    }
  },
  mutations: {
    //选择文章
    articleSelect(state, index){
      articleSelect(state, index)
    },
    //获取文章列表
    getArticles(state){
      Http.get(state.host + '/getArticles').then(res => res.json()).then(data => {
        if (data.code == 0) {
          for (var i in data.data) {
            data.data[i]['active'] = false
          }
          state.aList = data.data
          if (state.aList.length != 0) {
            //判断当前文章是否已发布 或是草稿
            state.publishing = (state.aList[0]['type'] == 0)
            state.newContent = data.data[0]['content']
            data.data[0]['active'] = true
            vue.$bus.$emit("a-select", state.currentId)
          }
        }
      })
    },
    //创建博客
    addArticle(state, vue){
      var param = {title: vue.title}
      Http.post(state.host + '/addArticle', param).then(res => res.json()).then(data => {
        vue.loading = false;
        vue.addVisible = false
        vue.disabled = false
        if (data.code == 0) {
          MsgBox.message('success', '创建博客成功')
          //将创建好的博客加入aList
          state.aList.unshift(data.data)
          //当前活跃项id+1
          state.currentId += 1;

          articleSelect(state, 0)
        }

      }).catch(err => {
        console.log(err)
        MsgBox.message('error', '网络发生错误')
        vue.loading = false;
        vue.addVisible = false
      })
    },
    //发布博客
    publishArticle(state, payload){

      state.aList[state.currentId]['type'] = payload.type
      state.aList[state.currentId]['content'] = state.newContent
      var param = state.aList[state.currentId]
      Http.post(state.host + "/publishArticle", param).then(res => res.json()).then(data => {
        payload.vue.publishVisible = false
        payload.vue.disabled = false
        payload.vue.loading = false
        payload.vue.loading1 = false
        state.writing = false
        state.publishing = false
        if (data.code == 0) {
          MsgBox.message('success', '发布博客成功')
        }

      }).catch(function (err) {
        console.log(err)
        MsgBox.message('error', '网络发生错误')
        payload.vue.publishVisible = false
        payload.vue.disabled = false
        payload.vue.loading = false
        payload.vue.loading1 = false
      })
    },

    deleteArticle(state, vue){

    },

    //用户登录
    login(state, vue){
      vue.loading = true
      if (vue.pwd == '' | vue.uname == '') {
        MsgBox.message('error', '用户名和密码不能为空')
        vue.loading = false
      } else {
        var user = {
          uname: vue.uname,
          password: vue.pwd
        }
        Http.post(state.host + '/login', user).then(res => res.json()).then(data => {
          if (data.code == 0) {
            state.token = data.data.token

            //登录成功 跳转
            vue.$router.push({path: 'article'})

          } else {
            MsgBox.message('error', data.msg)
          }
          vue.loading = false
        }).catch(err => {
          console.log(err.message)
          MsgBox.message('error', '网络发生错误')
          vue.loading = false
        })
      }
    },
    logout(state, vue){
      state.token = ''
      vue.$router.push({path: '/'})

    }
  },
  actions: {
    getArticles(context){
      context.commit('getArticles')
    },
    addArticle(context, vue){
      context.commit('addArticle', vue)
    },
    publishArticle(context, payload){
      context.commit('publishArticle', payload)
    },
    deleteArticle(context, vue){
      context.commit('deleteArticle', vue)
    },

    //用户
    login(context, vue){
      context.commit('login', vue)
    },

    logout(context, vue){
      context.commit('logout', vue)
    }
  }
})
