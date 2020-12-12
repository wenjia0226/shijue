// page/component//eyeSight/eyeSight.js
const app = getApp();
Page({
  data: {
    eyeSightList: [],
    name: '',
    timeList: [{
      city_id: '双眼调节训练-智能翻转镜-1分钟/',
      city_name: '1分钟'
    }, {
        city_id: '双眼调节训练-智能翻转镜-3分钟/',
      city_name: '3分钟'
    }, {
        city_id: '双眼调节训练-智能翻转镜-5分钟/',
      city_name: '5分钟'
    }, {
        city_id: '双眼调节训练-智能翻转镜-10分钟/',
      city_name: '10分钟'
    }],
    sightList: [{// 光度
      city_id: '双眼调节训练-智能翻转镜-±0.50D/',
      city_name: '±0.50D'
    }, {
        city_id: '双眼调节训练-智能翻转镜-±1.00D/',
      city_name: '±1.00D'
    }, {
        city_id: '双眼调节训练-智能翻转镜-±1.50D/',
      city_name: '±1.50D'
    }, {
        city_id: '双眼调节训练-智能翻转镜-±2.00D/',
      city_name: '±2.00D'
    },
    {
      city_id: '双眼调节训练-智能翻转镜-±2.50D/',
      city_name: '±2.50D'
    }],
    luminosityList: [  //视标大小
      {
        city_id: '双眼调节训练-智能翻转镜-(20-30)/',
        city_name: '20/30'
      }, {
        city_id: '双眼调节训练-智能翻转镜-(20-40)/',
        city_name: '20/40'
      }, {
        city_id: '双眼调节训练-智能翻转镜-(20-50)/',
        city_name: '20/50'
      }
    ],
    doubleSightList: [   //镜片阅读
      {
        city_id: '单眼调节训练-镜片阅读--0.50D/',
        city_name: '-0.50D'
      }, {
        city_id: '单眼调节训练-镜片阅读-1.00D/',
        city_name: '-1.00D'
      }, {
        city_id: '单眼调节训练-镜片阅读--1.50D/',
        city_name: '-1.50D'
      }, {
        city_id: '单眼调节训练-镜片阅读--2.00D/',
        city_name: '-2.00D'
      },
      {
        city_id: '单眼调节训练-镜片阅读--2.50D/',
        city_name: '-2.50D'
      },
      {
        city_id: '单眼调节训练-镜片阅读-3.00D/',
        city_name: '-3.00D'
      },
      {
        city_id: '单眼调节训练-镜片阅读--3.50D/',
        city_name: '-3.50D'
      },
      {
        city_id: '单眼调节训练-镜片阅读--4.00D/',
        city_name: '-4.00D'
      },
      {
        city_id: '单眼调节训练-镜片阅读--4.50D/',
        city_name: '-4.50D'
      },
      {
        city_id: '单眼调节训练-镜片阅读--5.00D/',
        city_name: '-5.00D'
      },
      {
        city_id: '单眼调节训练-镜片阅读--5.50D/',
        city_name: '-5.50D'
      },
      {
        city_id: '单眼调节训练-镜片阅读--6.00D/',
        city_name: '-6.00D'
      },
      {
        city_id: '单眼调节训练-镜片阅读-±0.50D/',
        city_name: '±0.50D'
      }, {
        city_id: '单眼调节训练-智能翻转镜-±1.00D/',
        city_name: '±1.00D'
      }, {
        city_id: '单眼调节训练-智能翻转镜-±1.50D/',
        city_name: '±1.50D'
      }, {
        city_id: '单眼调节训练-智能翻转镜-±2.00D/',
        city_name: '±2.00D'
      },
      {
        city_id: '单眼调节训练-智能翻转镜-±2.50D/',
        city_name: '±2.50D'
      }],
    selected: {},
    timeList2: [{
      city_id: '单眼调节训练-双面镜-1分钟/',
      city_name: '1分钟'
    }, {
        city_id: '单眼调节训练-双面镜-3分钟/',
      city_name: '3分钟'
    }, {
        city_id: '单眼调节训练-双面镜-5分钟/',
      city_name: '5分钟'
    }, {
        city_id: '单眼调节训练-双面镜-10分钟/',
      city_name: '10分钟'
    }],
    sightList2: [{
      city_id: '单眼调节训练-双面镜-±0.50D/',
      city_name: '±0.50D'
    }, {
      city_id: '单眼调节训练-双面镜-±1.00D/',
      city_name: '±1.00D'
    }, {
        city_id: '单眼调节训练-双面镜-±1.50D/',
      city_name: '±1.50D'
    }, {
        city_id: '单眼调节训练-双面镜-±2.00D/',
      city_name: '±2.00D'
    },
    {
      city_id: '单眼调节训练-双面镜-±2.50D/',
      city_name: '±2.50D'
    }],
    luminosityList2: [  //视标大小
      {
        city_id: '单眼调节训练-双面镜-(20-30)/',
        city_name: '20/30'
      }, {
        city_id: '单眼调节训练-双面镜-(20-40)/',
        city_name: '20/40'
      }, {
        city_id: '单眼调节训练-双面镜-(20-50)/',
        city_name: '20/50'
      }
    ],
    eyePowerList: [
      {title: "视刺激-弱视综合治疗仪-光刷", name: '光刷', checked: false },
      {title: "视刺激-弱视综合治疗仪-红闪", name: '红闪', checked: false },
      {title: "视刺激-弱视综合治疗仪-后像", name: '后像', checked: false },
      {title: "视刺激-弱视综合治疗仪-光栅", name: '光栅', checked: false },
      {title: "视刺激-弱视综合治疗仪-棋格", name: '棋格', checked: false }
    ],
    boxList: [
      { title: "眼球运动-圆盘-按钮一", name: '按钮一', checked: false },
      { title: "眼球运动-圆盘-按钮二", name: '按钮二', checked: false },
      { title: "眼球运动-圆盘-按钮三", name: '按钮三', checked: false },
      { title: "眼球运动-圆盘-按钮四", name: '按钮四', checked: false }
    ],
    cover1: '', //第三级别选择，
    cover2: '',
    eyeFlag1: '',
    doubleCover1: "",
    eyeFlag2: '',
    eyeRead: '',
    luminosity: '',
    luminosity2: ''
  },
  change(e) {
    this.setData({
      selected: { ...e.detail }
    })
    this.setData({
      cover1: e.detail.id
    })
    wx.showToast({
      title: `${this.data.selected.name}`,
      icon: 'success',
      duration: 1000
    })
  },
  changeSight(e) {
    this.setData({
      selected: { ...e.detail }
    })
    this.setData({
      eyeFlag1: e.detail.id
    })
    wx.showToast({
      title: `${this.data.selected.name}`,
      icon: 'success',
      duration: 1000
    })
  },
  changeLuminosity(e) {
    this.setData({
      selected: { ...e.detail }
    })
    this.setData({
      luminosity: e.detail.id
    })
    wx.showToast({
      title: `${this.data.selected.name}`,
      icon: 'success',
      duration: 1000
    })
  },
  change2(e) {
    this.setData({
      selected: { ...e.detail }
    })
    this.setData({
      cover2: e.detail.id
    })
    wx.showToast({
      title: `${this.data.selected.name}`,
      icon: 'success',
      duration: 1000
    })
  },
  changeSight2(e) {
    this.setData({
      selected: { ...e.detail }
    })
    this.setData({
      eyeFlag2: e.detail.id
    })
    wx.showToast({
      title: `${this.data.selected.name}`,
      icon: 'success',
      duration: 1000
    })
  },
  changeLuminosity2(e) {
    this.setData({
      selected: { ...e.detail }
    })
    this.setData({
      luminosity2: e.detail.id
    })
    wx.showToast({
      title: `${this.data.selected.name}`,
      icon: 'success',
      duration: 1000
    })
  },
  changeEyeRead(e) {
    this.setData({
      selected: { ...e.detail }
    })
    this.setData({
      eyeRead: e.detail.id
    })
    wx.showToast({
      title: `${this.data.selected.name}`,
      icon: 'success',
      duration: 1000
    })
  },
  onLoad(options) {
    let that = this;
    let url = app.globalData.URL + 'getProgram', data = {
      direction: options.flag
      // direction: '弱视训练'
    };
    app.wxRequest(url, data, (res) => {
      if (res.data.status == 200) {
        that.setData({
          eyeSightList: res.data.data
        })
      }
    })
  },
  selectId(e) {
    let pname = e.currentTarget.dataset.pname;
    let name = e.currentTarget.dataset.name;
    let eyeSightList = this.data.eyeSightList;
    for (let i = 0; i < eyeSightList.length; i++) {
      let tool = eyeSightList[i].tool;
      for (let j = 0; j < tool.length; j++) {
        if (tool[j].pName == pname && tool[j].name == name) {
          eyeSightList[i].tool[j].checked = !eyeSightList[i].tool[j].checked;
        }
      }
    }
    this.setData({
      eyeSightList: eyeSightList
    })
  },
  getThird(e) {
    console.log(e)
  },
  coverInput(e) {
    const items = this.data.coverList
    const values = e.detail.value
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false

      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].name === values[j]) {
          items[i].checked = true
          break
        }
      }
    }
    this.setData({
      coverList: items
    })
  },
  doubleCoverInput(e) {
    const items = this.data.doubleCoverList
    const values = e.detail.value
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false
      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].name === values[j]) {
          items[i].checked = true
          break
        }
      }
    }
    this.setData({
      doubleCoverList: items
    })
  },
  eyePoverInput(e) {
    const items = this.data.eyePowerList;
    const values = e.detail.value
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false

      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].name === values[j]) {
          items[i].checked = true
          break
        }
      }
    }
    this.setData({
      eyePowerList: items
    })
  },
  boxInput(e) {
    const items = this.data.boxList;
    const values = e.detail.value
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false
      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].name === values[j]) {
          items[i].checked = true
          break
        }
      }
    }
    this.setData({
      boxList: items
    })
  },
  inputName(e) {
    this.setData({
      name: e.detail.value
    })
  },
  submit() {
    let that = this;
    let list = this.data.eyeSightList;
    let sum = '';
    for (let i = 0; i < list.length; i++) {
      let tool = list[i].tool;
      for (let j = 0; j < tool.length; j++) {
        if (tool[j].checked) {
          sum += tool[j].pName + '-' + tool[j].name + '/'
        }
      }
    }
    let eyePowerList = this.data.eyePowerList;
    for (let m = 0; m < eyePowerList.length; m++) {
      if (eyePowerList[m].checked) {
        sum = eyePowerList[m].title + '/' + sum
      }
    }
    let boxList = this.data.boxList;
    for (let n = 0; n < boxList.length; n++) {
      if (boxList[n].checked) {
        sum = boxList[n].title + '/' + sum
      }
    }
    sum += this.data.cover1;
    sum += this.data.eyeFlag1;
    sum += this.data.cover2;
    sum += this.data.eyeFlag2;
    sum += this.data.eyeRead;
    sum += this.data.luminosity;
    sum += this.data.luminosity2;
    let url = app.globalData.URL + 'pushTrainCombination', data = {
      name: this.data.name,
      combination: sum,
      pName: wx.getStorageSync('pName'),
      openId: wx.getStorageSync('openId')
    };
    app.wxRequest(url, data, (res) => {
      // console.log(res)
      if (res.data.status == 200) {
        wx.navigateBack({
          url: '/way/way?flag=' + wx.getStorageSync('pName')
        })
      }
    })
  }
})