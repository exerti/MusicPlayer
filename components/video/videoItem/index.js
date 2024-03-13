

// components/videoLitem/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
     video:{
       type:Object,
       value:{
       }
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
    onTapClick(){
      const item = this.properties.video
      wx.navigateTo({
        url: `/pages/detail-video/detail-video?id=${item.id}`,
      })
    }
  }
})