// components/videoList/index.js
Component({
  options:{
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    videoList:{
      type:Array,
      value:null
  },

  /**
   * 组件的初始数据
   */
  data: {
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
  },
   lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  observers:{
   
  }
})