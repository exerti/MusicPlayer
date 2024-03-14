
import { getHotSearch ,search } from "../../service/search";
import {setHistoryItems,clearHistory , getHistoryItems} from '../../utils/storage'
// pages/detail-search/detail-search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',
    HotSearch:[],
    searchResult:[],
    historyItems:[],
    isShowResultView:false
  },
  onChange(e) {
    this.setData({
      inputValue: e.detail,
    });
    if(e.detail==""){
      this.setData({
        isShowResultView:false
      })

      this.getHistoryItems()
    }

  },
  onSearch(){
    const keywords = this.data.inputValue
    search(keywords).then(res=>{
     let  {result}  = res.data
      this.setData({
        searchResult:result.songs
      })
      
    })
   if(keywords){
    setHistoryItems(keywords)
   }
    getHistoryItems()
    this.setData({
      isShowResultView:true
    })
  },
  async onLoad(){
    this.getHistoryItems()
    await this.getSearch()
  },

  getSearch(){
    getHotSearch().then(res=>{
       let {result} = res.data
       this.setData({
        HotSearch:result.hots
       })
     })
  },
  getHistoryItems(){
    let historyItems =  getHistoryItems()
    this.setData({
      historyItems
    })
  },
  CleanHotSearch(){
    wx.removeStorage({
      key: 'historyItems',
    })
    this.setData({
      historyItems:[]
    })
  },
  onCancel(){
    this.setData({
      inputValue:'',
      isShowResultView:false
    })
  },
  ClickHotSearchItem(e){
    let keywords= e.currentTarget.dataset.text
    search(keywords).then(res=>{
      let  {result}  = res.data
       this.setData({
         searchResult:result.songs
       })
       
     })
    if(keywords){
     setHistoryItems(keywords)
    }
     getHistoryItems()
     this.setData({
       isShowResultView:true,
       inputValue :keywords
     })
  },
  ClickResultItem(e){
    let item = e.currentTarget.dataset.item
    console.log(item)

    wx.navigateTo({
      url: `/packagePlayer/pages/music-player/music-player?id=${item.id}`,
    })
  }

})