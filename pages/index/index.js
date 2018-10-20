//index.js
//获取应用实例
const app = getApp()

Page({
  data :{
    Fromchange:""
  
  },
  
  

  onShareAppMessage(){
    title:'深圳技术大学内部拼车小程序' 
    path:'/pages/index/index'

     

  },
  goindex(){
    wx.navigateTo({
      url: '../index/index',

    })
  },
  gopublish(){
   wx.navigateTo({
     url: '../publish/publish',

   })
  } ,
  gomine(){
    wx.navigateTo({
      url: '../mine/mine',

    })


  },
  Fromchange(e){
    this.setData({ Fromchange: e.detail.value })
     
  },
   sreach(){
     console.log({ list: e.detail.value})
   }
  
  







  })
