<template>
  <div style="height: 100%;overflow: hidden">
    <div class="article-"></div>
    <mavon-editor class="mavon-editor" v-model="value"></mavon-editor>
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
    }, data(){
      return {
        value: ""
      }
    },
    mounted(){
      //监听articleList组件发送的选择事件
      this.$bus.$on("a-select", (data) => {
        this.value = data['content']
      })
    },
    methods: {}
  }

</script>
