<template>
  <div class="warning-list">
    <div class="warning-chart">
      <div class="title-common-box">
        <div class="text-common-1-level">
          <div class="text-left">{{warningTitle}}</div>
          <div class="text-shu">|</div>
          <div class="text-liner-bg"></div>
        </div>
      </div>
      <div class="chart-block">
        <div class="chart-list">
          <div class="chart-list-radio">
            <div  :id="warningType + '-chart-1'"></div>
            <div class="radio-circle circle-one" @click="getPrevAlarm"></div>
          </div>
          <p>3</p>
          <div class="icon" @click="getWarningLevel(1)">
            <img src="../../../public/img/images/yjgj.png" alt="">
            <span>一级告警</span>
          </div>
        </div>
        <div class="chart-list">
          <div class="chart-list-radio">
            <div  :id="warningType + '-chart-2'"></div>
            <div class="radio-circle circle-two"></div>
          </div>
          <p>1</p>
          <div class="icon" @click="getWarningLevel(2)">
            <img src="../../../public/img/images/ejgj.png" alt="">
            <span>二级告警</span>
          </div>
        </div>
        <div class="chart-list">
          <div class="chart-list-radio">
            <div  :id="warningType + '-chart-3'"></div>
            <div class="radio-circle circle-three"></div>
          </div>
          <p>1</p>
          <div class="icon" @click="getWarningLevel(3)">
            <img src="../../../public/img/images/sjgj.png" alt="">
            <span>三级告警</span>
          </div>
        </div>
      </div>
    </div>
    <div class="warning-block common_list_block">
      <div class="common_b">
        <div class="b_content">
          <div class="table_box">
            <div class="table_head">
              <div class="item">告警设备</div>
              <div class="item">告警内容</div>
              <div class="item">告警时间</div>
              <div class="item">位置</div>
            </div>
            <div class="table_content" @click.stop="getPosition($event)">
              <vue-seamless-scroll :data="devListCopy" class="seamless-warp" :class-option="optionSingleHeight">
                <div class="item_content" v-for="(item, index) in devListCopy" :key="index">
                  <div class="item-title item-level-1" v-if="item.level === '一级'">{{ item.name }}</div>
                  <div class="item-title item-level-2" v-if="item.level === '二级'">{{ item.name }}</div>
                  <div class="item-title item-level-3" v-if="item.level === '三级'">{{ item.name }}</div>
                  <div class="item">{{ item.warningText }}</div>
                  <div class="item">
                    <div>{{ item.time.split(' ')[0] }} {{ item.time.split(' ')[1] }}</div>
                  </div>
                  <div class="item hvr-bounce-in">
                    <img src="../../../public/img/sample/local.png" :data-obj="JSON.stringify(item)" :key="index + 1" alt="" class="img_location" />
                  </div>
                </div>
              </vue-seamless-scroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from '@/components/chart/chart'
import vueSeamlessScroll from 'vue-seamless-scroll/src'
import { DEVLIST } from '../../mock/mock_constant'
export default {
  components: {
    vueSeamlessScroll
  },
  props: {
  warningTitle: {
    default: '告警信息',
    type: String
  },
  warningType: null
  },
  data() {
    return {
      warningInfoType: 'allWarning',
      devList: DEVLIST,
      devListCopy: [],
      lineHeight: null
    }
  },
  computed: {
    optionSingleHeight() {
      return {
        singleHeight: this.lineHeight,
        waitTime: 1500,
        step: 0.5,
        hoverStop: true,
        limitMoveNum: 8,
        waitTime: 1000
      }
    }
  },
  created(){
    let fontSize = document.querySelector('html').style.fontSize.split('px')[0]
    this.lineHeight = 0.5 * fontSize
  },
  mounted(){
    this.devListCopy = JSON.parse(JSON.stringify(this.devList))
    this.initChart({
      element: this.warningType + '-chart-1',
      color: ['#f43f3f', '#394042'],
      data: [
        { value: 60}
      ]
    })
    this.initChart({
      element: this.warningType + '-chart-2',
      color: ['#ddc221', '#394042'],
      data: [
        { value: 20}
      ]
    })
    this.initChart({
      element: this.warningType + '-chart-3',
      color: ['#00e9ff', '#394042'],
      data: [
        { value: 20}
      ]
    })
    
  },
  methods: {
    /**
     * option 图标配置
     * color: [] 数据颜色
     * data: [] 数据value
     * element 图标容器
     */
    initChart(option, element){
      let myChart = echarts.init(document.getElementById(option.element))
      myChart.setOption({
        color: option.color,
        series: [
          {
            type: 'pie',
            radius: ['95%', '100%'],
            hoverAnimation: false,
            labelLine: {
              show: false
            },
            data: option.data,
            label: {
              show: true,
              position: 'center',
              color: option.color[0],
              formatter: '{c} {b|%}',
              rich: {
                b: {
                  fontSize: 12,
                  verticalAlign: 'bottom'
                },
                a: {
                  fontSize: 16,
                  fontWeight: 'bold'
                },
              },
              emphasis: {//中间文字显示
                show: true,
              }
            }
          }
        ]
      })
    },
    /**
     * 根据告警等级刷新告警列表
     * level number
     */
    getWarningLevel(level) {
      let levelName = level === 1 ? '一级' : level === 2 ? '二级' : level === 3 ? '三级' : 'all'
      if(level === 0) {
        this.devListCopy = this.devList
      } else {
        this.devListCopy = this.devList.filter((obj) => {
          return obj.level === levelName
        })
      }
      
    },
    // 获取当前报警信息定位设备
    getPrevAlarm() {
      let obj = {
        name: '摄像头',
        location: '门诊楼一层药房',
        index: 1,
        type: '监控设备',
        modelurl: './model/menzhen_F1.glb',
        buildingName: 'waikelou_g',
        modelType: 'sxj',
        label: 'ZMSS-DDD_1184639',
        time: '2021-08-24 18:24:42',
        level: '二级',
        warningText: '无网络'
      }
      EventBus.$emit('openFloor', {
        floorIndex: obj.index,
        buildingName: obj.buildingName,
        name: obj.label,
        modelType: obj.modelType,
        sxj_open_type: true
      })
    },
    getPosition(){

    }
  }
}
</script>

