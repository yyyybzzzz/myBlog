<template>
  <div class="article">
    <side-bar></side-bar>
    <section class="article-list">
      <h3 class="page-title"><i class="icon-wenzhang iconfont"></i> 文章列表
        <i class="iconfont icon-jiahao article-add" @click="open"></i></h3>
      <article-list :aList="aList"></article-list>
    </section>
    <div class="article-edit">
      <editor></editor>
    </div>
  </div>
</template>
<style scoped>
  .article {
    margin-left: 80px;
    height: 100%;
  }

  .article-list {
    float: left;
    background-color: #fff;
    border-right: 1px solid #bcbcbc;
    width: 300px;
    height: 100%;
    overflow-y: auto;
  }

  .page-title {
    padding-left: 25px;
    font-weight: 400;
  }

  .article-add {
    cursor: pointer;
    float: right;
    margin-right: 10px;
    margin-top: 2px;
  }

  .iconfont {
    font-size: 22px;
  }

  .article-edit {
    margin-left: 3px;
    height: 100%;
    overflow: auto;
  }
</style>
<script>
  import SideBar from '../common/SideBar.vue'
  import ArticleList from './ArticleList.vue'
  import Editor from './Editor.vue'
  import ArticleService from '../../service/ArticleService.js'
  import MsgBox from '../../utils/MsgBox.js'
  export default{
    components: {
      SideBar, ArticleList, Editor
    },
    data(){
      return {
        aList: ""
      }
    },
    mounted(){
      this.$bus.$on("aList", () => {
        this.aList = this.$bus.data.aList
      })
    },
    created: function () {
      this.$bus.data.currentId = 0 //每次创建都将当前选中 置为0
      ArticleService.getArtcles('../static/data/articles.json')
    },
    methods: {
      open() {
        MsgBox.alert("标题名称", '这是一段内容', (action) => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        })
      }
    }
  }

</script>
