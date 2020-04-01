// pages/cart/childCpns/catr-tab-bar/catr-tab-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    AllSelected:{
      type:Boolean,
      value:true
    },
    allPrice:{
      type:Number,
      value:0.00
    },
    allCount:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickAllSelect(){
      this.triggerEvent('clickAllSelect');
    }
  }
})
