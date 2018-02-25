/*
 * 
 * 微觅贵大微信小程序
 * author: jianbo（原版） 似最初基于二次开发
 * 开源协议：MIT
 *开源地址：https://github.com/sizuichu/weimi-GZU.git
 * Copyright (c) 2018 https://xiaomi.weask.club All rights reserved.
 *
 */

var util = require('util.js');
var wxApi = require('wxApi.js')
var wxRequest = require('wxRequest.js')
var Api = require('api.js');
var app = getApp();
module.exports = {
    //获取用户信息和openid
    getUsreInfo: function () {       
        var wxLogin = wxApi.wxLogin();
        var jscode = '';
        wxLogin().then(response => {
            jscode = response.code
            var wxGetUserInfo = wxApi.wxGetUserInfo()
            return wxGetUserInfo()
        }).
            //获取用户信息
            then(response => {
                console.log(response.userInfo);
                console.log("成功获取用户信息(公开信息)");
                app.globalData.userInfo = response.userInfo;
                app.globalData.isGetUserInfo = true;
                var url = Api.getOpenidUrl();
                var data = {
                    js_code: jscode,
                    encryptedData: response.encryptedData,
                    iv: response.iv,
                    avatarUrl: response.userInfo.avatarUrl,
                    nickname: response.userInfo.nickName
                }
                var postOpenidRequest = wxRequest.postRequest(url, data);
                //获取openid
                postOpenidRequest.then(response => {
                    if (response.data.status == '200') {
                        //console.log(response.data.openid)
                        console.log("openid 获取成功");
                        app.globalData.openid = response.data.openid;
                        app.globalData.isGetOpenid = true;

                    }
                    else {
                        console.log(response);
                    }
                })               
            }).catch(function (error) {
                console.log('error: ' + error.errMsg);
            })
    }
}