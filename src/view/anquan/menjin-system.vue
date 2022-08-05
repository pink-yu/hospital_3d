<template>
  <div class="jiankong">
    <div  class="jiankong-list">
      <el-row :gutter="10" class="jiankong-block height-100 animate__animated animate__fadeInDown">
        
        <el-col :span="6" class="height-100">
          <div class="bg-rt"> 
            <div class="height-50">
              <div>
                <h3>今日报警(件)</h3>
                <p>5</p>
              </div>
              <div>
                <h3>昨日报警(件)</h3>
                <p>4</p>
              </div>
              <div>
                <h3>日环比</h3>
                <p>125%</p>
              </div>
            </div>
            <div class="height-50">
              <div>
                <h3>本月报警(件)</h3>
                <p>240</p>
              </div>
              <div>
                <h3>上月报警(件)</h3>
                <p>300</p>
              </div>
              <div>
                <h3>月环比</h3>
                <p>80%</p>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12" class="height-100">
          <div class="bg-rt menjin-sys">
            <warning-list :warningTitle="warningTitle" :warningType="warningType" />
          </div>
        </el-col>
        <el-col :span="6" class="height-100">
          <div class="bg-rt">
            <div class="title-common-box">
              <div class="text-common-1-level">
                <div class="text-left">按区域报警次数</div>
                <div class="text-shu">|</div>
                <div class="text-liner-bg"></div>
              </div>
            </div>
            <div id="menjin-by-area-chart" ></div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="biaoji-left animate__animated animate__fadeInLeft">
      <floor-dev-tree :treeData="treeData" :searchShow="searchShow"/>
    </div>
    <jiankong-detail v-if="show"/>
    <device-info :showType="showType" />
  </div>
</template>

<script>
import echarts from '@/components/chart/chart'
import FloorDevTree from '@/components/floor-dev-tree/floor-tree'
import WarningList from '@/view/warning/warning-list'
import DeviceInfo from '@/components/device-info/index'

export default {
  components: {
    FloorDevTree,
    WarningList,
    DeviceInfo
  },
  data() {
    return {
      show: false,
      warningTitle: '门禁告警',
      warningType: 'menjin',
      treeData: [{
        id: 1,
        label: '外科楼',
        showCheckbox: true,
        children: [{
          id: 4,
          label: '-1F',
          showCheckbox: true,
          children: [{
            id: 9,
            label: '门禁1',
            
          }, {
            id: 10,
            label: '门禁2',
          }]
        }, {
          id: 2,
          label: '1F',
          showCheckbox: true,
          children: [{
            id: 5,
            label: '门禁1'
          }, {
            id: 6,
            label: '门禁2'
          }]
        }]
      }],
      searchShow: true,
      showType: 'menjin'
    }
  },
  mounted(){
    this.initChart({
      color: ['#00e9ff', '#394042'],
      element: 'menjin-by-area-chart',
      data: [{ value: 145 }, { value: 75 }]
    })
    window.onresize = function(){
      echarts.getInstanceByDom($('#menjin-by-area-chart')[0]).resize()
    }
  },
  methods: {
    getDetail() {
      this.show = true
    },
    initChart(option) {
      this.myChart = echarts.init(document.getElementById(option.element))
      this.myChart.setOption({
        title: {
          text: '次',
          textStyle: {
            fontSize: 12,
            align: 'center',
            color: '#fff'
          },
          top: -5
        },
        grid: {
          left: 30,
          top: 20,
          bottom: 20,
          right: 10
        },
        xAxis: {
          type: 'category',
          data: ['1F', '2F', '3F', '4F', '5F', '6F', '7F', '8F', '9F', '10F', '11F','12F', '13F'],
          axisLabel: {
            show: true,
            color: '#999',
            interval: 0
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#0ba2b6'
            }
          },
          axisTick: {
            lineStyle: {
              width: 2
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: '#999'
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#0ba2b6'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#345787',
              type: 'dashed' // y轴分割线类型
            }
          }
        },
        series: [
          {
            name: '数量',
            type: 'bar',
            barWidth: 8,
            label: {
              show: true,
              position: 'top',
              color: '#00ecff'
            },
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: '#3D98E8' // 0% 处的颜色
							}, {
								offset: 0.6,
								color: '#4B86F1' // 60% 处的颜色
							}, {
								offset: 1,
								color: '#5F6CFE' // 100% 处的颜色
							}], false)
            },
            data: [
              {
                value: 40
              },
              {
                value: 12
              },
              {
                value: 4
              },
              {
                value: 10
              },
              {
                value: 25
              },
              {
                value: 15
              },
              {
                value: 19
              },
              {
                value: 8
              },
              {
                value: 4
              },
              {
                value: 4
              },
              {
                value: 2
              },
              {
                value: 3
              }
            ]
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.jiankong {
  .jiankong-list {
    
    width: calc(100% - .875rem);
    margin-left: .875rem;
    position: absolute;
    z-index: 10;
    top: 70px;
    padding: 0 10px;
    .jiankong-block {
      height: 2.35rem;
      
      .bg-rt {
        height: 100%;
        background-image: linear-gradient(#0a2949, #0a2949), linear-gradient(#0d1033, #0d1033);
      }
      .height-50 {
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        p {
          background-color: #084374;
          width: 1.65rem;
          height: .45rem;
          line-height: .45rem;
          color: #00ecff;
          font-size: .225rem;
        }
        h3 {
         margin: 0 0 10px 0;
        }
      }
    }
   
  }
  .biaoji-left {
    top: 3.6rem;
  }
}
#menjin-by-area-chart {
  height: calc(100% - .45rem);
}
.title-common-box {
  border-bottom: none;
  .text-liner-bg {
  background-image: linear-gradient(90deg, 
		#00ebff 0%, 
		#0a2949 40%);
}
}
</style>