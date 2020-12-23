// Componet/Componet.js
const app = getApp();
Component({
  properties: {
    propArray: {
      type: Array,
    },
  },
  data: {
    selectShow: false,//初始option不显示
    nowText: "切换孩子",//初始内容
    animationData: {},//右边箭头的动画
    show: false,
    prevRoute: ''
  },
  methods: {
    // 添加孩子按钮
    // hideview() {
    //   this.setData({
    //     show: true
    //   })
    // },
    // hide() {
    //   this.setData({
    //     show: false
    //   })
    // },
    onShow() {
      let pages = getCurrentPages();
      let prevpage = pages[pages.length - 2];//上一个页面对象

      console.log(prevpage.route)//上一个页面路由地址
    },
    //option的显示与否
    selectToggle: function () {
      var nowShow = this.data.selectShow;//获取当前option显示的状态
      //创建动画
      var animation = wx.createAnimation({
        timingFunction: "ease"
      })
      this.animation = animation;
      if (nowShow) {
        animation.rotate(0).step();
        this.setData({
          animationData: animation.export()
        })
      } else {
        animation.rotate(180).step();
        this.setData({
          animationData: animation.export()
        })
      }
      this.setData({
        selectShow: !nowShow
      })
    },
    //设置内容
    setText: function (e) {
      var nowData = this.properties.propArray;//当前option的数据是引入组件的页面传过来的，所以这里获取数据只有通过this.properties
      var nowIdx = e.target.dataset.index;//当前点击的索引
      var nowText = nowData[nowIdx].name;//当前点击的内容
      var id = e.target.dataset.id;
      let gender = e.target.dataset.gender;
      let birthday = e.target.dataset.birthday;
      let balance = e.target.dataset.balance;
      // wx.setStorageSync('studentName', nowText);
      // wx.setStorageSync('birthday', birthday);
      // wx.setStorageSync('studentId', id);
      // wx.setStorageSync('balance', balance);
      // wx.setStorageSync('gender', gender);
      // 自定义一个事件，并且传值
      this.triggerEvent('myevent', { studentId: id, studentName: nowText, params: nowText, gender: gender, birthday: birthday, balance: balance })
      // this.triggerEvent('chilrenList',{childrenList: childrenList})
      //再次执行动画，注意这里一定，一定，一定是this.animation来使用动画
      this.animation.rotate(0).step();
      this.setData({
        selectShow: false,
        // nowText: nowText,
        animationData: this.animation.export()
      })
    },
    // 手动添加
    gotoManu() {
      wx.navigateTo({
        url: '/manual/manual'
      })
    }
  }
})