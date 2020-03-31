// pages/home/home.js
import {
  getMultiData,
  getIndexGoods
} from "../../service/home.js"

const types = ['pop','new','sell'];
const TOP_DISTANCE= 1000;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    titles: ['新款', '流行', '精选'],
    goods: {
      pop: {
        page: 0,
        list: []
      },
      new: {
        page: 0,
        list: []
      },
      sell: {
        page: 0,
        list: []
      }
    },
    currentType:'pop',
    isShowBackTop:false,
    isShowTabControl:false,
    tabControlScrollTop:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //1.获取首页轮播图和推荐
    this._getMultiData();

    //2.请求商品数据
    this._getGoodsData('pop');
    this._getGoodsData('new');
    this._getGoodsData('sell');

  },
  
  _getMultiData() {
    getMultiData().then(res => {
      if (res.statusCode == 200) {
        this.setData({
          banners: res.data.data.banner,
          recommends: res.data.data.recommend
        })
      }
    })
  },
  _getGoodsData(type) {
    const page = this.data.goods[type].page + 1;
    getIndexGoods(type, page).then(res => {
      //1.取出数据
      const lists = res.data.data.list;
      const oldLists = this.data.goods[type].list;
      oldLists.push(...lists);
      //2.保存数据
      const typeKey = "goods."+type+".list";
      const pageKye = "goods." + type +".page";
      this.setData({
        [typeKey]: oldLists,
        [pageKye]: page
      })

    })
  },
// 
  tabControlClick(event) {
    //1.取出index
    const index = event.detail.index;
    console.log(index);
    //2.设置currentType
    this.setData({
      currentType:types[index]
    })
    //3.设置index
    const tabControl = this.selectComponent('#tab-control');
    console.log(tabControl);
    tabControl.setData({
      cuttentIndex:index
    })
    const tabControl2 = this.selectComponent('#tab-control2');
    console.log(tabControl2);
    tabControl2.setData({
      cuttentIndex: index
    })

  },
  recommendLoadImg() {
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(res => {
      this.data.tabControlScrollTop = res.top;
    }).exec()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this._getGoodsData(this.data.currentType)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  //页面滚动触发事件的处理函数
  onPageScroll:function(options){
    //1.获取相应的位置
    const scrollTop = options.scrollTop;

    //2.是否显示回到顶部
    const flag = scrollTop >= TOP_DISTANCE;
    if (flag != this.data.isShowBackTop){
      this.setData({
        isShowBackTop:flag
      })
    }
    //3.是否显示tabcontrol
    const flag1 = scrollTop >= this.data.tabControlScrollTop;
    if(flag1 != this.data.isShowTabControl){
      this.setData({
        isShowTabControl:flag1
      })
    }
  }
})