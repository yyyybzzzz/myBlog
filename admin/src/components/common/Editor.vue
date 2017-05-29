<template>
  <div style="height: 100%;overflow: hidden">
    <div class="article-"></div>
    <mavon-editor class="mavon-editor"></mavon-editor>
  </div>
</template>
<style scoped>
  .mavon-editor {
    height: 100%;
  }
</style>
<script>
  import {mavonEditor} from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'

  export default {
    name: 'editor',
    components: {
      mavonEditor
    }, mounted(){
      this.$parent.$on("a-select", (data) => {
        //alert(data["title"])
      })
    },
    methods: {}
  }

</script>
