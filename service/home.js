import sendRequest from "./network.js"

//首页banner
export function getMultiData(){
  return sendRequest({
    url:'/multidata'
    
  })
}

//首页商品列表
export function getIndexGoods(type,page){
  return sendRequest({
    url:'/indexGoods',
    data:{
      type,page
    }
  })
}

//详情数据
export function getGoodDetail(iid){
 return sendRequest({
   url:'/detail',
   data:{
     iid
   }
 })
}