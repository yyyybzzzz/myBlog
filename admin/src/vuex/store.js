/**
 * Created by zyb on 2017/6/1.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import MsgBox from '../utils/MsgBox'

Vue.use(Vuex)
var vue = new Vue();

export default new Vuex.Store({
  state: {
    aList: [],
    publishing: false,
    writing: false,
    currentId: 0,
    newContent: ""
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
    articleSelect(state, index){
      if (state.writing | state.publishing) {
        MsgBox.alert("测试", "测试", () => {
          console.log(state.newContent)
        })
      } else {
        state.aList[index]['active'] = true;
        state.aList[state.currentId]['active'] = false;
        state.currentId = index;
        state.newContent = state.aList[index]['content']
        vue.$bus.$emit("a-select", index)
      }
    },
    getArticles(state){
      fetch('../static/data/articles.json').then(res => res.json()).then(data => {
        state.aList = data
        state.newContent = data[0]['content']
        vue.$bus.$emit("a-select", state.currentId)
      })
    }
  },
  actions: {
    getArticles(context){
      context.commit('getArticles')
    }

  }
})
