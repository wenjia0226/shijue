// pages/mychildren/mychildren.js
const app = getApp();
Page({
  data: {
    name: '',
    schoolName: '',
    classesName: '',
    birthday: '',
    gender: 0,
    displayInfo: true,
    date: '',
    show: true,
    studentId: '',
    resetGender: '',
    resetName: '',
    resetBirthday: '',
    resetDate: '',
    studentId: ''
  },
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
    
    this.setData({
      studentId: options.id
    })
    this.getStudenInfo();
  },
  getStudenInfo() {
    let that = this;
    let url = app.globalData.URL + 'editChildren', data = {  
      id: this.data.studentId
    };
    app.wxRequest(url, data, (res) => {
      // console.log(res) 
      that.setData({
        name: res.data.data.name,
        birthday: res.data.data.birthday,
        gender: res.data.data.gender,
        date: res.data.data.date,
        resetName: res.data.data.name,
        resetBirthday: res.data.data.birthday,
        resetGender: res.data.data.gender,
        resetDate: res.data.data.date,
      })
    }, (err) => {
      console.log(err)
    })
  },
  showModify() {
    let that = this;
    this.setData({
      displayInfo: !that.data.displayInfo
    })
  },
  bindDateChange: function (e) {
    var dateOld = e.detail.value;
    var dateNew = dateOld.replace(/-/g, '/');
    this.setData({
      resetBirthday: dateNew
    })
  },
  validateNumber(val) {
    return val.replace(/\D/g, '')
  },
  
  // 修改姓名
  handleNameInput(e) {
    this.setData({
      resetName: e.detail.value
    })
  },
  //修改性别
  selectSex(e) {
    this.setData({
      resetGender: e.currentTarget.dataset.type
    })
  },
  fininshModify() {
    let that = this;
    let url = app.globalData.URL + "addOrSaveChildren",
      data = {
        id: this.data.studentId,
        name: this.data.resetName,
        birthday: this.data.resetBirthday,
        gender: this.data.resetGender
      };
    app.wxRequest(url, data, (res) => {
      //  console.log(res)
      if (res.data.status == 200) {
        wx.showToast({
          title: '修改成功',
        })
        wx.setStorageSync('studentName', that.data.resetName);
        wx.setStorageSync('gender', that.data.resetGender);
        wx.setStorageSync('id', that.data.studentId);
        this.setData({
          displayInfo: !that.data.displayInfo
        })
        this.getStudenInfo();
        // wx.navigateTo({
        //   url: '/page/component/childrenManage/childrenManage'
        // })
      }
    })
  }
})