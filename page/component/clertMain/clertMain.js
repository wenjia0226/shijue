// page/myCollection//pages/clertMain/clertMain.js
const app = getApp();
Page({
  data: {
  },
  gotoAddChun() {
    let that = this;
    wx.scanCode({  //扫码
      success(res) {
        let studentId = res.result;
        wx.navigateTo({
          url: '/page/component/archiveUpdate/archiveUpdate?studentId=' + studentId,
        })
      }
    })
  },
  gotoPlan() {
    wx.navigateTo({
      url: '/page/component/plan/plan',
    })
  },
  gotoCard() {
    let that = this;
    wx.scanCode({  //扫码
      success(res) {
        let studentId = res.result;
        that.getNewPlan(studentId)
      }
    })
  },
  getNewPlan(studentId) {
    let that = this;
    let url = app.globalData.URL + 'relieveNextCombination',
    data = {
      childrenId: studentId
    }
    app.wxRequest(url, data, (res) => {
      //console.log(res)
      if(res.data.status == 200) {
        wx.showToast({
          title: '打卡成功'
        })
      }
    })
  },
  getPhoneNumber(e) {
    var msg = e.detail.errMsg, that = this;
    var that = this;

    // var sessionID = wx.getStorageSync('session_key'),
    let encryptedData = e.detail.encryptedData,
      code = that.data.code,
      iv = e.detail.iv;

    if (msg == 'getPhoneNumber:ok') {
      wx.checkSession({
        success: function () {
          //调用自己的登录接口

          // that.getPhone(code, encryptedDataStr, iv);
          let url = app.globalData.URL + 'bindingPhone';
          let data = {
            encryptedData: encryptedData,
            iv: iv,
            code: wx.getStorageSync('code'),
            openId: wx.getStorageSync('openId')
          };
          wx.showLoading({
            title: '加载中...',
          })
          app.wxRequest(url, data, (res) => {
            if (res.data.status == 200) {
              that.setData({
                phoneNum: res.data.data
              })
              wx.navigateTo({
                url: '../plan/plan',
              })
            }
          }, (err) => {
            console.log(err)
          })
        },
        fail: function (err) {
          console.log(err)

        }
      })
    } else {
      wx.showModal({
        title: '',
        content: '请先授权',
      })
    }
  },
  gotoPlan(e) {
    wx.navigateTo({
      url: '../plan/plan',
    })
  },
  gotoChildren() {
    wx.navigateTo({
      url: '../childrenShow/childrenShow',
    })
  }
})