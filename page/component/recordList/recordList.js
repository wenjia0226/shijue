// page/component//recordList/recordList.js
const app = getApp();
Page({
  data: {

  },
  onLoad() {
    this.getRecordList()
  },
  getRecordList() {
    let that = this;
    let url = app.globalData.URL + 'getCombinationHistory', data = {
      childrenId: wx.getStorageSync('studentId')
     
    };
    app.wxRequest(url, data, (res) => {
      if(res.data.status == 200) {
        //console.log(res.data.data)
        if(res.data.data) {
          that.setData({
            combinationList: res.data.data
          })
        }else {
          that.setData({
            combinationList: []
          })
        }
       
      }
    })
  },
  gotoDetail(e) {
    let id = e.currentTarget.dataset.id;
    let combinationId = e.currentTarget.dataset.combinationid;
    wx.navigateTo({
      url: '/page/component/detail/detail?id=' + id + '&combinationId=' + combinationId
    })
  }
  
})