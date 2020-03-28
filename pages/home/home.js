// pages/home/home.js
Page({
  data:{
    students:[
      {name:"keke",age:'20'},
      { name: "lolo", age: '13' },
      { name: "uiui", age: '18' }
    ],
    counter:0,
  },
  addCounter(){
    this.setData({
      counter:this.data.counter + 1
    })
  },
  reduceCounter(){
    this.setData({
      counter:this.data.counter - 1
    })
  }
})