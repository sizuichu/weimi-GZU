/*
 * 
 * 微觅贵大微信小程序
 * author: jianbo（原版） 似最初基于二次开发
 * 开源协议：MIT
 *开源地址：https://github.com/sizuichu/weimi-GZU.git
 * Copyright (c) 2018 https://xiaomi.weask.club All rights reserved.
 *
 * 
 */


App({
    
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    

    
  },
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
  globalData:{
    userInfo:null,
    openid:'',
    isGetUserInfo:false,
    isGetOpenid:false

  }
})