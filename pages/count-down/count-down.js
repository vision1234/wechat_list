// 在 js 文件中
Page({
  data: {
    newsList: [
      
      // 其他新闻项...
    ]
  },
  onLoad: function () {
    wx.request({
      url: "https://api.qqsuu.cn/api/dm-it?num=10&apiKey=8f8bfb0ea586f5f93bc53254e72c63f8" ,
      method: 'GET',
      success: (res) => {
        console.log('请求成功', res.data.data);
        let newsList = res.data.data.newslist;

       
        this.setData({
          newsList: newsList
        });
      },
      fail: (error) => {
        console.error('请求失败', error);
      }
    });
  },
  redirectToDetail: function (event) {
    const index = event.currentTarget.dataset.index;
    const url = this.data.newsList[index].url;
    // 跳转到详情页
    wx.navigateTo({
      url: '/pages/detail/detail?url=' + encodeURIComponent(url)
    });
  }
});
