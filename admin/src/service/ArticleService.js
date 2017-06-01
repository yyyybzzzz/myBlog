import Http from './BasicHttp.js'
import Vue from 'vue'
var b = new Vue();
export default {
  getArtcles(url){
    Http.get(url).then((data) => {
      b.$bus.data.aList = data
      b.$bus.$emit("aList")
      b.$bus.$emit("a-select", b.$bus.data.currentId)
    }).catch((e) => {
      console.log(e.message)
    })
  }
}
