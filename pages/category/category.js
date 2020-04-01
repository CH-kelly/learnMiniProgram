// pages/category/category.js
import {
    getCategory, getSubcategory, getCateGoods
} from "../../service/category"

const cateTitle = ['pop', 'sell', 'new'];

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isActive: 0,
        cateTitle: [],
        maitkey: '',
        miniwallkey: '',
        maitkeyLists: [],
        miniwallkeyLists: {
            pop:[],
            sell:[],
            new:[],
        },
        cuttentIndex:'pop',
        titles: ['综合', '新品', '销量']
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this._getCategory();
    },
    //加载商品分类左边的数据
    _getCategory() {
        getCategory().then(res => {
            console.log(res.data.data[0].maitKey);
            console.log(res.data.data[0].maitKey);
            const maitkey = res.data.data[0].maitKey;
            const miniwallkey = res.data.data[0].miniWallkey;
            console.log(maitkey);
            console.log(miniwallkey);
            this._getSubcategory(maitkey);
            this._getCateGoods(miniwallkey,'pop');
            this._getCateGoods(miniwallkey,'sell');
            this._getCateGoods(miniwallkey,'new');

            this.setData({
                cateTitle: res.data.data,

            })
        })
    },
    _getSubcategory(maitkey) {
        getSubcategory(maitkey).then(res => {
            this.setData({
                maitkeyLists: res.data.data,
            })
        })
    },
    _getCateGoods(miniWallkey,type) {
        getCateGoods(miniWallkey, type).then(res => {
            console.log(res);
            const data = res.data;
            const miniwallkey = "miniwallkeyLists."+type;
            this.setData({
                [miniwallkey]: data,
            })
        })
    },
    clickCateTitle(event) {
        console.log(event);
        const index = event.currentTarget.dataset.index;
        const maitkey = event.currentTarget.dataset.maitkey;
        const miniwallkey = event.currentTarget.dataset.miniwallkey;
        wx.showToast({
            title: '加载中ing',
            icon: 'loading',
            duration: 1000
        })
        this._getSubcategory(maitkey);
        this._getCateGoods(miniwallkey,'pop');
        this._getCateGoods(miniwallkey,'sell');
        this._getCateGoods(miniwallkey,'new');

        this.setData({
            isActive: index,
            maitkey: maitkey,
            miniwallkey: miniwallkey
        })
    },
    tabControlClick(event){
        console.log(event);
        const index = event.detail.index;
        this.setData({
          cuttentIndex: cateTitle[index]
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