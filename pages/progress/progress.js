// 在 js 文件中
Page({
  data: {
    list: []
  },

  onLoad: function () {
    // 模拟异步请求数据
    
      
   
  },
  search: function (e) {
    console.log()
    let url="https://api.qqsuu.cn/api/dm-caipu?apiKey=42b2fd67605ac19a72e75a1daeed27ab&word="+e.detail.value;
    wx.request({
      url: url,
      method: 'GET',
      success: (res) => {
        console.log('请求成功', res.data.data.list);  
        
        this.setData({
          list: res.data.data.list
        });
      },
      fail: (error) => {
        console.error('请求失败', error);
      }
    });
     
  }
});
