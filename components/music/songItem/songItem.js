// components/songItem/songItem.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
      item:{
        type: Object,
        value:null
      }
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
    onItemClick(){
      let {id }= this.properties.item
      wx.navigateTo({
        url: `/packagePlayer/pages/music-player/music-player?id=${id}`,
      })
    }
  }
})