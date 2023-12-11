Component({
  data: {
    imageSrc: '/images/01324.jpg',
  },
  ready: function () {
    let img=''
    wx.request({
      url: 'https://api.qqsuu.cn/api/dm-littlesister?type=json&apiKey=b18fee09b7552ae303b705387c5d2525',
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
   
  },
});
