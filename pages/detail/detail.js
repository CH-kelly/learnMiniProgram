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
            itemInfo.desc = result.itemInfo.desc;
            itemInfo.imUrl = result.itemInfo.imUrl;
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
    clickAddCart(){
        const cart = wx.getStorageSync('cartList');
        const lists = {};
        lists.title = this.data.itemInfo.title;
        lists.desc = this.data.itemInfo.desc;
        lists.lowNowPrice = this.data.itemInfo.lowNowPrice;
        lists.imUrl = this.data.banners[0];
        lists.iid = this.data.iid;
        lists.selected = true;
        lists.count = 1;
        if(!lists.title){

            wx.showToast({
                title: '商品添加失败',
                icon: 'none',
                duration: 2000
            })
            return ;
        }

        if(cart){ //如果有cart就判断是否有iid相同得
            var flag = false;
            for (var i=0;i<cart.length;i++){
                if(cart[i].iid === lists.iid){
                    flag = true
                    cart[i].count +=1
                }
            }
            try {
                if(flag === false){
                    cart.push(lists);
                }
                wx.setStorageSync('cartList', cart)
            } catch (e) {
                console.log(e);
            }
        }else{
            const cartList = [];
            cartList.push(lists);
            console.log(cartList);
            try {
                wx.setStorageSync('cartList', cartList)
            } catch (e) {
                console.log(e);
            }
        }
        wx.showToast({
            title: '添加成功',
            icon: 'success',
            duration: 2000
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