<style lang="scss" scoped>
.title-common-box {
  border-bottom: none;
  
    border-bottom: none;
    border-top: none;
    background-image: linear-gradient(0deg, #0a2949 0%, #122a48 100%), linear-gradient(#0d1033, #0d1033);
      .text-liner-bg {
        background: linear-gradient(to right, #00ebff, #102a48 30%);
      }
  
}
.warning-list {
  display: flex;
  height: 2.75rem;
  margin-right: 10px;
  background-image: linear-gradient(90deg, #12243d 0%, #0e3156 100%);
  .warning-chart {
    flex: 2;
    .chart-block {
      display: flex;
      display: -webkit-flex;
      justify-content: space-around;
      padding: 0 10px;
      text-align: center;
      .chart-list {
        padding-top: 15px;
        .chart-list-radio {
          position: relative;
        }
        
        .radio-circle {
          cursor: pointer;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          animation: radar 2s infinite linear;
        }
        .circle-one {
          border: 2px solid red;
          box-shadow: 0 0 20px red;
        }
        .circle-two {
          border: 2px solid #ddc221;
          box-shadow: 0 0 20px #ddc221;
        }
        .circle-three {
          border: 2px solid #00e9ff;
          box-shadow: 0 0 20px #00e9ff;
        }
        p{
          margin: 10px 0;
          margin-top: 20px;
          color: #00ecff;
          font-size: .2rem;
          font-weight: bold;
          text-decoration: underline;
        }
        .icon {
          cursor: pointer;
          img {
            margin-right: 5px;
            width: .25rem;
            height: .225rem;
          }
        }
      }
    }
  }
  .warning-block {
    flex: 3;
    .common_b {
      height: 100%;
      padding-top: 10px;
      .b_content{
        height: 100%;
      }
      .table_box {
        margin-top: 0;
        
      }
    }
  }
}
 @keyframes radar{
  0%{transform: scale(0.3);opacity: 0.2;}
  25%{transform: scale(0.8);opacity: 0.5;}
  50%{transform: scale(1.5);opacity: 0.75;}
  75%{transform: scale(2);opacity: 1;}
  95%{transform: scale(2.5);opacity: 0.8;}
  100%{transform: scale(3);opacity: 0;}
}
#menjin-chart-1,#menjin-chart-2,#menjin-chart-3,
#ruqin-chart-1,#ruqin-chart-2,#ruqin-chart-3,
#nenghao-preview-chart-1,#nenghao-preview-chart-2,#nenghao-preview-chart-3,
#chart-4,#chart-5,#chart-6 {
  height: 1rem;
  width: 1rem;
  margin: 0 auto;
}
.menjin-sys {
  .warning-list {
    height: 100%;
    .warning-chart {
      .chart-block {
        .chart-list {
          p {
            margin: 3px 0;
          }
        }
      }
    }
    .warning-block {
      padding-bottom: 5px;
    }
  }
}
.preview-warning {
  .chart-block {
    height: calc(100% - .45rem);
  }
}
.common_list_block .common_b .table_box .table_content{
  width: 100%;
  overflow-y: hidden;
}
</style>