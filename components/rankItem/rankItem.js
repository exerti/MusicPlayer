Component({
  properties: {
    itemData: {
      type: Object,
      value: {}
    },
    key: {
      type: String,
      value: "newRanking"
    }
  },
  methods: {
    onRankingItemTap() {
      const key = this.properties.key
      console.log("您点击了rankItem")
      // wx.navigateTo({
      //   url: `/pages/detail-song/detail-song?type=ranking&key=${key}`,
      // })
    }
  }
})