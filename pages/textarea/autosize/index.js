Component({
  data: {
    name: "英汉互译",
    style: 'border-radius: 18rpx;',
    but: "翻译文本",
    inputText: ''
  },
  properties: {
    name: {
      type: String,
      value: '英汉互译'
    },
    but: {
      type: String,
      value: '翻译文本'
    }
  },

  methods: {

    onTextareaInput(event) {
      // console.log(event);
      this.setData({
        inputText: event.detail.value
      });
    },
    fanyi() {

      let url = "https://api.qqsuu.cn/api/dm-dream?num=1&apiKey=8eccf01fc996a7357617491e0d86f547&word=" + this.data.inputText;
      if (this.data.name == "英汉互译")
        url = "https://api.qqsuu.cn/api/dm-dream?num=1&word=" + this.data.inputText;
      else if (this.data.name == "收货地址解析")
        url = "https://api.qqsuu.cn/api/dm-addressparse?apiKey=4edeb43cc8b346dc11184688f3ce1167&text=" + this.data.inputText;
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
    }
  }
});