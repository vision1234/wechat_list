Component({
  data: {
    img1: '/images/333.png',
    border: {
      color: '#f6f6f6',
    },
    list: [{
        "title": "随机小姐姐视频",
        "img": '/images/小姐姐.png',
        "type": 'video',
        "url": 'https://api.qqsuu.cn/api/dm-xjj?type=json&apiKey=49ce2e19328cdc62a7bed9962509046d'
      },
      {
        "title": "随机卖家秀图",
        "img": '/images/卖家秀.png',
        "type": 'image',
        "url": 'https://api.qqsuu.cn/api/dm-littlesister?type=json&apiKey=b18fee09b7552ae303b705387c5d2525',
        // "next": true
      },
      {
        "title": "星座运势",
        "img": '/images/星座.png',
        "type": 'star'
      },
      {
        "title": "网抑云随机歌曲",
        "img": '/images/网抑云.png',
        "type": 'download'
      }, {
        "title": "实时油价",
        "img": '/images/价格.png',
        "type": 'you'
      },
      {
        "title": "朋友圈文案",
        "img": '/images/朋友圈.png',
        "type": 'text'
      },
      {
        "title": "菜谱查询",
        "img": '/images/菜谱.png',
        "type": 'caipu'
      },
      {
        "title": "土味情话",
        "img": '/images/土味情话1.png',
        "type": 'text'
      }, {
        "title": "IT资讯",
        "img": '/images/it咨询.png',
        "type": 'news'
      },
      {
        "title": "舔狗日记",
        "img": '/images/舔狗日记.png',
        "type": 'text'
      }, {
        "title": "每日简报",
        "img": '/images/报纸.png',
        "type": 'news'
      },
      {
        "title": "60秒读懂世界",
        "img": '/images/读懂世界.png',
        "type": 'image',
        "url": 'https://api.qqsuu.cn/api/dm-60s?type=img&apiKey=a5c54583a334f3820f18cdd9e30f0dca',
        "file": true
      }, {
        "title": "英汉互译",
        "img": '/images/英汉互译.png',
        "type": 'fanyi'
      },
      {
        "title": "周公解梦",
        "img": '/images/周公解梦.png',
        "type": 'fanyi'
      }, {
        "title": "收货地址解析",
        "img": '/images/地址.png',
        "type": 'fanyi'
      },
      {
        "title": "摸鱼人日历",
        "img": '/images/摸鱼.png',
        "type": 'image',
        "url": 'https://api.qqsuu.cn/api/dm-moyu?type=img&apiKey=0f140737dc9825c3afddfa9792d411c8',
        "file": true
      }, {
        "title": "渣男语录",
        "img": '/images/渣男语录.png',
        "type": 'text'
      },
      {
        "title": "随机各类头像",
        "img": '/images/头像.png',
        "type": 'image'
      },
    ]
  },
  // 在 pageA 页面的相应事件处理函数中
  // wx.navigateTo({
  //   url: '/pages/pageB/pageB?param1=value1&param2=value2',
  // })
  methods: {
    clickHandle(e) {
      let name = e.currentTarget.dataset.item.type;
      let targetUrl = e.currentTarget.dataset.item.url;
      let path = `/pages/${name}/${name}`;
      let file = e.currentTarget.dataset.item.file | false;
      let title=e.currentTarget.dataset.item.title;
      if (name == "image") {
        wx.navigateTo({
          url: path + "?file=" + file + "&url=" + targetUrl,
          fail: () => {
            wx.navigateTo({
              url: '/pages/home/navigateFail/navigateFail',
            });
          },
        });
      } else if (name == "star") {
        wx.navigateTo({
          url: "/pages/cell/cell",
          fail: () => {
            wx.navigateTo({
              url: '/pages/home/navigateFail/navigateFail',
            });
          },
        });
      }else if (name == "text") {
        wx.navigateTo({
          url: "/pages/collapse/collapse?name="+title,
          fail: () => {
            wx.navigateTo({
              url: '/pages/home/navigateFail/navigateFail',
            });
          },
        });
      }
    }
  }
});