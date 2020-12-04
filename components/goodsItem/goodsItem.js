// components/goodsItem/goodsItem.js
Component({
  /**
   * 组件的属性列表:可以在父页面中传递数据
   */
  properties: {
    id:{type:Number},
    pic:{type:String,value:'图片为空'},
    name:String,
    info:String,
    price:{type:Number,value:0}
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
