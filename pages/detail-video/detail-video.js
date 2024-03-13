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
      videoRealted:data.mvs
     })
  }
})