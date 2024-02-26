// pages/main-video/video.js
import {
  getTopMv
} from '../../service/video'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    offset:0,
    videoList: [],
    hasmore:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getMv()
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
  async onPullDownRefresh() {
// 1.清空之前的数据
this.setData({ videoList: [] })
this.data.offset = 0
this.data.hasmore = true

// 2.重新请求新的数据
await this.getMv()

// 3.停止下拉刷新
wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
   async onReachBottom() {
   if(!this.data.hasmore)  return 
     await this.getMv()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
  },
  
  async  getMv(){
     let {data} =  await  getTopMv( this.data.offset)
     let newData = [...this.data.videoList , ...data.data]
      this.setData({
        videoList:newData
      })
   this.data.offset=this.data.videoList.length
   this.data.hasmore = data.hasMore
  }

})