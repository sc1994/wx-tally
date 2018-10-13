Component({
  data: {
    active: 0
  },
  // event.detail 的值为当前选中项的索引
  methods: {
    onChange: function (event) {
      console.log(event)
      wx.switchTab({
        url: '/pages/me/me'
      });
    }
  },
  onLoad(query) {
    console.log(query)
  }
})