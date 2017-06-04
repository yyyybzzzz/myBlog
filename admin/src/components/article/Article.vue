<template>
  <div class="article">
    <side-bar></side-bar>
    <section class="article-list">

      <h3 class="page-title"><i class="icon-wenzhang iconfont"></i> 文章列表
        <i v-show="writing|publishing" class="iconfont  icon-shangchuan  article-add" style="color:#42b983"
           @click="publishVisible=true"></i>
        <i v-show="!(writing|publishing)" class="iconfont icon-jiahao article-add" @click="addVisible=true"></i>
      </h3>
      <article-list></article-list>
    </section>
    <div class="article-edit">
      <editor></editor>
    </div>
    <el-dialog
      :show-close="false"
      title="新建文章"
      :visible.sync="addVisible"
      size="tiny"
      :before-close="handleClose">
      <el-input v-model="title" :disabled="disabled" placeholder="请输入文章标题"></el-input>
      <span slot="footer" class="dialog-footer">
    <el-button @click="addVisible=false" :disabled="disabled">取消</el-button>
    <el-button type="primary" @click="createArticle" :loading="loading" :disabled="disabled">创 建</el-button>
  </span>
    </el-dialog>
    <el-dialog
      :show-close="false"
      title="发布文章"
      :visible.sync="publishVisible"
      size="tiny"
      :before-close="handleClose">
      <span>文章已更改，是否发布文章？</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="publishArticle(0)" :loading="loading1" :disabled="disabled">保存为草稿</el-button>
    <el-button type="primary" @click="publishArticle(1)" :loading="loading" :disabled="disabled">发 布</el-button>
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
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
  export default{
    components: {
      ElInput,
      SideBar, ArticleList, Editor
    }, data(){
      return {
        addVisible: false,
        title: "",
        loading: false,
        loading1: false,
        publishVisible: false,
        disabled: false
      }
    },
    mounted: function () {
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
        console.log("here")
        this.disabled = false
        this.loading = false
        this.loading1 = false
        done();

      },
      createArticle(){
        this.disabled = true
        this.loading = true
        this.$store.dispatch('addArticle', this)
      },
      publishArticle(type){
        this.disabled = true
        if (type == 0) {
          this.loading1 = true;
        } else {
          this.loading = true;
        }
        this.$store.dispatch('publishArticle', {vue: this, type: type})
      }
    }
  }

</script>
