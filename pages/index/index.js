//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgList:[],
    cList:[
      // {
      //   id:1,
      //   cname:'电子产品',
      //   pic:'/img/1.png'
      // },
      // {
      //   id:2,
      //   cname:'生活用品',
      //   pic:'/img/2.png'
      // },
      // {
      //   id:3,
      //   cname:'学习用品',
      //   pic:'/img/3.png'
      // },
      // {
      //   id:4,
      //   cname:'体育用品',
      //   pic:'/img/4.png'
      // },
      // {
      //   id:5,
      //   cname:'其他',
      //   pic:'/img/5.png'
      // },
    ],
    goodsList:[
      {
        pic:'/img/notebook9-flex.png',
        name:'Samsung notebook9-flex',
        info:'商务笔记本',
        price:9999
      },
      {
        pic:'/img/notebook9-flex.png',
        name:'Samsung notebook9-flex',
        info:'商务笔记本',
        price:9999
      },
      {
        pic:'/img/notebook9-flex.png',
        name:'Samsung notebook9-flex',
        info:'商务笔记本',
        price:9999
      },
    ]
  },
  //事件处理函数
  onLoad: function () {
    //轮播图数据
    wx.request({
      url: 'http://127.0.0.1:8000/api/boutique/getAll',
      success:(res)=>{
        // console.log(res.data);
        let list = res.data;
        list.forEach((item)=>{
          item.pic = 'http://127.0.0.1:8000/storage/images/' + item.pic;
        })
        this.setData({
          imgList:res.data
        })
        // console.log(this.data.imgList);
      }
    }),
    //通过调用后端来读取真实的数据,获取商品分类信息
    wx.request({
      url: 'http://127.0.0.1:8000/api/bigClass/getAll',
      success:(res)=> {
        // console.log(res.data);
        let list = res.data;
        list.forEach((item)=>{
          item.bimg = 'http://127.0.0.1:8000/storage/images/' + item.bimg;
        })
        this.setData({
          cList:list
        })
      }
    })
  },
})
