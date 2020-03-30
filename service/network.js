import {
  baseUrl
} from "./config.js"

export default function request(option) {
  return new Promise((resove, reject) => {
    wx: wx.request({
      url: baseUrl + option.url,
      data: option.data || {},
      method: option.method || 'GET',
      success: resove,
      fail: reject
    })
  })
}