Component({
  data: {
    datas: [],
    cityText: '',
    cityValue: [],
    citys: [{
        label: '北京',
        value: '北京'
      }, {
        label: '天津',
        value: '天津'
      },
      {
        label: '上海',
        value: '上海'
      },
      {
        label: '重庆',
        value: '重庆'
      },
      {
        label: '河北',
        value: '河北'
      },
      {
        label: '山西',
        value: '山西'
      },
      {
        label: '辽宁',
        value: '辽宁'
      },
      {
        label: '吉林',
        value: '吉林'
      },
      {
        label: '黑龙江',
        value: '黑龙江'
      },
      {
        label: '江苏',
        value: '江苏'
      },
      {
        label: '浙江',
        value: '浙江'
      },
      {
        label: '安徽',
        value: '安徽'
      },
      {
        label: '福建',
        value: '福建'
      },
      {
        label: '江西',
        value: '江西'
      },
      {
        label: '山东',
        value: '山东'
      },
      {
        label: '河南',
        value: '河南'
      },
      {
        label: '湖北',
        value: '湖北'
      },
      {
        label: '湖南',
        value: '湖南'
      },
      {
        label: '广东',
        value: '广东'
      },
      {
        label: '广西',
        value: '广西'
      },
      {
        label: '海南',
        value: '海南'
      },
      {
        label: '四川',
        value: '四川'
      },
      {
        label: '贵州',
        value: '贵州'
      },
      {
        label: '云南',
        value: '云南'
      },
      {
        label: '陕西',
        value: '陕西'
      },
      {
        label: '甘肃',
        value: '甘肃'
      },
      {
        label: '青海',
        value: '青海'
      },
      {
        label: '宁夏',
        value: '宁夏'
      },
      {
        label: '新疆',
        value: '新疆'
      },
      {
        label: '香港',
        value: '香港'
      },
      {
        label: '澳门',
        value: '澳门'
      },
      {
        label: '台湾',
        value: '台湾'
      },

    ],
  },

  methods: {
    // onColumnChange(e) {
    //   console.log('picker pick:', e);
    // },

    onPickerChange(e) {
      const {
        key
      } = e.currentTarget.dataset;
      const {
        value
      } = e.detail;

      console.log('picker change:', e.detail);
      this.setData({
        [`${key}Visible`]: false,
        [`${key}Value`]: value,
        [`${key}Text`]: value.join(' '),
      });
      wx.request({
        url: "https://api.qqsuu.cn/api/dm-oilprice?apiKey=0d85ced1fe4c96d018325b143ea8d90f&prov=" + this.data.cityText,
        method: 'GET',
        success: (res) => {
          console.log('请求成功', res.data.data);
          let datas = [];
          let data = res.data.data;

          datas.push({
            name:"省份",
            value: data.prov
          });
          datas.push({
            name:"零号柴油",
            value: data.p0
          });
          datas.push({
            name:"89号汽油",
            value: data.p89
          });
          datas.push({
            name:"92号汽油",
            value: data.p92
          });
          datas.push({
            name:"95号汽油",
            value: data.p95
          });
          datas.push({
            name:"98号汽油",
            value: data.p98
          });
          datas.push({
            name:"更新时间",
            value: data.time.substring(0,19)
          });
          this.setData({
            datas: datas
          });
        },
        fail: (error) => {
          console.error('请求失败', error);
        }
      });
      console.log(this.data)
    },

    // onPickerCancel(e) {
    //   const { key } = e.currentTarget.dataset;
    //   console.log(e, '取消');
    //   console.log('picker1 cancel:');
    //   this.setData({
    //     [`${key}Visible`]: false,
    //   });
    // },

    onCityPicker() {
      this.setData({
        cityVisible: true
      });
    },

  },
});