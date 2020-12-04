// pages/goods/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:null,
    goods:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //根据请求的商品编号,去后端读取相应的商品数据
    let goods = {
      name:'samsung notebook9-flex',
      pic:'/img/notebook9-flex.png',
      color:'珊瑚蓝',
      price:9999,
      createtime:'2020-07-20 12:12:12',
      info:'商品详细介绍',
      student:{student:'180001',name:'刘备',level:'9'}
    }
    this.setData({
      id:options.id,
      goods:goods
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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