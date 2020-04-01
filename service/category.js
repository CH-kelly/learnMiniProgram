import sendRequest from "./network"

export function getCategory(){
    return sendRequest({
        url:'/category'
    })
}
export function getSubcategory(maitKey){
    return sendRequest({
        url:'/subcategory',
        data:{
            maitKey
        }
    })
}
export function getCateGoods(wallkey,type){
    //cateGoods?type=pop&miniWallkey=10062603
    return sendRequest({
        url:'/cateGoods',
        data:{
            miniWallkey:wallkey,
            type:type
        }
    })
}