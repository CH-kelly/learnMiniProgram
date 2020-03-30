App({
  globalData: {
    token: '',
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {
    //1.从缓存中取出token
    const token = wx.getStorageSync('token');
    
    //2.判断是否有token的值，并且验证
    if (token && token !== '') {
      this.checkToken(token);
      console.log('有token：' + token);
    }else{
      this.wxlogin();
      console.log('登录后有token：' + token);
    }
  },
  //检查登录是否超时
  checkToken(token){
    wx.request({
      url: 'http://code.nat200.top/index.php/index/index/checkToken',
      method:'post',
      data:{
        token:token
      },
      success:(r)=>{
        if(r.data.code == 0){
          this.wxlogin();
        }else{
          this.globalData.token = token;
        }
      }
    })
  },
  wxlogin() {
    //登录操作
    wx.login({
      success: (res) => {
        console.log(res);
        const code = res.code;
        wx.request({
          url: 'http://code.nat200.top/index.php/index/index/wxlogin',
          method: 'post',
          data: {
            code: code
          },
          success: (r) => {

            console.log(r);
            let token = r.data.token;
            let code = r.data.code;
            console.log(token);
            if (code === 1) {
              this.globalData.token = token;
              wx.setStorageSync('token', token);
            }
          }
        })
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {

  }
})