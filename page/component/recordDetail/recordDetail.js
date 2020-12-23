// detail/detail.js
const app = getApp();
Page({
  data: {
    eyeSightList: [],
    id: ''
  },
  onLoad: function (options) {
    let id = options.id;
    let combinationId = options.combinationId;
    this.setData({
      id,
      combinationId
    })
    this.getList();
  },
  getList() {
    let that = this;
    let url = app.globalData.URL + 'getCombination', data = {
      id: this.data.id
    };
    app.wxRequest(url, data, (res) => {
      console.log(res)
      if (res.data.status == 200) {
        that.setData({
          eyeSightList: res.data.data
        })
      }
    })
  },
  finish(e) {
    let row = e.currentTarget.dataset.row;
    let that = this;
    let url = app.globalData.URL + 'combinationSuccess', data = {
      row: row,
      id: this.data.id
    };
    app.wxRequest(url, data, (res) => {
      // console.log(res)
      if (res.data.status == 200) {
        that.getList()
      }
    })
  }

})