Page({
    data: {
        name: "舔狗日记",
        text: "汪汪"
    },
    onLoad: function (options) {
      let name = options.name;
      this.setData({
        name: name,
      });
      let url="https://api.qqsuu.cn/api/dm-tiangou";
      switch(name){
        case "渣男语录":
          url="https://api.qqsuu.cn/api/dm-zhanan";
          break;
        case "朋友圈文案":
          url="https://api.qqsuu.cn/api/dm-pyqwenan";
          break;
        case "土味情话":
          url="https://api.qqsuu.cn/api/dm-pyqwenan";
          break;
        default:
          url="https://api.qqsuu.cn/api/dm-tiangou";
          break;
      }
      wx.request({
        url: url,
        method: 'GET',
        success: (res) => {
          console.log('请求成功', res.data.data);  
          
          this.setData({
            text: res.data.data.content
          });
        },
        fail: (error) => {
          console.error('请求失败', error);
        }
      });
      // 使用箭头函数确保在回调函数内部的 this 指向正确
      
      console.log('请求发送后');
    },
    handleChange(e) {
        this.setData({
            activeValues: e.detail.value,
        });
    },
});
