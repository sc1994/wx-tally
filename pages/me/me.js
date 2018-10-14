Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onClickMore() {
    console.log("click more")
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: "我"
    });
  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
  },
  test() {
    console.log("开始test")
    wx.login({
      success(res) {
        console.log(res)
        var url = `https://api.weixin.qq.com/sns/jscode2session?appid=wx1c1903a0843cf2c7&secret=2987228fedbbf33b8f865262c6562a0c&js_code=${res.code}&grant_type=authorization_code`
        wx.request({
          url: url, //开发者服务器接口地址",
          method: 'GET',
          success: res => {
            console.log(res)
          },
          fail: () => {},
          complete: (res) => {
            console.log(res)
          }
        });
      }
    })
  }
})