// pages/cart/childCpns/catr-list/catr-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cartList:{
      type:Array,
      value:[]
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
    clickCartItem(event){
      const iid = event.currentTarget.dataset.iid;
      if(iid){
        this.triggerEvent('clickCartItem',iid);
      }
    },
    //数量减1
    clickCountReduce(event){
      const iid = event.currentTarget.dataset.iid;
      const count = event.currentTarget.dataset.count;
      if(count <=1){
        wx.showToast({
          title: '商品最低为1',
          icon: 'none',
          duration: 2000
        })
        return ;
      }
      if(iid){
        this.triggerEvent('clickCountReduce',iid);
      }
    },
    //数量加1
    clickCountAdd(event){
      const iid = event.currentTarget.dataset.iid;
      if(iid){
        this.triggerEvent('clickCountAdd',iid);
      }
    }
  }
})
