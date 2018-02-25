/*
 * 
 * WordPres版微信小程序
 * author: jianbo
 * organization: 守望轩  www.watch-life.net
 * github:    https://github.com/iamxjb/winxin-app-watch-life.net
 * 技术支持微信号：iamxjb
 * 开源协议：MIT
 * Copyright (c) 2017 https://www.watch-life.net All rights reserved.
 */



//配置域名,域名只修改此处。
//如果wordpress没有安装在网站根目录请加上目录路径,例如："www.watch-life.net/blog"
var DOMAIN = "school.mepuw.cn";
var MINAPPTYPE="1";//小程序的类型，如果是企业小程序请填：0 ，如果是个人小程序请填：1
var WEBSITENAME="微觅贵大"; //网站名称
var ABOUTID = 18; //wordpress网站"页面"的id,注意这个"页面"是wordpress的"页面"，不是"文章"
var PAGECOUNT='10'; //每页文章数目
var CATEGORIESID='all'  //显示全部的分类
//var CATEGORIESID = '1,1059,98,416,189,374,6,463';//指定显示的分类的id
var PAYTEMPPLATEID = 'YSRlteyVCqiVV_x2i8qrZ5qlIdRhPxBEtTTqcjxCozw';//赞赏消息模版id
var REPLAYTEMPPLATEID = '8MiLg-L5cK7Ml3tNZX7cy8wp2rkJeT02o8WxKtUoFvc';//回复评论消息模版id
var ZANIMAGEURL = 'http://tu.weask.club/18-2-24/23762200.jpg';//微信赞赏的图片链接，用于个人小程序的赞赏
 //首页图标导航
 //参数说明：'name'为名称，'image'为图标路径，'url'为跳转的页面，'redirecttype'为跳转的类型，apppage为本小程序的页面，miniapp为其他微信小程序,webpage为web-view的页面
 //        'appid' 当redirecttype为miniapp时，这个值为其他微信小程序的appid，如果redirecttype为apppage，webpage时，这个值设置为空。
 //         'extraData'当redirecttype为miniapp时，这个值为提交到其他微信小程序的参数，如果redirecttype为apppage，webpage时，这个值设置为空。
var INDEXNAV = [
  { id: '1', name: '图书馆', image: '../../images/mitushu.png', url: 'pages/index/index', redirecttype: 'miniapp', appid: 'wxe756120c4f963bbc', extraData:'' },
    { id: '2', name: '排行', image: '../../images/miwenku.png', url: '../hot/hot', redirecttype: 'apppage', appid: '', extraData:''},
    { id: '3', name: '专题', image: '../../images/mizhuanti.png', url: '../topic/topic', redirecttype: 'apppage', appid: '', extraData:''},
    { id: '4', name: '觅校园', image: '../../images/mishetuan.png', url: '../topic/topic', redirecttype: 'apppage', appid: '', extraData: '' },
    
    ]

export default {
  getDomain: DOMAIN,
  getWebsiteName: WEBSITENAME,
  getAboutId: ABOUTID,
  getPayTemplateId: PAYTEMPPLATEID,
  getPageCount: PAGECOUNT,
  getCategoriesID :CATEGORIESID,
  getIndexNav: INDEXNAV,
  getReplayTemplateId: REPLAYTEMPPLATEID,
  getMinAppType: MINAPPTYPE,
  getZanImageUrl: ZANIMAGEURL
}

/*获取当前页url*/
function getCurrentPageUrl() {
  var pages = getCurrentPages()    //获取加载的页面
  var currentPage = pages[pages.length - 1]    //获取当前页面的对象
  var url = currentPage.route    //当前页面url
  return url
}

