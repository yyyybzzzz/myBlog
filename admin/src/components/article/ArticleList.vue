<template>
  <ul class="list">
    <li class="list-item" v-for="(article,index) in aList" v-on:click="articleSelect(index)">
      <article class="article-item" :class="{'active':article['active']}">
        <div><h3 class="article-title">{{article['title']}}</h3>
          <h3 class="icon-shanchu iconfont"></h3>
          <h3 class="icon-xiugai iconfont"></h3>
        </div>
        <h6 class="article-time">{{article['time']}}</h6>
        <p class="article-content" v-text="article['content']"></p>
      </article>
    </li>
  </ul>
</template>
<style scoped>
  .list {
    border-top: 1px solid #dcdcdc;
  }

  .list-item {
    cursor: pointer;
    padding: 20px 0;
    width: 270px;
    margin: auto auto;
    border-bottom: 1px solid #dcdcdc;
  }

  .list-item:hover .article-item {
    /*color: #42b983;*/
    border-left: 2px solid #42b983
  }

  .list-item:hover .article-item > div > .article-title {
    color: #42b983;
    /*border-left: 2px solid #42b983*/
  }

  .active {
    border-left: 2px solid #42b983;
  }

  .active > div > .article-title {
    color: #42b983;
  }

  .active > div > .iconfont {
    display: inline-block;
  }

  .article-item {
    /*border-left: 2px solid #42b983;*/
    width: 100%;
    padding-left: 5px;
  }

  .article-title {
    display: inline-block;
    width: 170px;
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

  .iconfont {
    float: right;
    display: none;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
    white-space: nowrap;
    margin: 0  12px 4px 0;
    color: #42b983;
    overflow: hidden;
  }
</style>
<script>
  export default{
    data: () => ({
      active_item: 0,
      aList: [{
        "title": "垂直居中的深入探讨122345566666666",
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
      this.$bus.$emit("a-select", this.aList[0])
    },
    methods: {
      articleSelect(index){
        if (index != this.active_item) {
          this.aList[index]['active'] = true;
          this.aList[this.active_item]['active'] = false;
          this.active_item = index;
          //发送选择事件 在editor组件中监听事件
          this.$bus.$emit("a-select", this.aList[index])
        }
      }
    }
  }
</script>
