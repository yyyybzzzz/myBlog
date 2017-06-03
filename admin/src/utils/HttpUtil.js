export default{
  post(url,param={},headers={}){
    console.log(url)
    var init={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(param),
      // mode:'no-cors'
    }
    return fetch(url,init)
  },
  get(url,param={},headers={}){
    var init={
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      },
      // body:JSON.stringify(param),
      // mode:'no-cors'
    }
    return fetch(url,init)
  }
}
