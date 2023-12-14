Component({
  data: {
    name: "英汉互译",
    style: 'border-radius: 18rpx;',
    but: "翻译文本",
    inputText: '',
    text: ''
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
        url = "https://api.qqsuu.cn/api/dm-translation?apiKey=ba9eeabaefa25cc3807b14c63a3945fe&text=" + this.data.inputText;
      else if (this.data.name == "收货地址解析")
        url = "https://api.qqsuu.cn/api/dm-addressparse?apiKey=4edeb43cc8b346dc11184688f3ce1167&text=" + this.data.inputText;
      wx.request({
        url: url,
        method: 'GET',
        success: (res) => {
          console.log('请求成功', res.data);
          if(this.data.name=="英汉互译")
          this.setData({
            text: res.data.result
          });
          else
          this.setData({
            text: 
            res.data.data.list[0].result.replace(/<br>/g,"\r\n")
          });
        },
        fail: (error) => {
          console.error('请求失败', error);
        }
      });
    }
  }
});