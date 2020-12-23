// my.js
const app = getApp();
Page({
  data:{
    phone: false,
    phoneNum: '',
    avatarUrl: '',
    nickName: '',
    code: '',
    tabbar: {},
    height: app.globalData.navHeight,
    selectArray:[],
    studentName: '无',
    gender: 2,
    balance: '',
    show: false,
    reminShow: false,
    tempFlag: 2,
    newPhone: ''
  },
  onLoad() {
    this.setData({
      phone: wx.getStorageSync('phone')
    })
  },
  inputN(e){
    let input = e.detail.value;
    this.setData({
      newPhone: input
    })
  },
  save() {
    if (this.data.newPhone.length !==11) {
      wx.showModal({
        content: '手机号应为11位数',
        showCancel:false
      })
      this.hideRemin();
    }else {
      this.setData({
        phoneNum: this.data.newPhone
      })
      wx.setStorageSync('phoneNum', this.data.newPhone)
      let that = this;
      let url = app.globalData.URL + "manualBindingPhone", data = {
        openId: wx.getStorageSync('openId'),
        phone: this.data.newPhone
      };
      app.wxRequest(url, data, (res) => {
        console.log(res)
        that.hideRemin();
      })
    }
  },
  hideRemin() {
    this.setData({
      reminShow: false
    })
  },
  showRemin() {
    this.setData({
      reminShow: true
    })
  },
  notGetPhone() {
    this.showRemin();
  },
  gotoCode() {
    wx.navigateTo({
      url: '/page/component/studentCode/studentCode?studentId=' + this.data.studentId,
    })
  },
  gotoAdd() {
    if (this.data.phone) {
      wx.navigateTo({
        url: '/manual/manual',
      })
    } else {
      wx.navigateTo({
        url: '/nicheng/nicheng',
      })
    }
  },
  onShow() {
    this.setData({
      phone: wx.getStorageSync('phone'),
      studentId: wx.getStorageSync('studentId')
    })
    if (wx.getStorageSync('studentId')) {
        this.setData({
          studentName: wx.getStorageSync('studentName'),
          gender: wx.getStorageSync('gender'),
          phoneNum: wx.getStorageSync('phoneNum')
        })
      } else {
        this.setData({
          studentName: "暂无绑定",
          gender: 2
        })
      }
      this.setData({
        avatarUrl: wx.getStorageSync('avatarUrl'),
        nickName: wx.getStorageSync('nickName')
      })
      this.getChildrenList()
  },
  getChildrenList() {
    let that = this;
    let url = app.globalData.URL + "childrenList", data = { openId: wx.getStorageSync('openId') };
    //如果已经授权过
    if (this.data.phone) {
      wx.showLoading({
        title: '加载中...'
      })
      app.wxRequest(url, data, (res) => {
        
        if (res.data.data) {
          res.data.data.push({
            name: '添加孩子'
          })
        }
        if (res.data.status == 200) {
          that.setData({
            selectArray: res.data.data
          })
           if(!this.data.studentId) {
             wx.setStorageSync('studentName', that.data.selectArray[0].name);
             wx.setStorageSync('studentId', that.data.selectArray[0].id);
             wx.setStorageSync('gender', that.data.selectArray[0].gender)
           }
        }else if(res.data.status == 10220) {
          let arr = [];
          arr.push({
            name: '添加孩子' 
          })
          that.setData({
            selectArray:arr
          })
        }
      })
    }
  },
  myevent(e) {
    this.setData({
      studentName: e.detail.params,
      gender: e.detail.gender
    })
  },
  newchildrenlist(e) {
    let curStudent = e.detail.newChildrenList;
    this.setData({
      selectArray: e.detail.newChildrenList
    })
    this.setData({
      studentId: curStudent[0].id,
      studentName: curStudent[0].name,
      birthday: curStudent[0].birthday,
      gender: curStudent[0].gender,
      balance: curStudent[0].balance,
      ranking: curStudent[0].rankings

    })
    wx.setStorageSync('studentName', curStudent[0].name);
    wx.setStorageSync('studentId', curStudent[0].id);
    wx.setStorageSync('gender', curStudent[0].gender)
  },
  gotoMyChild() {
    if(this.data.phone) {
      wx.navigateTo({
        url: '/page/component/childrenManage/childrenManage'
      })
    }else {
     this.gotoLogin()
    }
  },
  goClert() {
    if (this.data.phone) {
      let that = this;
      let url = app.globalData.URL + 'chkState';
      let data = {
        openId: wx.getStorageSync('openId')
      }
      wx.showLoading({
        title: '加载中...',
      })
      app.wxRequest(url, data, (res) => {
        if (res.data.status == 200) {
          wx.navigateTo({
            url: '/page/component/clertMain/clertMain'
          })
        } else if (res.data.status == 10227) {
          wx.navigateTo({
            url: '/page/component/clertLogin/clertLogin'
          })
        }
      }, (err) => {
        console.log(err)
      })
    } else {
      this.gotoLogin();
    }
  },
  goToBao() {
    if (this.data.phone) {
      wx.navigateTo({
        url: '/page/component/reportList/reportList'
      })
    } else {
      this.gotoLogin()
    }
  },
  hideview() {
    this.setData({
      show: true
    })
  },
  hide() {
    this.setData({
      show: false
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
              wx.setStorageSync('phoneNum', res.data.data)
              wx.switchTab({
                url: '/page/tabBar/my/my'
              })
            }
          }, (err) => {
            console.log(err)
          })
        },
        fail: function (err) {
          console.log(err)
          // wx.login({
          //   success: res => {
          //     console.log(res, 'sessionkey过期')
          //   }
          // })
        }
      })
    } else {
      wx.showModal({
        title: '',
        content: '请先授权',
      })
    }
  }
})