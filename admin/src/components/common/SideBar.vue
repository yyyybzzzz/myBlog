<template>
  <div class="sidebar">

    <img class="avatar" src="../../assets/img/avatar2.jpg">

    <ul class="nav">
      <li>
        <router-link to="/article" class="nav-button"><i
          class='icon-wenzhang iconfont'></i></router-link>
      </li>
      <li>
        <router-link to="/tag" class="nav-button"><i
          class='icon-tag1 iconfont'></i></router-link>
      </li>
      <li>
        <router-link to="/me" class="nav-button"><i class='icon-wo iconfont'></i></router-link>
      </li>
    </ul>
    <ul class="logout">
      <li><a class="nav-button" href="#"><i class='icon-tuichu iconfont'></i></a></li>
    </ul>
  </div>
</template>

<script>
  export default{
    name: "SideBar",
  }
</script>
<style scoped>
  .sidebar {
    position: fixed;
    background-color: #f8f8f8;
    width: 80px;
    height: 100%;
    text-align: center;
    /*padding: 0px 12px 0px 12px;*/
    border-right: 1px solid #ececec;
    left: 0;
    top: 0;
  }

  .avatar {
    margin-top: 15px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #bbb;
    box-shadow: 3px 3px 3px #aaa;
  }

  .nav {
    border-top: 1px solid #ececec;
    width: 80%;
    margin-top: 30px;
    text-align: center;
    display: inline-block;
  }

  .nav > li {
    /*margin-top: 30px;*/
    padding: 20px 0;
  }

  .logout {
    width: 80%;
    text-align: center;
    display: inline-block;
    position: absolute;
    bottom: 0;
    display: block;
  }

  .logout > li {
    padding: 20px 0;
  }

  .nav-button {
    text-align: center;
    display: inline-block;
    color: #42b983;
    background-color: #fff;
    width: 50px;
    height: 50px;
    border: 1px solid #ececec;
    border-radius: 50%;
    line-height: 50px;
    box-sizing: border-box;
    box-shadow: 5px 5px 3px #aaa;

  }

  .router-link-active {
    border: 1px solid #42b983;
    color: #fff;
    background-color: #42b983;
    border: 1px solid #42b983;
  }

  .nav-button:hover {
    color: #fff;
    background-color: #42b983;
    border: 1px solid #42b983;
  }

  .iconfont {
    font-size: 22px;
  }
</style>
