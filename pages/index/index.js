// pages/index/index.js
Page({
  gotoView:function(){
    wx.navigateTo({
      url: '../viewDemo/viewDemo',
    })
  },
  gotoScrollView:function(){
    wx.navigateTo({
      url: '../scrollView/scrollView',
    })
  },
  gotoSwiper:function(){
    wx.navigateTo({
      url: '../swiper/swiper',
    })
  },
  gotoMovable:function(){
    wx.navigateTo({
      url: '../movable/movable',
    })
  },
  gotoCoverview:function(){
    wx.navigateTo({
      url: '../cover-view/cover-view',
    })
  }
})