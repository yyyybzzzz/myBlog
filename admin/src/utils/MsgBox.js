/**
 * Created by zyb on 2017/6/1.
 */
import Vue from 'vue'
var vue = new Vue()
export default {
  alert(title, msg, callback){
    vue.$alert(msg, title, {
      confirmButtonText: '确定',
      callback: callback
    });
  },
  message(msg){
    vue.$message(msg)
  }
}
