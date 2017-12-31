// pages/vote/create/create.js
const _ = require('../../../utils/underscore.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: "radio",
    title: '',
    description: '',
    voteItems: [{
      text: ""
    }, {
      text: ""
    }],
    date: "2016-09-01",
    time: "12:01",
  },

  bindRemoveVoteItemTap: function (e) {
    if (this.data.voteItems.length > 2) {
      console.log(this.data.voteItems.length);
      this.setData({
        voteItems: _.without(this.data.voteItems, this.data.voteItems[e.currentTarget.dataset.index])
      })
    }
  },

  bindAddVoteItemTap: function (e) {
    this.data.voteItems.push({ text: "" })
    this.setData({
      voteItems: this.data.voteItems
    })
  },

  bindVoteItemInput: function (e) {
    let data = {};
    const key = 'voteItems[' + e.currentTarget.dataset.index + '].text';

    data[key] = e.detail.value;
    this.setData(data);
  },

  bindSubmitVoteTap: function (e) {
    console.log(this.data);

    wx.redirectTo({
      url: '/pages/vote/detail/detail?voteInfo=' + encodeURIComponent(JSON.stringify(this.data)),
    });
  },

  bindVoteTitleInput: function (e) {
    this.setData({
      title: e.detail.value
    });
  },

  bindVoteDescriptionInput: function (e) {
    this.setData({
      description: e.detail.value
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      type: options.type
    });

    if (options.type == 'radio') {
      wx.setNavigationBarTitle({
        title: "创建单选投票"
      });
    } else {
      wx.setNavigationBarTitle({
        title: "创建多选投票"
      });
    }
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