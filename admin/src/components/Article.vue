<template>
  <div class="article">
    <side-bar></side-bar>
    <div class="test"></div>
    <div class="post-edit">
    </div>
  </div>
</template>
<style scoped>
  .article {
    margin-left: 105px;
    height: 100%;

  }

  .test {
    float: left;
    background-color: #fff;
    border-right: 1px solid #ececec;
    width: 300px;
    height: 100%;
    overflow-y: auto;
  }
  .post-edit{
    background-color: #f00;
    width: 300px;
    height: 100%;
    overflow: auto;
  }
</style>
<script>
  import SideBar from './common/SideBar.vue'

  export default{
    components: {
      SideBar
    }
  }

</script>
