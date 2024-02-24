import env from "../constants/env"

const app = getApp()
let loadingCount = 0

module.exports = {
  Xrequest: (url, method, data, showLoading = true) => {
    let _url = `${env.baseUrl}${url}`
    console.log(_url)
    let tokenData = {}
    if (app && app.globalData.token) {
      tokenData = {
        Authorization: app.globalData.token
      }
    }
    return new Promise((resolve, reject) => {
      if (loadingCount == 0 && showLoading) {
        wx.showLoading({
          title: '正在加载中',
          mask: true,
          success: (res) => {},
          fail: (res) => {},
          complete: (res) => {},
        })
      }
      loadingCount++
      wx.request({
        url: '_url',
        data: {
          ...data
        },
        // dataType: dataType,
        enableCache: true,
        enableChunked: true,
        enableHttp2: true,
        enableHttpDNS: true,
        enableQuic: true,
        forceCellularNetwork: true,
        header: {
          'content-type': 'application/json',
          ...tokenData
        },
        httpDNSServiceId: 'httpDNSServiceId',
        method: method || 'GET',
        // responseType: responseType,
        timeout: 1000,
        success: (res) => {
          let {
            code
          } = result.data
          if (code === 200) {
            if (res.data.data && res.data.data.errorMsg) {
              wx.showToast({
                title: res.data.data.errorMsg,
                icon: "none",
                duration: 3000
              })
              return
            }
            resolve(res.data.data);
          } else {
            reject(res.data)
            // wx.showToast({
            //   icon:"error",
            //   title: '数据请求错误',
            // })
          }
        },
        fail: (err) => {
          reject("接口有错误，请检查接口")
        },
        complete: (res) => {
          console.log(res)
          if (loadingCount > 0) {
            loadingCount--;
          }
          if (loadingCount === 0 && showLoading) {
            wx.hideLoading()
          }
          if (res.data) {
            if (res.data.code === 200) {
              if (res.data.data && res.data.data.errorMsg) {
                wx.showToast({
                  title: res.data.data.errorMsg,
                  icon: "none",
                  duration: 3000
                })
                return
              }
            } else if (res.data.code === 401) {
              wx.showToast({
                title: res.data.message || "登录状态超时",
                icon: "none",
                duration: 3000
              })
              wx.navigateTo({
                url: '/pages/login/login'
              })
            } else {
              wx.showToast({
                title: res.data.message || "网络繁忙，请稍后再试",
                icon: "none",
                duration: 3000
              })
              reject(res.data)
            }
          } else {
            wx.showToast({
              title: "网络繁忙，请稍后再试",
              icon: "none",
              duration: 3000
            })
            reject(res.data)
          }

        },
      })
    })
  }
}