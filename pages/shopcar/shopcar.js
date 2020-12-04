// pages/shopcar/shopcar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopcarList:[
      // {
      //   id:'1',
      //   pic:'/img/notebook9-flex.png',
      //   name:'商品名称',
      //   info:'商品介绍',
      //   price:9999,
      //   number:1
      // },
      // {
      //   id:'2',
      //   pic:'/img/notebook9-flex.png',
      //   name:'商品名称',
      //   info:'商品介绍',
      //   price:9999,
      //   number:2
      // },
      // {
      //   id:'3',
      //   pic:'/img/notebook9-flex.png',
      //   name:'商品名称',
      //   info:'商品介绍',
      //   price:9999,
      //   number:3
      // },
    ],
    count:0,
    price:0.0,
    checkedAll:false
  },
  //这里放置事件处理函数
  // editNum() {
    
  // }
  editNum:function(e) {
    //接收传过来的索引号
    let index = e.currentTarget.id;
    // console.log(index);
    let shopCar = this.data.shopcarList;
    let flag = e.currentTarget.dataset.flag;
    // console.log(flag);
    
    if(flag == '+') {
      shopCar[index].number++;
    } else if(flag == '-'){
      shopCar[index].number >  0 ? shopCar[index].number-- : "return false";
      // if(shopCar[index].number > 0 ) {
      //   shopCar[index].number--;
      // } else {
      //   return false;
      // }
    }
    
    this.setData({
      shopcarList:shopCar
    });
    this.getTotal();
  },
  //修改商品选中状态
  editChecked(e) {
    let index = e.currentTarget.id;
    let shopCar = this.data.shopcarList;
    shopCar[index].checked = !shopCar[index].checked;
    //判断当前商品是否选中，如果没选中，则取消全选
    // if(!shopCar[index].checked) {
    //   this.setData({checkedAll:false});
    // }
    //判断所有商品是否被选中
    let count = 0;
    for(let g of shopCar) {
      if(g.checked) {
        count++;
      }
    }
    count == shopCar.length ? this.setData({checkedAll:true}) : this.setData({checkedAll:false})
    // if(count == shopCar.length){
    //   this.setData({checkedAll:true});
    // } else {
    //   this.setData({checkedAll:false});
    // }
    this.setData({
    shopcarList:shopCar
    })
    this.getTotal();
    },

  //全选
  editCheckedAll() {
    let checkedStatus = !this.data.checkedAll;
    let shopCar = this.data.shopcarList;
    for(let g of shopCar) {
      g.checked = checkedStatus; 
    }
    //更新改变后的值
    this.setData({
      shopcarList:shopCar,
      checkedAll:checkedStatus
    })
    this.getTotal();
  },
  //总计
  getTotal() {
    let price = 0;
    let count = 0;
    for(let g of this.data.shopcarList) {
      if(g.checked) {
        price += g.price * g.number;
        count += g.number;
      }
  }
  this.setData({
    count:count,
    price:price
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //模拟从数据库读取数据,并增加额外的字段
    let list = [
      {
        id:'1',
        pic:'/img/notebook9-flex.png',
        name:'商品名称',
        info:'商品介绍',
        price:9999,
        number:1
      },
      {
        id:'2',
        pic:'/img/notebook9-flex.png',
        name:'商品名称',
        info:'商品介绍',
        price:9999,
        number:2
      },
      {
        id:'3',
        pic:'/img/notebook9-flex.png',
        name:'商品名称',
        info:'商品介绍',
        price:9999,
        number:3
      },
    ];
    // for(let g of list) {
    //   g.checked = false;
    // }
    list.forEach(item => {
      item.checked = false;
    });
    // console.log(list);
    
    this.setData({
      shopcarList:list
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