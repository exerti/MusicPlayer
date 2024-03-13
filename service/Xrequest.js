import env from "../constants/env"

const app = getApp()
let loadingCount = 0

module.exports = {
  Xrequest :(url, method, data, showLoading = true) => {
    let _url = `${env.baseUrl}${url}`
    let tokenData = {}
    if (app && app.globalData.token) {
      tokenData = {
        Authorization: app.globalData.token,
        withCredentials :true
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
        url: _url,
        data: {
          ...data
        },
        header: {
          'content-type': 'application/json',
          ...tokenData
        },
        method: method || 'GET',
        timeout: 1000,
        success: (res) => {
          let {
            code
          } = res.data
          if (code === 200) {
            if (res.data && res.data.errorMsg) {
              wx.showToast({
                title: res.data.errorMsg,
                icon: "none",
                duration: 3000
              })
              return
            }
            resolve(res);
          } else {
            reject(res)
          }
        },
        fail: (err) => {
          reject("接口有错误，请检查接口")
        },
        complete: (res) => {
          if (loadingCount > 0) {
            loadingCount--;
          }
          if (loadingCount === 0 && showLoading) {
            wx.hideLoading()
          }
          if (res.data) {
            if (res.data.code === 200) {
              if (res.data && res.data.errorMsg) {
                wx.showToast({
                  title: res.data.errorMsg,
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
            reject(res)
          }

        },
      })
    })
  }
}