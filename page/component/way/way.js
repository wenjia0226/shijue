// way/way.js
const app = getApp();
Page({
 data: {
   eyeSightList: [],
   pName: ''
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
      pName: wx.getStorageSync('pName')
    })
    if(this.data.pName) {
      this.getList();
    }
  },
  getList() {
    let that = this;
    let url = app.globalData.URL + 'combinationList', data = {
      // pName: '视觉训练'
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
      pName: this.data.pName
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
    let id = e.target.dataset.id;
    let that = this;
    let url = app.globalData.URL + 'combinationToChildren',
    data = {
      childrenId: 39,
      combination: id
    }
    app.wxRequest(url, data, (res) => {
     //console.log(res)
      if (res.data.status == 200) {
        wx.showToast({
          title: '推送成功'
        })
        that.getList()
        // that.setData({
        //   eyeSightList: res.data.data
        // })
      }
    })

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
   
  }
})