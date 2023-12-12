Page({
  name:"水瓶座",
  data: {
    fortuneList: [ {
      "type": "综合指数",
      "content": "80%"
    },],
  },
  onLoad: function (options) {
    let xz = options.xz;
    this.setData({
      name: xz,
    });
    let url = "https://api.qqsuu.cn/api/dm-fortune?astro=" + xz + "&apiKey=7e2fa640de614b2934e6199eb897635f";
    let list = []
    wx.request({
      url: url,
      method: 'GET',
      success: (res) => {
        console.log('请求成功', res.data.data.list);
        list = res.data.data.list;
        this.setData({
          fortuneList: list,
        });
      },
      fail: (error) => {
        console.error('请求失败', error);
      }
    });
    // 使用箭头函数确保在回调函数内部的 this 指向正确
    
    console.log('请求发送后');
  },
});