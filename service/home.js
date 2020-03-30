import sendRequest from "./network.js"

export function getMultiData(){
  return sendRequest({
    url:'/multidata'
    
  })
}