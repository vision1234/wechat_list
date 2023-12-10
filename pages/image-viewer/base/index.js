import Toast from 'tdesign-miniprogram/toast/index';

Component({
  data: {
    visible: true,
    showIndex: false,
    closeBtn: false,
    deleteBtn: false,
    images: [

    ],
  },
  ready: function () {
    let imgs=[];
    for (let i = 0; i <= 1; i++) {
      
    wx.request({
      url: 'https://api.qqsuu.cn/api/dm-littlesister?type=json&apiKey=b18fee09b7552ae303b705387c5d2525',
      method: 'GET',
      success: function (res) {
        console.log('请求成功', res.data);
        imgs.push(res.data.img)
        console.log(imgs)
      },
      fail: function (error) {
        console.error('请求失败', error);
      }
    });
    
    }
    this.setData({
      images: imgs,
      showIndex: false,
      visible: true,
    });
  },
  methods: {

    onChange(e) {
      const {
        detail: {
          index
        },
      } = e;
      Toast({
        context: this,
        selector: '#t-toast',
        message: `翻到第${index + 1}个`,
      });
    },

    onDelete(e) {
      const {
        detail: {
          index
        },
      } = e;
      Toast({
        context: this,
        selector: '#t-toast',
        message: `删除第${index + 1}个`,
      });
    },

    onClose(e) {
      const {
        detail: {
          trigger
        },
      } = e;
      if (trigger === 'overlay') {
        Toast({
          context: this,
          selector: '#t-toast',
          message: '点击overlay关闭',
        });
      } else if (trigger === 'button') {
        Toast({
          context: this,
          selector: '#t-toast',
          message: `点击button关闭`,
        });
      }
      this.setData({
        visible: false,
      });
    },
    onClose(e) {
      const {
        detail: {
          trigger
        },
      } = e;
      if (trigger === 'overlay') {
        Toast({
          context: this,
          selector: '#t-toast',
          message: '点击overlay关闭',
        });
      } else if (trigger === 'button') {
        Toast({
          context: this,
          selector: '#t-toast',
          message: `点击button关闭`,
        });
      }
      this.setData({
        visible: false,
      });
    },

  },
});