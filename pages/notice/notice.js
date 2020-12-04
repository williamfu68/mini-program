// pages/notice/notice.js
  //获取应用实例
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    noticeList:[
      // {
      //   id:'1',
      //   title:'学院首届国际学生毕业典礼举行',
      //   date:'2020-07-10',
      //   click:'0',
      //   url:'/img/newsInfo/NewsListImg_01.png'
      // },
      // {
      //   id:'2',
      //   title:'四川信息职业技术学院华为信息与网络技术(ICT)学院在我院成立',
      //   date:'2020-07-10',
      //   click:'1',
      //   url:'/img/newsInfo/NewsListImg_02.png'
      // },
      // {
      //   id:'3',
      //   title:'校企共建伺服传动研究中心成立暨签约仪式举行',
      //   date:'2020-07-10',
      //   click:'2',
      //   url:'/img/newsInfo/NewsListImg_03.png'
      // },
      // {
      //   id:'4',
      //   title:'学院开展庆祝中国共产党建党99周年系列活动',
      //   date:'2020-07-10',
      //   click:'3',
      //   url:'/img/newsInfo/NewsListImg_04.png'
      // },
      // {
      //   id:'5',
      //   title:'学院与旺苍县檬子乡举行城乡党建结对共建签约仪式',
      //   date:'2020-07-10',
      //   click:'4',
      //   url:'/img/newsInfo/NewsListImg_05.png'
      // },
      // {
      //   id:'6',
      //   title:'学院召开理事会成立大会暨第一届理事会全体会议',
      //   date:'2020-07-10',
      //   click:'5',
      //   url:'/img/newsInfo/NewsListImg_06.png'
      // },
      // {
      //   id:'7',
      //   title:'学院举办2020年校园歌手大赛决赛',
      //   date:'2020-07-10',
      //   click:'6',
      //   url:'/img/newsInfo/NewsListImg_07.png'
      // },
    ],
    x:0,
    y:0,
    currentPage:1,
    isOK:false //定义新闻数据是否全部加载
  },
  // 获取当前页面元素的尺寸
  getSize() {
    let w = wx.getSystemInfoSync().windowWidth-62;
    let h = wx.getSystemInfoSync().windowHeight-50;
    this.setData({
      x:w,
      y:h
    })
    //获取图片所在区域的尺寸
    // let q = wx.createSelectorQuery();
    // q.select('#movable-view').boundingClientRect();
    // q.exec(res=>{
    //   w -= res[0].width * 1.5;
    //   h -= res[0].height * 1.5;
    //   this.setData({
    //     x:w,
    //     y:h
    //   })
    // })  
  },
  getNoticeList() {
    //在调用新数据之前保留老数据
    let oldList = this.data.noticeList;
    //调用后端php接口读取新闻资讯内容
    wx.request({
      url:'http://127.0.0.1:8000/api/news',
      data:{
        page:this.data.currentPage
      },
      success:(res)=>{
        // console.log(res.data);
        let noticeList = res.data.data;
        // console.log(noticeList);
        
        this.setData({
          total:res.data.total
        })
        noticeList.forEach(item=>{
          item.pic = 'http://127.0.0.1:8000/storage/images/' + item.pic
        })
      
        //用新数据拼接老数据
        let list = oldList.concat(noticeList);
        // console.log(list);
        this.setData({
          noticeList:list
         })
        
       
        
        // console.log(noticeList);
    //判断数据是否已经加载完毕
      if(this.data.total == this.data.noticeList.length) {
        this.setData({
          isOK:true
        })
      }
      }
    })
    //加载完毕后停止加载动画
    wx.stopPullDownRefresh();
    wx.hideNavigationBarLoading();
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //调用获取页面尺寸的函数
    this.getSize();
    this.getNoticeList();
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
    //这里可以实现当用户下来刷新时，重新获取数据
    this.getNoticeList();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //用户拖动页面到底部的时候：currentPage自增1
    this.data.currentPage++;
    // console.log(this.data.currentPage);
    
    this.getNoticeList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})