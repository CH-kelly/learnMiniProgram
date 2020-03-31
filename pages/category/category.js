// pages/category/category.js
import {
  getCategory
}from "../../service/category"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isActive:0,
    cateTitle:[],
    maitkey:'',
    miniwallkey:'',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getCategory();
  },
  //加载商品分类左边的数据
  _getCategory(){
    getCategory().then(res=>{
      this.setData({
        cateTitle:res.data.data
      })
    })
  },
  clickCateTitle(event){
    console.log(event);
    const index = event.currentTarget.dataset.index;
    const maitkey = event.currentTarget.dataset.maitkey;
    const miniwallkey = event.currentTarget.dataset.miniwallkey;
    this.setData({
      isActive: index,
      maitkey: maitkey,
      miniwallkey: miniwallkey
    })
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