Component({
  data: {
    img1: '/images/333.png',
    border: {
      color: '#f6f6f6',
    },
    list: [
       
      {
        "title": "白羊座",
        "img": '/images/白羊座.png',
      },
      {
        "title": "金牛座",
        "img": '/images/金牛座.png',
      }, {
        "title": "双子座",
        "img": '/images/双子座.png',
      }, {
        "title": "巨蟹座",
        "img": '/images/巨蟹座.png',
      }, {
        "title": "狮子座",
        "img": '/images/狮子座.png',
      }, {
        "title": "处女座",
        "img": '/images/处女座.png',
      }, {
        "title": "天秤座",
        "img": '/images/天秤座.png',
      }, {
        "title": "天蝎座",
        "img": '/images/天蝎座.png',
      }, {
        "title": "射手座",
        "img": '/images/射手座.png',
      }, {
        "title": "摩羯座",
        "img": '/images/摩羯座.png',
      }, {
        "title": "水瓶座",
        "img": '/images/水瓶座.png',
      }, {
        "title": "双鱼座",
        "img": '/images/双鱼座.png',
      },
    ]
  },
  // 在 pageA 页面的相应事件处理函数中
  // wx.navigateTo({
  //   url: '/pages/pageB/pageB?param1=value1&param2=value2',
  // })
  methods: {
    clickHandle(e) {
      let name = e.currentTarget.dataset.item.title;
      let path = '/pages/star/star';
      wx.navigateTo({
        url: path +"?xz="+name,
        fail: () => {
          wx.navigateTo({
            url: '/pages/home/navigateFail/navigateFail',
          });
        },
      });
    
    },
  }
});