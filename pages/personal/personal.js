// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userAvatar:'/assets/personal/avatar.png',
    userName:'登录',
    isLogin:true,
    item1:[
      {icon:'message.png',msg:'我的消息'},
      {icon:'pointer.png',msg:'积分商城'},
      {icon:'vip.png',msg:'会员卡'},
    ],
    item2:[
      {icon:'cart.png',msg:'我的购物车'},
      {icon:'shopping.png',msg:'下载购物APP'},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleGetUserInfo(res){
    console.log(res);
    const userInfo = res.detail.userInfo;
    if(userInfo){
    
      this.setData({
        userAvatar: userInfo.avatarUrl,
        userName: userInfo.nickName,
        isLogin: false
      })
      try {
        wx.setStorageSync('userInfo', userInfo)
      } catch (e) {
        console.log(e);
      }
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const userInfo = wx.getStorageSync('userInfo')
    if (userInfo){
      this.setData({
        userAvatar: userInfo.avatarUrl,
        userName: userInfo.nickName,
        isLogin:false
      })
    }



  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})