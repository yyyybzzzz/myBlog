<template>
  <div style="height: 100%">
    <div class="article-title"></div>
    <div class="article-"></div>
    <mavon-editor style="height: 70%"></mavon-editor>

  </div>
</template>
<style scoped>
  .article-title {
    width: 100%;
    height: 65px;
    border-bottom: 1px solid #ececec;
  }
</style>
<script>
  import {mavonEditor} from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'

  export default {
    name: 'editor',
    components: {
      mavonEditor
    }
  }

</script>
