//使用promise封装wx:requese({})
// import request from "/service/network.js";
import request from "../../service/network.js"
Page({
  data: {
    students: [{
        name: "keke",
        age: '20'
      },
      {
        name: "lolo",
        age: '13'
      },
      {
        name: "uiui",
        age: '18'
      }
    ],
    counter: 0,
  },
  onLoad() {
    // request({
    //   url: 'http://code.nat200.top/index.php/index/index/indexGoods'
    // }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
  },

  addCounter() {
    this.setData({
      counter: this.data.counter + 1
    })
  },
  reduceCounter() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleItemclick(e) {
    console.log(e)
  },
  showActionSheet() {
    wx: wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: 'skyblue',
      success: function(res) {
        console.log(res);
      },
      fail: function(res) {

        console.log(res);
      },
    })
  },
  onShareAppMessage(options){
      console.log(options);
  }
})