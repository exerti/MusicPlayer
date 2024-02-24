const env = wx.getAccountInfoSync().miniProgram.envVersion

const baseApi = {
// 开发版环境
develop: {
baseUrl: `http://10.200.5.51:3000`
},
// 体验版
trial:  {
  baseUrl: "https://xxxx.com"
},
// 正式版
release: {
 baseUrl: "https://xxxx.com"
}
};
const api = baseApi[env]
console.log(__wxConfig.envVersion,"__wxConfig.envVersion 是一个可以用来判断当前小程序运行的环境变量。它的值通常为 develop, trial, 或者 release")
export default api;

