<template>
  <div class="article">
    <side-bar></side-bar>
    <section class="article-list">
      <h3 class="page-title"><i class="icon-wenzhang iconfont"></i> 文章列表
        <i class="iconfont icon-jiahao article-add"></i></h3>
      <article-list></article-list>
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
    border-right: 1px solid #ececec;
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
    height: 100%;
    overflow: auto;
  }
</style>
<script>
  import SideBar from './common/SideBar.vue'
  import ArticleList from './common/ArticleList.vue'
  import Editor from './common/Editor.vue'

  export default{
    components: {
      SideBar, ArticleList, Editor
    }
  }

</script>
