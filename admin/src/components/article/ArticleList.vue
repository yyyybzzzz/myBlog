<template>
  <ul class="list">
    <li class="list-item" v-for="(article,index) in aList" v-on:click="articleSelect(index)">
      <article class="article-item" :class="{'active':article['active']}">
        <div><h3 class="article-title">{{article['title']}}</h3>
          <h3 class="icon-shanchu iconfont" @click='del'></h3>
          <h3 class="icon-xiugai iconfont"></h3>
        </div>
        <h6 class="article-time">{{article['time'] | formatTime}}</h6>
        <p class="article-content" v-text="article['content']"></p>
      </article>
    </li>
  </ul>
</template>
<style scoped>
  .list {
    border-top: 1px solid #dcdcdc;
    /*margin-top: 60px;*/
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
    margin: 0 12px 4px 0;
    color: #42b983;
    overflow: hidden;
  }

</style>
<script>
  import {mapGetters} from 'vuex'
  export default{
    computed: {
      ...mapGetters({
        aList: 'aList',
        currentId: 'currentId'
      })
    },
    methods: {
      articleSelect(index){
        if (!this.$store.state.writing) {
          if (index != this.currentId) {
            this.$store.commit('articleSelect', index)
          }
        } else {
          this.$parent.publishVisible = true
        }
      },
      del(){
        this.$store.dispatch('delete')
      }
    },
    filters: {
      formatTime(time){
        return new Date(parseInt(time)).toLocaleString().replace(/:\d{1,2}$/, ' ');
      }
    }
  }

</script>
