Page({
  data: {
    Account:"",
    Name:"",
    PNumber:"",



    onShareAppMessage() {
      title: '深圳技术大学内部拼车小程序'
      path: '/pages/index/index'

    }
  },

  AChange(e){
    this.setData({Achange : e.detail.value})
  },
  NChange(e) {
    this.setData({ Name : e.detail.value})
  },
  PNChange(e) {
    this.setData({ PNumber : e.detail.value});
  },
  Submit(){
    wx.navigateTo({
      url: '../index/index',
    })
    
    
  
  
 
 
  }










})
