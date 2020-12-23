// page/component//eyeSight/eyeSight.js
const app = getApp();
Page({
  data: {
    eyeSightList: [],
    name: '',
    timeList: [{
      city_id: '1分钟-',
      city_name: '1分钟'
    }, {
      city_id: '3分钟-',
      city_name: '3分钟'
    }, {
      city_id: '5分钟-',
      city_name: '5分钟'
    }, {
      city_id: '10分钟-',
      city_name: '10分钟'
    }],
    sightList: [{// 光度
      city_id: '0.50D-',
      city_name: '±0.50D'
    }, {
      city_id: '±1.00D-',
      city_name: '±1.00D'
    }, {
      city_id: '±1.50D-',
      city_name: '±1.50D'
    }, {
      city_id: '±2.00D-',
      city_name: '±2.00D'
    },
    {
      city_id: '±2.50D-',
      city_name: '±2.50D'
    }],
    luminosityList: [  //视标大小
      {
        city_id: '(20-30)',
        city_name: '20/30'
      }, {
        city_id: '(20-40)',
        city_name: '20/40'
      }, {
        city_id: '(20-50)',
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
      city_id: '1分钟-',
      city_name: '1分钟'
    }, {
      city_id: '3分钟-',
      city_name: '3分钟'
    }, {
      city_id: '5分钟-',
      city_name: '5分钟'
    }, {
      city_id: '10分钟-',
      city_name: '10分钟'
    }],
    sightList2: [{
      city_id: '±0.50D-',
      city_name: '±0.50D'
    }, {
      city_id: '±1.00D-',
      city_name: '±1.00D'
    }, {
      city_id: '±1.50D-',
      city_name: '±1.50D'
    }, {
      city_id: '±2.00D-',
      city_name: '±2.00D'
    },
    {
      city_id: '±2.50D-',
      city_name: '±2.50D'
    }],
    luminosityList2: [  //视标大小
      {
        city_id: '(20-30)',
        city_name: '20/30'
      }, {
        city_id: '(20-40)',
        city_name: '20/40'
      }, {
        city_id: '(20-50)',
        city_name: '20/50'
      }
    ],
    eyePowerList: [
      {title: "光刷-", name: '光刷', checked: false },
      {title: "红闪-", name: '红闪', checked: false },
      {title: "后像-", name: '后像', checked: false },
      {title: "光栅-", name: '光栅', checked: false },
      {title: "棋格-", name: '棋格', checked: false }
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
      if (list[i].checked) {
        sum = list[i].title + '/' + sum
      }
      let tool = list[i].tool;
      for (let j = 0; j < tool.length; j++) {
        if (tool[j].checked) {
          sum += tool[j].pName + '-' + tool[j].name + '/'
        }
        if (tool[j].name == '智能翻转镜' && tool[j].pName == '双眼调节训练') {
          if (this.data.eyeFlag1 || this.data.cover1 || this.data.luminosity) {
            sum += '双眼调节训练-智能翻转镜-'
          }
          if (this.data.eyeFlag1) {
            sum += that.data.eyeFlag1;
          }
          if (this.data.cover1) {
            sum += that.data.cover1;
          }
          if (this.data.luminosity) {
            sum += that.data.luminosity;
          }
          sum += '/'
        } else if (tool[j].name == '双面镜' && tool[j].pName == '单眼调节训练') {       
          if (this.data.eyeFlag2 || this.data.cover2 || this.data.luminosity2) {
            sum += '单眼调节训练-双面镜-'
          }
          if (this.data.eyeFlag2) {
            sum += that.data.eyeFlag2;
          }
          if (this.data.cover2) {
            sum += that.data.cover2;
          }
          if (this.data.luminosity2) {
            sum += that.data.luminosity2;
          }
          sum += '/'
        } else if (tool[j].name == '镜片阅读') {
          sum += this.data.eyeRead;
        } else if (tool[j].name == '弱视综合治疗仪') {
           sum += '视刺激-弱视综合治疗仪-';
           let eyePowerList = this.data.eyePowerList;
           for (let m = 0; m < eyePowerList.length; m++) {
            if (eyePowerList[m].checked) {
            sum += eyePowerList[m].title
            }
          }
          sum += '/'
        } else if (tool[j].name == '圆盘') {
          let boxList = that.data.boxList;
          for (let n = 0; n < boxList.length; n++) {
            if (boxList[n].checked) {
              sum = boxList[n].title + '/' + sum
            }
          }
        }
      }
    }
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