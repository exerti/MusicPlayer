// pages/detail-video/detail-video.js
import { getMVUrl ,getMVInfo ,getMVRelated } from "../../service/video"
Page({

  /**
   * 页面的初始数据
   */
  data: {
     videoID: null,
     videoUrl:{},
     videoInfo:{},
     videoRealted:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async  onLoad(options) {
     this.setData({
       videoID:  options.id
     })
     await  this.getMVById()
     await this.getMVInfo()
     await this.getMVRelated()
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

  },
  async getMVById(){
     let { data} = await  getMVUrl(this.data.videoID)
     this.setData({
      videoUrl:data.data
     })
  },
  async getMVInfo(){
     let {data}  = await  getMVInfo(this.data.videoID)
     this.setData({
        videoInfo : data.data
     })
  },
  async getMVRelated(){
     let {data }  =  await getMVRelated(this.data.videoID)
     this.setData({
      videoRealted:data.data
     })
  }
})