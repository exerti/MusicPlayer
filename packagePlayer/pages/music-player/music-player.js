// pages/music-player/music-player.js
import { getSongDetail ,getSongUrl} from '../../../service/music'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    songDetail:{},
    songUrl:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
 async onLoad(options) {
    this.setData({
      id:options.id
    })
    await this.getSongDetail()
    await this.getSongUrl()
  },
  getSongDetail(){
      getSongDetail(this.data.id).then(res=>{
        let {privileges ,songs} = res.data
        this.setData({
          songDetail:songs[0]
        })
      })
  },
  getSongUrl(){
    getSongUrl(this.data.id).then(
      res=>{
        let obj =  res.data.data[0]
        this.setData({
          songUrl:obj
        })
      }
    )
  }



})