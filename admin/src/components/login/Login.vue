<template>
  <el-form
    class="login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item>
      <el-input type="text" auto-complete="off" placeholder="账号" v-model="uname"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" auto-complete="off" placeholder="密码" v-model="pwd"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" :loading="loading" @click="login">登录
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data(){
      return {
        uname: '',
        pwd: '',
        loading: false,
        disabled: false
      }
    },
    methods: {
      login(){
        this.$store.dispatch('login', this)
      }
    }
  }
</script>
<style scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    /*backgrautoound-clip: padding-box;*/
    margin: 180px auto;

    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>
