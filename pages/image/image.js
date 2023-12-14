// index.js
let touchStartX = 0;
let touchMoveX = 0;

Page({
  data: {
    file:'',
    imageSrc: '',

    refreshHintLeft: -100, // 初始位置在屏幕左侧
  },
  onLoad: function (options){
    this.setData({
      file: options.file,
    });
    let url=options.url
    console.log(url)
    if(this.data.file){
      this.setData({
        imageSrc: url,
      });
    }else{
    wx.request({
      url: url,
      method: 'GET',
      success:  (res)=> {
        console.log('请求成功', res.data.img);
        img=res.data.img;
        this.setData({
          imageSrc: img,
        });
      },
      fail:  (error)=> {
        console.error('请求失败', error);
      }
    });
  }
  },
  onTouchStart: function (e) {
    touchStartX = e.touches[0].clientX;
  },

  onTouchMove: function (e) {
    touchMoveX = e.touches[0].clientX;
    const deltaX = touchMoveX - touchStartX;

    if (deltaX > 0) {
      // 向右滑动时隐藏刷新提示
      this.setData({
        refreshHintLeft: -100,
      });
    } else {
      // 向左滑动时显示刷新提示
      this.setData({
        refreshHintLeft: 20,
      });
    }
  },

  onTouchEnd: function () {
    // 模拟刷新操作，实际中可以在这里调用你的刷新逻辑
    if (touchMoveX - touchStartX < -50) {
      // 触发刷新操作
      this.refreshPage();
    }

    // 恢复刷新提示位置
    this.setData({
      refreshHintLeft: -100,
    });
  },

  refreshPage: function () {
    // 在这里调用刷新逻辑，可以是网络请求等
    console.log('执行刷新操作');
    // 模拟刷新后更新数据
    const pages = getCurrentPages();
    // 获取当前页面的路径
    const currentPage = "/" + pages[pages.length - 1].route+"?file="+this.data.file+"&url="+this.data.imageSrc;
    console.log(currentPage)
    wx.navigateTo({
      url: currentPage,
      fail: () => {
        wx.navigateTo({
          url: '/pages/home/navigateFail/navigateFail',
        });
      },
    });
  },
});