<template>
  <ul class="list">
    <li class="list-item" v-for="(article,index) in aList" v-on:click="articleSelect(index)">
      <article class="article-item" :class="{'active':article['active']}">
        <h3 class="article-title">{{article['title']}}</h3>
        <h6 class="article-time">{{article['time']}}</h6>
        <p class="article-content" v-text="article['content']"></p>
      </article>
    </li>
  </ul>
</template>
<style scoped>
  .list {
    border-top: 1px solid #ececec;
  }

  .list-item {
    cursor: pointer;
    padding: 20px 0;
    width: 270px;
    margin: auto auto;
    border-bottom: 1px solid #ececec;
  }

  .list-item:hover .article-item {
    /*color: #42b983;*/
    border-left: 2px solid #42b983
  }

  .list-item:hover .article-item > .article-title {
    color: #42b983;
    /*border-left: 2px solid #42b983*/
  }

  .active {
    border-left: 2px solid #42b983;
  }

  .active > .article-title {
    color: #42b983;
  }

  .article-item {
    /*border-left: 2px solid #42b983;*/
    width: 100%;
    padding-left: 5px;
  }

  .article-title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 16px;
    line-height: 1.3;
    font-weight: 400;
    margin: 0 0 4px;
    padding-bottom: 0
  }

  .article-time {
    color: #7f8c8d;
    margin: 0 0 6px
  }

  .article-content {
    color: #7f8c8d;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    margin: 0;
    max-height: 51px;
    overflow: hidden;
    word-wrap: break-word
  }
</style>
<script>
  export default{
    data: () => ({
      active_item: 0,
      aList: [{
        title: "垂直居中的深入探讨",
        time: "2016-09-26 19:30:20",
        content: "这样一个路由链接，我已经点击进去，现在的路由就是这个，浏览器url 就是localhost：4000/query 但是，我再次点击这个查询首页 链接， 当前页面不会从新加载，我想重新初始化组件",
        active: true
      }, {
        title: "垂直居中的深入探讨",
        time: "2016-09-26 19:30:20",
        content: "这样一个路由链接，我已经点击进去，现在的路由就是这个，浏览器url 就是localhost：4000/query 但是，我再次点击这个查询首页 链接， 当前页面不会从新加载，我想重新初始化组件",
        active: false
      }, {
        title: "垂直居中的深入探讨",
        time: "2016-09-26 19:30:20",
        content: "这样一个路由链接，我已经点击进去，现在的路由就是这个，浏览器url 就是localhost：4000/query 但是，我再次点击这个查询首页 链接， 当前页面不会从新加载，我想重新初始化组件",
        active: false
      }, {
        title: "垂直居中的深入探讨",
        time: "2016-09-26 19:30:20",
        content: "这样一个路由链接，我已经点击进去，现在的路由就是这个，浏览器url 就是localhost：4000/query 但是，我再次点击这个查询首页 链接， 当前页面不会从新加载，我想重新初始化组件",
        active: false
      }]
    }),
    created: function () {
      //let self = this;
      //alert(this.active_item)
    }
    ,
    methods: {
      articleSelect(index){
        this.aList[index]['active'] = true;
        this.aList[this.active_item]['active'] = false;
        this.active_item = index;
        this.$parent.$emit("a-select",this.aList[index])
      }
    }
  }
</script>
