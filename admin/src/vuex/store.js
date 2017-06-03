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
}

export default new Vuex.Store({
  state: {
    aList: [],
    publishing: false,
    writing: false,
    currentId: 0,
    newContent: "",
    host: 'http://localhost:3000'
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
      Http.get(state.host + '/getArticles').then(res=>res.json()).then(data=>{
        if(data.code==0){
          for (var i in data.data){
            data.data[i]['active']=false
          }
          state.aList = data.data
          state.newContent = data.data[0]['content']
          data.data[0]['active']=true
          vue.$bus.$emit("a-select", state.currentId)
        }
      })
    },
    //创建博客
    addArticle(state, vue){
      var param = {title: vue.title}
      Http.post(state.host + '/addArticle', param).then(res => res.json()).then(data => {
        vue.loading = false;
        vue.dialogVisible = false
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
        vue.dialogVisible = false
      })
    }
  },
  actions: {
    getArticles(context){
      context.commit('getArticles')
    },
    addArticle(context, vue){
      context.commit('addArticle', vue)
    }
  }
})
