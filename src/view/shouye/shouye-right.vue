<template>
  <div class=" common-content animate__animated right-c animate__fadeInRight">
    <div class="flex-1">
      <div class="title-common-box">
        <div class="text-common-1-level">
          <div class="text-left">工单信息</div>
          <div class="text-shu">|</div>
          <div class="text-liner-bg"></div>
        </div>
      </div>
      <div class="flex-t">
        <div>
          <h3><span>15</span></h3>
          <p>工单总数</p>
        </div>
        <div>
          <h3><span>10</span></h3>
          <p>已处理</p>
        </div>
        <div>
          <h3><span>5</span></h3>
          <p>未处理</p>
        </div>
        <div>
          <h3><span>66.7%</span></h3>
          <p>处理率</p>
        </div>
      </div>
    </div>
    <div class="flex-2">
      <div class="title-common-box">
        <div class="text-common-1-level">
          <div class="text-left">设备信息</div>
          <div class="text-shu">|</div>
          <div class="text-liner-bg"></div>
        </div>
      </div>
      <div class="flex-s">
        <div>
          <h3>603</h3>
          <p>设备总数</p>
        </div>
        <div>
          <h3>547</h3>
          <p>在线总数</p>
        </div>
        <div>
          <h3>39</h3>
          <p>故障总数</p>
        </div>
      </div>
    </div>
    <div class="flex-3 shouye-warning">
      <warning-info :warningType="warningType"/>
    </div>
  </div>
</template>

<script>
import echarts from '@/components/chart/chart'
import WarningInfo from '@/view/warning/warning-info'
export default {
  components: {
    WarningInfo
  },
  data() {
    return {
      warningType: 'all-warning',
    }
  },
  mounted(){
    window.onresize = function(){
      setTimeout(() => {
        echarts.getInstanceByDom($('#all-warning-chart-1')[0]).resize()
        echarts.getInstanceByDom($('#all-warning-chart-2')[0]).resize()
        echarts.getInstanceByDom($('#all-warning-chart-3')[0]).resize()
      },800)
      
    }
  }
}
</script>

<style lang="scss" scoped>
.right-c {
  right: 0;
  display: flex;
  flex-direction:column;
  border-radius: 20px 0px 0px 0px;
	border: solid 1px rgba(0, 204, 255, 0.47);
  background-color: rgba(24, 49, 80, 0.6);
  .flex-1,.flex-2 {
    height: 15%;
    flex: 1;
    .flex-t {
      height: calc(100% - .45rem);
      display: flex;
      justify-content: space-around;
      align-items: center;
      span {
        color: #00ecff;
      }
      h3 {
        text-align: center;
        margin-bottom: 5px;
      }
    }
  }
  .flex-2 {
    .flex-s {
      height: calc(100% - .45rem);
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 10px;
      div {
        height: 100%;
        background-color: #084374;
        width: 1.5625rem;
        text-align: center;
        padding: 10px 0;
        -webkit-box-shadow: 0 0 5px 3px #2b9bcf inset;
        box-shadow: 0 0 5px 3px #2b9bcf inset;
        h3 {
          margin-bottom: 10px;
          color: #00ecff;
          font-size: .225rem;
        }
      }
    }
  }
  .flex-3 {
    flex: 6;
    height: 70%;
    .warning {
      height: 100%;
    }
  }
}
.title-common-box {
  border-bottom: none;
  .text-liner-bg {
  background-image: linear-gradient(90deg, 
		#00ebff 0%, 
		#6e7f96 40%);
}
}
</style>