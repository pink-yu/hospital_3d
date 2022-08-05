<template>
  <div style="height: 100%">
    <el-scrollbar class="el-head-scroll">
      <div class="report-list">
        <div class="report-c clearfix">
          <div class="fl">2022年能耗报告</div>
          <div class="fr hvr-shutter-in-horizontal">下载</div>
        </div>
        <div class="report-c clearfix">
          <div class="fl">2022年能耗报告</div>
          <div class="fr hvr-shutter-in-horizontal">下载</div>
        </div>
        <div class="report-c clearfix">
          <div class="fl">2022年能耗报告</div>
          <div class="fr hvr-shutter-in-horizontal">下载</div>
        </div>
        <div class="report-c clearfix">
          <div class="fl">2022年能耗报告</div>
          <div class="fr hvr-shutter-in-horizontal">下载</div>
        </div>
        <div class="report-c clearfix">
          <div class="fl">2022年能耗报告</div>
          <div class="fr hvr-shutter-in-horizontal">下载</div>
        </div>
        <div class="report-c clearfix">
          <div class="fl">2022年能耗报告</div>
          <div class="fr hvr-shutter-in-horizontal">下载</div>
        </div>
        <div class="report-c clearfix">
          <div class="fl">2022年能耗报告</div>
          <div class="fr hvr-shutter-in-horizontal">下载</div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  props: {
    reportText: {
      default: '能耗报告',
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.title-common-box {
  border-bottom: none;
}
.title-common-box .text-common-1-level .text-liner-bg {
  background: linear-gradient(to right, #00ebff, #102a48 30%);
}
.time-click {
  position: absolute;
  top: 0;
  right: 0;
  div {
    display:  inline-block;
    height: 28px;
    width: 28px;
    background-image: linear-gradient(
		#084374, 
		#084374), 
	linear-gradient(
		#58d9f9, 
		#58d9f9);
    cursor: pointer;
    text-align: center;
    line-height: 28px;
    margin-right: .125rem;
    &:hover {
      background: #58d9f9;
    }
  }
  div.active {
    background: #58d9f9;
  }
}
.el-head-scroll {
  height: calc(100% - 36px);
}
.report-list {
  
  padding: 10px;
  .report-c {
    height: .45rem;
    line-height: .45rem;
    margin-bottom: 10px;
    padding: 0 10px;
	  background-image: linear-gradient(90deg, 
		rgba(23, 72, 100, 0.64) 0%, 
		#09161c 100%);
    div:first-child {
      color: #00ebff;
    }
    div:last-child {
      margin-top: .075rem;
      text-align: center;
      width: .8rem;
      height: .3rem;
      line-height: .3rem;
      background: #008c99;
      border-radius: 12px 0px 12px 0px;
      cursor: pointer;
    }
    
    .hvr-shutter-in-horizontal:before {
      background: #084374;
      border-radius: 12px 0px 12px 0px;
    }
  }
}
</style>