// pages/goods/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:null,
    smallList:[],
    currentIndex:0,
    goodsList:[
      {
        id:1,
        pic:'/img/notebook9-flex.png',
        name:'商品名称',
        info:'商品介绍',
        price:9999
      },
      {
        id:2,
        pic:'/img/notebook9-flex.png',
        name:'商品名称',
        info:'商品介绍',
        price:9999
      },
    ]
  },
  //设置当前被选中的分类
  setCurrentIndex(e) {
    let index = e.currentTarget.id;
    
    this.setData({
      currentIndex:index
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id);
    
    let smList = [
      {
        id:1,
        name:'手机',
        cid:1
      },
      {
        id:2,
        name:'电脑',
        cid:1
      },
      {
        id:3,
        name:'平板',
        cid:1
      },
      {
        id:4,
        name:'数据线',
        cid:1
      },
      {
        id:5,
        name:'耳机',
        cid:1
      },
      {
        id:6,
        name:'凉席',
        cid:2
      },
      {
        id:7,
        name:'肥皂',
        cid:2
      },
      {
        id:8,
        name:'碗筷',
        cid:2
      },
      {
        id:9,
        name:'牙刷',
        cid:2
      },
      {
        id:10,
        name:'牙膏',
        cid:2
      },
      {
        id:11,
        name:'中性笔',
        cid:3
      },
      {
        id:12,
        name:'橡皮擦',
        cid:3
      },
      {
        id:13,
        name:'本子',
        cid:3
      },
      {
        id:14,
        name:'书籍',
        cid:3
      },
      {
        id:15,
        name:'笔芯',
        cid:3
      },
      {
        id:16,
        name:'篮球',
        cid:4
      },
      {
        id:17,
        name:'足球',
        cid:4
      },
      {
        id:18,
        name:'羽毛球',
        cid:4
      },
      {
        id:19,
        name:'乒乓球',
        cid:4
      },
      {
        id:20,
        name:'网球',
        cid:4
      },
      {
        id:21,
        name:'其他',
        cid:5
      },
      {
        id:22,
        name:'其他',
        cid:5
      },
      {
        id:23,
        name:'其他',
        cid:5
      },
      {
        id:24,
        name:'其他',
        cid:5
      },
      {
        id:25,
        name:'其他',
        cid:5
      },
    ]
    //按需显示左边的分类
    let list = smList.filter(item=>{
      return item.cid == options.id;
    })
    
    // console.log(list);
    
    this.setData({
      id:options.id,
      smallList:list
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