Component({
  data: {
    name: "英汉互译",
    style: 'border-radius: 18rpx;',
    inputText: '222'
  },
  methods: {
    onTextareaInput(event) {
      console.log(event);
      this.setData({
        inputText: event.detail.value
      });
    },
    fanyi(params) {
      // console.log(this.data.inputText)
    }
  }
});