<template>
  <div id="app">
    <transition name="fade">
      <router-view>

      </router-view>
    </transition>
  </div>
</template>

<script>
  import { MessageBox } from 'element-ui'
  import 'element-ui/lib/theme-default/index.css'
  export default {
    name: 'app',
    mounted(){
    },
    methods:{

    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>
