// pages/notice/noticeInfo/noticeInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noticeInfoList:[
      // {
      //   id:1,
      //   title:'新闻标题',
      //   date:'2020-07-10',
      //   click:'0',
      //   content:''
      // }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url:'http://127.0.0.1:8000/api/show' ,
      data:{
        id:options.id
      },
      success:(res)=>{
        // console.log(res.data);
        let list = [];
        list.push(res.data);
        // console.log(list);
        
        list.forEach(item=>{
          item.pic = 'http://127.0.0.1:8000/storage/images/' + item.pic;
        })
        
        this.setData({
          noticeInfoList:res.data
        })
        // console.log(this.data.noticeInfoList);
        
      }
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