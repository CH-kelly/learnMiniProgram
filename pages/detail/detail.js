// pages/detail/detail.js
import {
    getGoodDetail, getRecommend
} from "../../service/home.js"

Page({

    /**
     * 页面的初始数据
     */
    data: {
        iid: "",
        banners: [],
        itemInfo: {},
        shopInfo: {},
        goodsInfo: {},
        paramInfo: {},
        comment: {},
        recommendGoods: {},
        isShowBackTop: false,
        top: 0,

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options);
        const iid = options.iid
        this.setData({
            iid: iid
        })
        //调用详情数据
        this._getGoodDetail(iid);
        //调用推荐数据
        this._getRecommendGoods();

    },

    _getGoodDetail(iid) {
        getGoodDetail(iid).then(res => {
            const result = res.data.result;
            const oldBanners = result.itemInfo.topImages;

            const itemInfo = {};
            itemInfo.title = result.itemInfo.title;
            itemInfo.discountBgColor = result.itemInfo.discountBgColor;
            itemInfo.discountDesc = result.itemInfo.discountDesc;
            itemInfo.lowNowPrice = result.itemInfo.lowNowPrice;
            itemInfo.lowPrice = result.itemInfo.lowPrice;
            itemInfo.columns = result.columns;
            itemInfo.services = result.shopInfo.services;


            const shopInfo = {};
            shopInfo.cGoods = result.shopInfo.cGoods;
            shopInfo.cSells = result.shopInfo.cSells;
            shopInfo.name = result.shopInfo.name;
            shopInfo.score = result.shopInfo.score;
            shopInfo.shopLogo = result.shopInfo.shopLogo;
            const goodsInfo = result.detailInfo;

            const paramInfo = result.itemParams;
            const comment = result.rate;

            this.setData({
                banners: oldBanners,
                itemInfo: itemInfo,
                shopInfo: shopInfo,
                goodsInfo: goodsInfo,
                paramInfo: paramInfo,
                comment: comment
            })
        })
    },
    _getRecommendGoods() {
        getRecommend().then(res => {
            console.log(res);
            const recommendGoods = res.data.data.list;
            this.setData({
                recommendGoods: recommendGoods
            })
        })
    },
    monitorScroll(options) {
        const scrollTop = options.detail.scrollTop;
        const flag = scrollTop >= 1000;
        if (flag !== this.data.isShowBackTop) {
            this.setData({
                isShowBackTop: flag
            })
        }
    },
    clickBackTop() {
        this.setData({
            top: 0
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

    }

})
