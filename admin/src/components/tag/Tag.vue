<template>
  <div>
    <side-bar></side-bar>
    <div class="tag-container"></div>
  </div>
</template>
<style scoped>
  .tag-container{
    margin-left: 105px;
    background-color: #f00;
  }
</style>
<script>
  import SideBar from '../common/SideBar.vue'
  export default{
    components: {
      SideBar
    }
  }
</script>
