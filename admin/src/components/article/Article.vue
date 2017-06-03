<template>
  <div class="article">
    <side-bar></side-bar>
    <section class="article-list">
      <h3 class="page-title"><i class="icon-wenzhang iconfont"></i> 文章列表
        <i v-show="writing" class="iconfont  icon-shangchuan  article-add" style="color:#42b983"
           @click="dialogVisible=true"></i>
        <i v-show="!writing" class="iconfont icon-jiahao article-add" @click="dialogVisible=true"></i>
      </h3>
      <article-list></article-list>
    </section>
    <div class="article-edit">
      <editor></editor>
    </div>
    <el-dialog
      :show-close="false"
      title="添加文章"
      :visible.sync="dialogVisible"
      size="tiny"
      :before-close="handleClose">
      <!--<span>添加文章</span>-->
      <el-input v-model="title" placeholder="输入文章标题"></el-input>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="createArticle()" :loading="loading">创 建</el-button>
  </span>
    </el-dialog>

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
  import MsgBox from '../../utils/MsgBox.js'
  import {mapGetters} from 'vuex'
  export default{
    components: {
      SideBar, ArticleList, Editor
    }, data(){
      return {
        dialogVisible: false,
        title: "",
        loading: false
      }
    },
    mounted:function(){
      this.$store.dispatch('getArticles')
    },
    computed: {
      ...mapGetters({
        aList: 'aList',
        publishing: 'publishing',
        writing: 'writing',
        nwwContent: 'newContent'
      })
    },
    methods: {
      handleClose(done) {
        done();

      },
      createArticle(){
        this.loading = true
        this.$store.dispatch('addArticle',this)
      }
    }
  }

</script>
