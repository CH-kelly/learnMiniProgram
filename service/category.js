import sendRequest from "./network"

export function getCategory(){
    return sendRequest({
        url:'/category'
    })
}