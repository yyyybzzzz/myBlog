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
    },
    data(){
        return{
            value:""
        }
    },
    mounted(){
        this.$parent.$on("a-select",(index)=>{
            this.value=this.$store.state.aList[index]['content'];
        })
    },

    watch: {
      value(val){
        console.log("zyb")
        //当内容改变时 修改当前的全局状态为正在写
        this.$store.state.writing = !(val == this.$store.state.aList[this.$store.state.currentId]['content'])
        console.log(this.$store.state.writing)
        //console.log(this.$bus.data.writing)
      }
    },
  }

</script>
