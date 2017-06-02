<template>
  <div style="height: 100%;overflow: hidden">
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
      return {
        value: "",
        editable: true
      }
    },
    mounted(){
//      console.log(this)f8f8f8
      this.$bus.$on("a-select", (index) => {
        this.value = this.$store.state.aList[index]['content']
      });
    },
    watch: {
      value(val){
        console.log(val)
        this.$store.state.newContent = val
        this.$store.state.writing = !(val == this.$store.state.aList[this.$store.state.currentId]['content'])
      }
    },
  }

</script>
