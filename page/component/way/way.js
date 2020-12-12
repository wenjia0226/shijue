// way/way.js
const app = getApp();
Page({
 data: {
   eyeSightList: [],
   pName: '',
   show: false,
   childrenId: '',
   selectArray: [],
   childrenList: [],
   gender: 2,
   studentName: ''
 },
 onLoad(options) {
    let that = this;
    this.setData({
      pName: options.flag
    })
    wx.setStorageSync('pName', options.flag);
    this.getList();
  },
  onShow() {
    this.setData({
      pName: wx.getStorageSync('pName'),
      childrenId: wx.getStorageSync('studentId')
    })
    if(this.data.pName) {
      this.getList();
    }
  },
  getList() {
    let that = this;
    let url = app.globalData.URL + 'combinationList', data = {
      pName: this.data.pName,
      openId: wx.getStorageSync('openId')
    };
    app.wxRequest(url, data, (res) => {
      if (res.data.status == 200) {
        that.setData({
          eyeSightList: res.data.data
        })
      }
    })
  },
  delete(e){
    let delId = e.currentTarget.dataset.id;
    let that = this;
    let url = app.globalData.URL + 'deleteCombination', data = {
      id: delId,
      pName: this.data.pName,
      openId: wx.getStorageSync('openId')
    };
    wx.showModal({
      title: '删除组合',
      content: '删除组合记录后将无法恢复，是否进行删除？',
      success(res) {
        if (res.confirm) {
          app.wxRequest(url, data, (res) => {
            // console.log(res)
            if (res.data.status == 200) {
               wx.showToast({
                 title: '删除成功'
               })
               that.setData({
                 eyeSightList: res.data.data
               })
            }
          })
        } else if (res.cancel) {
          // console.log('用户点击取消')
        }
      }
    })
  },
  gotoDetail(e){
    let id = e.target.dataset.id;
    wx.navigateTo({
      url: '../detail/detail?id=' + id
    })
  },
  pushWay(e) {
    if(this.data.childrenId && this.data.show) {
      let id = e.target.dataset.id;
      let that = this;
      let url = app.globalData.URL + 'combinationToChildren',
      data = {
        childrenId: wx.getStorageSync('studentId'),
        combinationId: id
      }
      app.wxRequest(url, data, (res) => {
        if (res.data.status == 200) {
          wx.showToast({
            title: '推送至' + wx.getStorageSync('studentName')+ '成功'
          })
          that.getList()
        }
      })
    }else {
      wx.showToast({
        title: '请先选择孩子',
      })
    }

  },
  gotoAdd() {
    if (this.data.pName == '弱视训练') {
      wx.navigateTo({
        url: '../lowerEyeSight/lowerEyeSight?flag=' + '弱视训练'
      })
    }else if(this.data.pName == '视觉训练') {
      wx.navigateTo({
        url: '../eyeSight/eyeSight?flag=' + '视觉训练'
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
      gender: curStudent[0].gender
    })
    wx.setStorageSync('studentName', curStudent[0].name);
    wx.setStorageSync('studentId', curStudent[0].id);
    wx.setStorageSync('gender', curStudent[0].gender)
  },
  inputPhone(e) {
    //let phone = e.detail.value;
    let phone = '19931372308';
    if (phone.length == 11) {
      let that = this;
      let url = app.globalData.URL + 'getChildrenByPhone', data = {
        phone: phone
      };
      app.wxRequest(url, data, (res) => {
        if (res.data.data) {
          // res.data.data.push({
          //   name: '添加孩子'
          // })
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
              studentName: res.data.data[0].name,
              childrenId: res.data.data[0].id
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
          // arr.push({
          //   name: '添加孩子'
          // })
          that.setData({
            selectArray: arr
          })
        }
      })
    }
  },
})