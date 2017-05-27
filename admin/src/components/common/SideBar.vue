<template>
  <div class = "sidebar">
    <div class="avatar">
      <img src="../../assets/img/avatar2.jpg">
    </div>
    <hr>
    <ul>
      <li><img src="../../assets/img/blog.png"></li>
      <li><img src="../../assets/img/sign.png"></li>
      <li><img src="../../assets/img/setting.png"></li>
    </ul>
    <hr>
    <div class="logout-panel">
      <img src="../../assets/img/logout.png"></div>
  </div>
</template>
<script>
export default{
  name:"sidebar",
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style scoped>
.sidebar{
  position: relative;
  background-color: #ffffff;
  width:100px;
  height:100%;
}
.avatar>img{
  width: 60px;
  height: 60px;
  margin: 30px auto;
  border-radius: 60px;
  border: 2px solid #58B7FF
}
hr{
  width: 80px;
  margin: 0 auto;
  border:none;
  border-top:1px dotted #58B7FF;
}
img{
  margin-bottom: 60px;
  width: 50px;
  height: 50px;
}
ul{
  display: inline-block;
  margin-top:50px
}
.logout-panel{
  margin-top:60px;
  text-align: center;
  width: 100%;
}
.logout-panel>img{
  margin:0 auto;
  width: 40px;
  height: 40px
}
</style>
