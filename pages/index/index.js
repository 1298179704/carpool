//index.js
//获取应用实例
const app = getApp()

Page({
  data :{
    lonitude:"",
    latitude:""

  },
  onShow(){
    this.getLocation();
  },
  getLocation(){
    wx.getLocation({
      type: 'gcj02',
      success: this.handleGetLocationSucc.bind(this)
    })
    
  },
  handleGetLocationSucc(res){
    this.setData({
      longitude:res.longitude,
      latitude:res.latitude
    })
  },
  onShareAppMessage(){
    title:'深圳技术大学内部拼车小程序' 
    path:'/pages/index/index'
 
  }  

})
