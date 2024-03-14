// pages/main-music/music.js
import {getBanners ,getPlayListDetail , getTopPlayList,recommendSong ,topList} from "../../service/music"
Page({

  /**
   * 页面的初始数据
   */
  data: {
      bannerList:[],
      value: '',
      playMusicListDetail:[],
      HotList:[],
      dailySongs:[],
      topList:[]
  },
  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onClick() {
    wx.navigateTo({
      url: '../detail-search/detail-search'
    })
  },
  async  onLoad(){
     await this.getBanner()
     await this.getHotPalyListDetail()
     await this.getHotListAll()
     await this.getDailyRecommend()
     await this.getTopList()
  },
  OnMoreClick(){
     wx.navigateTo({
       url: '/pages/more-musicPlayList/morePlaylist',
     })
  },
  getBanner(){
    getBanners().then(
      res=>{
        this.setData({
          bannerList:res.data.banners
        })
      }
     )
  },
  getHotPalyListDetail(){
    getPlayListDetail(3778678).then(res=>{
     this.setData({
      playMusicListDetail:res.data.playlist
     })
    })
  },
  getHotListAll(){
    getTopPlayList().then(res=>{
      this.setData({
        HotList:res.data.playlists
      })
    })
  },
  getDailyRecommend(){
    recommendSong().then(res=>{
      console.log(res)
      let {dailySongs,recommendReasons} = res.data.data
      this.setData({
        dailySongs:dailySongs
      })
    })
  },
  getTopList(){
    topList().then(res=>{
       console.log(res)
       let {list } = res.data
    })
  }
})