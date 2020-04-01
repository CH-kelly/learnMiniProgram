// components/tab-control/tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    cuttentIndex: 0

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击
    checkControlItem(e) {
      const index = e.currentTarget.dataset.index;
      const item = e.currentTarget.dataset.item;

      //1赋值
      this.setData({
        cuttentIndex: index
      })
      //2.传递给上级
      this.triggerEvent('itemclick', {
        index: index,
        title: item
      })
    }

  },
})