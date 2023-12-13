Page({
  data: {
    name: "英汉互译",
    but:"翻译结果"
  },
  onLoad: function (options) {
    console.log(options.name)
    this.setData({
      name: options.name,
      but:options.but
    });

  }
});