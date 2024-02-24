// pages/main-video/video.js
import  {Xrequest } from '../../service/Xrequest'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoList:{
      banners:[]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // Xrequest('/banner' ,'GET').then((res)=>{
    //   console.log(res)
    // })

    wx.request({
      url: 'http://10.200.5.51:3000/banner',
      method:'GET',
      success:(res)=>{
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})