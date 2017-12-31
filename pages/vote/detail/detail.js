// pages/vote/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    voteInfo: null
  },


  radioChange: function (e) {
    let voteItems = this.data.voteInfo.voteItems;

    for (let i = 0, len = voteItems.length; i < len; ++i) {
      voteItems[i].checked = i == e.detail.value;
    }
    this.setData({
      'voteInfo.voteItems': voteItems
    });
  },

  checkboxChange: function (e) {
    let voteItems = this.data.voteInfo.voteItems;
    let values = e.detail.value;

    for (var i = 0, lenI = voteItems.length; i < lenI; ++i) {
      voteItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (i == values[j]) {
          voteItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      'voteInfo.voteItems': voteItems
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      voteInfo: JSON.parse(decodeURIComponent(options.voteInfo))
    });


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})