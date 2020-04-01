// pages/cart/cart.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cartList: [],
        AllSelected: true,
        allPrice: 0.00,
        allCount: 0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    _getAllSelect(cartList) {
        return !cartList.find(item => item.selected === false);
    },
    _getAllPrice(cartList) {
        return cartList.filter(item => item.selected).reduce((prev, item) => {
            return prev + item.count * item.lowNowPrice
        }, 0)
    },
    _getAllCount(cartList) {
        return cartList.filter(item => item.selected).reduce((prev, item) => {
            return prev + item.count
        }, 0);
    },
    //取消/选中
  clickCartItem(event){
      const iid = event.detail;
      const cartList = this.data.cartList

      for (var i=0;i<cartList.length;i++){
          if(cartList[i].iid === iid){
              cartList[i].selected = !cartList[i].selected
          }
      }
      try {
          wx.setStorageSync('cartList', cartList)
          this.setData({
              cartList: cartList,
              AllSelected: this._getAllSelect(cartList),
              allPrice: this._getAllPrice(cartList),
              allCount: this._getAllCount(cartList),
          })
      } catch (e) {
          console.log(e);
      }
    },
    //数量减1
    clickCountReduce(event){
        const iid = event.detail;
        const cartList = this.data.cartList

        for (var i=0;i<cartList.length;i++){
            if(cartList[i].iid === iid){
                cartList[i].count = cartList[i].count-1
            }
        }
        try {
            wx.setStorageSync('cartList', cartList)
            this.setData({
                cartList: cartList,
                AllSelected: this._getAllSelect(cartList),
                allPrice: this._getAllPrice(cartList),
                allCount: this._getAllCount(cartList),
            })
        } catch (e) {
            console.log(e);
        }
    },
    //数量加1
    clickCountAdd(event){
        const iid = event.detail;
        const cartList = this.data.cartList

        for (var i=0;i<cartList.length;i++){
            if(cartList[i].iid === iid){
                cartList[i].count = cartList[i].count+1
            }
        }
        try {
            wx.setStorageSync('cartList', cartList)
            this.setData({
                cartList: cartList,
                AllSelected: this._getAllSelect(cartList),
                allPrice: this._getAllPrice(cartList),
                allCount: this._getAllCount(cartList),
            })
        } catch (e) {
            console.log(e);
        }
    },
    //全选/全部选
    clickAllSelect(){
        const cartList = this.data.cartList;
        const flag = this._getAllSelect(cartList);
        if(!flag){
            cartList.forEach(item=>item.selected = true)
        }else{
            cartList.forEach(item=>item.selected = false)
        }
        try {
            wx.setStorageSync('cartList', cartList)
            this.setData({
                cartList: cartList,
                AllSelected: this._getAllSelect(cartList),
                allPrice: this._getAllPrice(cartList),
                allCount: this._getAllCount(cartList),
            })
        } catch (e) {
            console.log(e);
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
        const cartList = wx.getStorageSync('cartList');
        this.setData({
            cartList: cartList,
            AllSelected: this._getAllSelect(cartList),
            allPrice: this._getAllPrice(cartList),
            allCount: this._getAllCount(cartList),
        })


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