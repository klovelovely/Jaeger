//app.js
App({

  // 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
  onLaunch: function (path, query, scene) {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log('onLaunch: 当前调试时间 log 保存成功 => ', logs)

    // 获取初始化的上下文信息并打印
    var systemInfo = wx.getSystemInfoSync();
    console.log('小程序基础库版本号 => ', systemInfo);

    console.log('小程序路径 => ',  path);
    console.log('小程序query => ',  query);
    console.log('小程序场景值 => ',  scene);
  },

  // 当小程序启动，或从后台进入前台显示，会触发 onShow
  onShow: function(path, query, scene){
    
  },

  // 当小程序从前台进入后台，会触发 onHide
  onHide: function(){},

  // 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
  onError: function(msg){
    console.log(msg)
  },

  // 自定义全局方法, 用于获取微信用户信息(昵称, 头像)
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },

  // 自定义全局对象
  globalData:{
    userInfo:null,
    timeStamp: Date.now(),
    wx: {
      AppID:'',
      AppSecret:'',
      token: 'geOVj2xPbRhHKQiDqKFwrDp9qNg57eYXVmo0LBib6Kg_lyzcZ9ozMLtTkDQrRrv9By97lSUywHsiBQgTK6KNBYKaq4qFtJwOVR5mza'
    }
  }
  
})