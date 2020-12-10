// detail/detail.js
const app = getApp();
Page({
  data: {
    eyeSightList: []
  },
  onLoad: function (options) {
    let id = options.id;
    let that = this;
    let url = app.globalData.URL + 'getCombination', data = {
      id
    };
    app.wxRequest(url, data, (res) => {
      // console.log(res)
      if (res.data.status == 200) {
        that.setData({
          eyeSightList: res.data.data
        })
      }
    })
  },

 
})