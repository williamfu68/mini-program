// pages/mine/mine.js
  //利用缓存解决频繁授权问题
  //引入全局应用实例,这个应用实例就是整个小程序
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorize:false,
    currentUserInfo:{},
    canIUse:wx.canIUse('button.open-type.getUserInfo')
  },
  //通过按钮获取数据信息
  getUserInfo(e) {
    console.log(e);
    this.setUserInfo(e.detail.userInfo);
  },
  setUserInfo(u) {
    //往界面上绑定用户信息的时候，把用户信息存入全局数据
    //以便后期可以直接调用，无需再次授权
    if(u != null) {
      app.globalData.userInfo = u;
      // console.log(app);
      
      this.setData({
        authorize:true,
        currentUserInfo:u
      })
    }
  },
  //拨打电话
  callPhone() {
    wx.makePhoneCall({
      phoneNumber: '1008611',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.globalData.userInfo) {
      this.setUserInfo(app.globalData.userInfo);
    } else if(this.data.canIUse) {
      app.userInfoReadyCallback = (res)=>{
        this.setUserInfo(res.userInfo);
      }
    } else {
      //强制授权
      wx.getUserInfo({
        success:(res)=>{
          this.setUserInfo(res.userInfo);
        } 
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // wx.hideTabBar({
    //   animation: true,
    // })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})