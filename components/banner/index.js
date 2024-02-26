
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showTitle:{
      type: Boolean,
      value: true
    },
    indicatorDots:{
      type: Boolean,
      value: true
    },
    circular:{
      type: Boolean,
      value: true
    },
    autoplay:{
      type: Boolean,
      value: true
    },
    interval:{
      type: Number,
      value: 2000
    },
    duration:{
      type: Number,
      value: 1000
    },
    banners:{
      type: Array,
      value: null
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgWidth:"",
	  imgHeight:""
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * item 点击事件
     * @param {点击参数} e 
     */
    onBannerItemClick: function(e){
      var myEventDetail = e.currentTarget.dataset.id // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('click', myEventDetail,myEventOption)
    },

    /**
     * 动态改变是否显示 title
     */
    showTitle: function(isShowTitle){
      console.log(isShowTitle)
      this.data.showTitle = isShowTitle
      this.setData({
        showTilte:this.data.showTitle
      })
    }

    ,imgInfo:function(event){
      this.setData({
        imgWidth:event.detail.width,
        imgHeight:event.detail.height
      })
    }
  }
})

