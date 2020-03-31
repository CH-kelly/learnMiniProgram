// pages/detail/childCpns/detail-bottom-bar/detail-bottom-bar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: {
        isSelect: false

    },

    /**
     * 组件的方法列表
     */
    methods: {
        //客服
        clickService() {
            wx.showToast({
                title: '正在开发中',
                icon: 'loading',
                duration: 2000
            })
        },//客服
        clickShop() {
            wx.showToast({
                title: '正在开发中',
                icon: 'loading',
                duration: 2000
            })
        },//客服
        clickSelect() {
            const isSelct = !this.data.isSelect;

            this.setData({
                isSelect: isSelct
            })
            const msg = isSelct ? "收藏成功" : "取消收藏"
            wx.showToast({
                title: msg,
                icon: 'success',
                duration: 2000
            })
        }
    }
})
