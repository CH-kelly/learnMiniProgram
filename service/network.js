export default function request(option){
  return new Promise((resove,reject)=>{
    wx:wx.request({
      url: option.url,
      data: option.data || {},
      method: option.method || 'GET',
      success: resove,
      fail: reject
    })
  })
}