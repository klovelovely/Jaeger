// pages/logs/index.js
var util = require('../../utils/util.js')

Page({
  data:{
    logs: []
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log('获取 logs 成功 =>', wx.getStorageSync('logs'))
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})