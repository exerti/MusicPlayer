 
 function setHistoryItems(keyword) {
  keyword = keyword.trim();
  let historyItems =  wx.getStorageSync('historyItems')
  if (historyItems === undefined||null) {
    wx.setStorageSync('historyItems', keyword)
  } else {
    const onlyItem = historyItems.split('|').filter(e => e != keyword);
    if (onlyItem.length > 0) historyItems = keyword + '|' + onlyItem.join('|');
    wx.setStorageSync('historyItems', historyItems)
  }
}

function clearHistory(){
  wx.removeStorageSync('historyItems')
}
function  getHistoryItems(){
  let res = wx.getStorageSync('historyItems')
  return res.split('|').filter(item=>item)
}
module.exports ={
  setHistoryItems ,clearHistory,getHistoryItems
}
