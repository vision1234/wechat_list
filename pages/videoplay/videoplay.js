// 在 js 文件中
Page({
  data: {
    videoUrl:"https://api.qqsuu.cn/api/dm-xjj?apiKey=49ce2e19328cdc62a7bed9962509046d", // 替换为实际视频地址
    startX: 0, // 触摸起始点x坐标
    startY: 0, // 触摸起始点y坐标
    moveX: 0, // 触摸结束点x坐标
    moveY: 0, // 触摸结束点y坐标
    refreshing: false, // 是否正在刷新
  },
  onLoad:function (params) {
    // let url="https://api.qqsuu.cn/api/dm-xjj?apiKey=49ce2e19328cdc62a7bed9962509046d";
    // this.setData({
    //   videoUrl:url
    // })
    const videoContext = wx.createVideoContext('myVideo');
    videoContext.requestFullScreen(); // 进入全屏

  },
  touchStart: function (e) {
    this.setData({
      startX: e.touches[0].pageX,
      startY: e.touches[0].pageY,
    });
  },

  touchMove: function (e) {
    this.setData({
      moveX: e.touches[0].pageX,
      moveY: e.touches[0].pageY,
    });
  },

  touchEnd: function () {
    const { startX, startY, moveX, moveY } = this.data;
    const offsetX = moveX - startX;
    const offsetY = moveY - startY;

    // 判断是否左滑
    if (offsetX < -50 && Math.abs(offsetY) < 50) {
      this.refreshPage();
    }
  },

  refreshPage: function () {
    // 模拟刷新操作
    this.setData({
      refreshing: true,
    });

    // 获取 video 上下文，全屏播放
    const videoContext = wx.createVideoContext('myVideo');
    videoContext.requestFullScreen(); // 进入全屏

    // 模拟异步请求数据
    setTimeout(() => {
      // 更新数据后，结束刷新
      this.setData({
        refreshing: false,
      });
    }, 1000); // 模拟延迟1秒钟，实际中请替换为真实的异步请求
  },
});
