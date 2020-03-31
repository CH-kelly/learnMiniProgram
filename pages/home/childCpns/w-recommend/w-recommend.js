// pages/home/childCpns/w-recommend/w-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isload:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    recommendLoadImg(){
      if (!this.data.isload){
        //发送事件
        this.triggerEvent('recommendLoadImg');

        this.data.isload = true;
      }
    }
  }
})
