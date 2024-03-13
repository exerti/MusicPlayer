import { getHotSearch } from "../../service/search";

// pages/detail-search/detail-search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    HotSearch:[]
  },
  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onClick(){
    console.log("onclick")
  },
  async onLoad(){
    await this.getSearch()
  },

  getSearch(){
    getHotSearch().then(res=>{
       let {result} = res.data
       this.setData({
        HotSearch:result.hots
       })
     })
  }
})