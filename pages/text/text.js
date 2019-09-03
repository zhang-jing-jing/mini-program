var  initData = 'this is first line\nthis is seccond &nbsp; line'
// pages/text/text.js
Page({
  data: {
    text: initData
  },
  switchChange:function(e){
    console.log('switchChange',e.detail.value);
  }
})