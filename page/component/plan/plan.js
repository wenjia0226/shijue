// page/component//plan/plan.js
const app = getApp();
Page({
  data: {
    phone: '',
    show: false,
    selectArray: [],
    studentName: '无',
    gender: 2,
  },
  gotoSight() {
    wx.navigateTo({
       url: '../way/way?flag=' + '视觉训练'
    })
  },
  gotoLowerSight() {
    wx.navigateTo({
      url: '../way/way?flag=' + '弱视训练'
    })
  },
  inputPhone(e) {
    //let phone = e.detail.value;
    let phone = '19931372308';
    if(phone.length == 11) {
      let that = this;
      let url = app.globalData.URL + 'getChildrenByPhone', data = {
        phone: phone
      };
      app.wxRequest(url, data, (res) => {
        console.log(res.data)
        if (res.data.data) {
          res.data.data.push({
            name: '添加孩子'
          })
        }
        if (res.data.status == 200) {
          that.setData({
            selectArray: res.data.data,
            childrenList: res.data.data,
            show: true
          })
          // 如果本地没有孩子
          if (!this.data.studentId) {
            // 临时绑定的孩子后孩子设置
            that.setData({
              studentId: res.data.data[0].id,
              gender: res.data.data[0].gender,
              studentName: res.data.data[0].name
            })
            wx.setStorageSync('studentId', res.data.data[0].id);
            wx.setStorageSync('gender', res.data.data[0].gender);
            wx.setStorageSync('studentName', res.data.data[0].name);
          }
        } else if (res.data.status == 10220) {
          that.setData({
            childrenList: [],
            gender: 2
          })
          let arr = [];
          arr.push({
            name: '添加孩子'
          })
          that.setData({
            selectArray: arr
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
      balance: curStudent[0].balance
    })
    wx.setStorageSync('studentName', curStudent[0].name);
    wx.setStorageSync('studentId', curStudent[0].id);
    wx.setStorageSync('gender', curStudent[0].gender)
  },
  onShow: function () {
    this.setData({
      studentId: wx.getStorageSync('studentId'),
      gender: wx.getStorageSync('gender'),
      studentName: wx.getStorageSync('studentName')
    })
  },
})