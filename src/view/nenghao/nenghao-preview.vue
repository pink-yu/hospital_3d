<template>
  <div style="height:100%;">
    <el-row :gutter="10" style="height:29%">
      <el-col :span="11" class="height-100">
        <div class="preview-b">
          <div class="preview-b-list">
            <div class="preview-b-list-l">
              <img src="../../../public/img/images/zjzmj.png" alt="">
            </div>
            <div class="preview-b-list-r">
              <div>
                <h3>{{tongjiDevData.overallFloorage}}</h3>
                <p>总建筑面积(㎡)</p>
              </div>
            </div>
          </div>
          <div class="preview-b-list">
            <div class="preview-b-list-l">
              <img src="../../../public/img/images/zysl.png" alt="">
            </div>
            <div class="preview-b-list-r">
              <div>
                <h3>{{tongjiDevData.totalEnergy}}</h3>
                <p>建筑总能耗(tec)</p>
              </div>
            </div>
          </div>
          <div class="preview-b-list">
            <div class="preview-b-list-l">
              <img src="../../../public/img/images/dwmjhd.png" alt="">
            </div>
            <div class="preview-b-list-r">
              <div>
                <h3>{{tongjiDevData.unitAreaEnergy}}</h3>
                <p>建筑单位能耗(tec/㎡)</p>
              </div>
            </div>
          </div>
        </div>
        <div class="preview-b mt10">
          <div class="preview-b-list">
            <div class="preview-b-list-l">
              <img src="../../../public/img/images/zjzmj.png" alt="">
            </div>
            <div class="preview-b-list-r">
              <div>
                <h3>{{airDevice.Devices}}/{{airDevice.onlineDevices}}</h3>
                <p>气表总数/在线(个)</p>
              </div>
            </div>
          </div>
          <div class="preview-b-list">
            <div class="preview-b-list-l">
              <img src="../../../public/img/images/dbsl.png" alt="">
            </div>
            <div class="preview-b-list-r">
              <div>
                <h3>{{powerDevice.Devices}}/{{powerDevice.onlineDevices}}</h3>
                <p>电表总数/在线(个)</p>
              </div>
            </div>
          </div>
          <div class="preview-b-list">
            <div class="preview-b-list-l">
              <img src="../../../public/img/images/sbsl.png" alt="">
            </div>
            <div class="preview-b-list-r">
              <div>
                <h3>{{waterDevice.Devices}}/{{waterDevice.onlineDevices}}</h3>
                <p>水表总数/在线(个)</p>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="13" class="height-100 left-warning preview-warning">
        <warning-list :warningTitle="warningTitle"  :warningType="warningType"/>
      </el-col>
    </el-row>
    <div class="preview-bg">
      <div class="container-bg height-100">
        <el-row :gutter="50" class="height-50">
          <el-col :span="8" class="height-100">
            <div class="title-common-box title-box-top ">
              <div class="text-common-1-level">
                <div class="text-left">电耗能概况</div>
                <div class="text-shu">|</div>
                <div class="text-liner-bg"></div>
              </div>
              <el-date-picker
                class="date-select"
                placeholder="选择日期"
                v-model="value1"
                value-format="yyyy-MM-dd"
                type="date">
              </el-date-picker>
              <div class="export-btn hvr-push el-icon-upload2">导出</div>
            </div>
            <nenghao-bytime ref="nh_chart_1" class="height-c" :chartOption="chartOption" />
          </el-col>
          <el-col :span="8" class="height-100">
            <div class="title-common-box title-box-top ">
              <div class="text-common-1-level">
                <div class="text-left">水耗能概况</div>
                <div class="text-shu">|</div>
                <div class="text-liner-bg"></div>
              </div>
              <el-date-picker
                class="date-select"
                placeholder="选择日期"
                v-model="value2"
                value-format="yyyy-MM-dd"
                type="date">
              </el-date-picker>
              <div class="export-btn hvr-push el-icon-upload2">导出</div>
            </div>
            <nenghao-bytime ref="nh_chart_2" class="height-c" :chartOption="chartOption2" />
          </el-col>
          <el-col :span="8" class="height-100">
            <div class="title-common-box title-box-top ">
              <div class="text-common-1-level">
                <div class="text-left">气耗能概况</div>
                <div class="text-shu">|</div>
                <div class="text-liner-bg"></div>
              </div>
              <el-date-picker
                class="date-select"
                placeholder="选择日期"
                v-model="value3"
                value-format="yyyy-MM-dd"
                type="date">
              </el-date-picker>
              <div class="export-btn hvr-push el-icon-upload2">导出</div>
            </div>
            <nenghao-bytime ref="nh_chart_3" class="height-c" :chartOption="chartOption3" />
          </el-col>
        </el-row>
        <el-row :gutter="50" class="height-50">
          <el-col :span="8" class="height-98">
            <nenghao-compare :tongjiData="tongjiDataPower" :unitType="unitType1" />
          </el-col>
          <el-col :span="8" class="height-98">
            <nenghao-compare :tongjiData="tongjiDataWater" :unitType="unitType2" />
          </el-col>
          <el-col :span="8" class="height-98">
            <nenghao-compare :tongjiData="tongjiDataGas" :unitType="unitType2" />
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
let stompClient
let stompClient2
import WarningList from '@/view/warning/warning-list'
import NenghaoBytime from '@/view/nenghao/nenghao-bytime'
import NenghaoCompare from '@/view/nenghao/nenghao-compare'
import echarts from '@/components/chart/chart'

import store from '@/store'

import API from '@/api/api'
import {getDateByType} from '@/util/util'

import { ws_socket } from '@/util/ws.js'

export default {
  components: {
    WarningList,
    NenghaoBytime,
    NenghaoCompare
  },
  data (){
    return {
      warningTitle: '能耗类告警',
      warningType: 'nenghao-preview',
      unitType2: 'm³',
      unitType1: 'kwh',
      chartOption: {
        chart_index: 1,
        chart_type: 'power',
        chartData: []
      },
      chartOption2: {
        chart_index: 2,
        chart_type: 'water',
        chartData: []
      },
      chartOption3: {
        chart_index: 3,
        chart_type: 'gas',
        chartData: []
      },
      tongjiDevData: {},
      airDevice: {},
      powerDevice: {},
      waterDevice: {},
      tongjiDataPower: {
        dayCurrent: ''
      },
      tongjiDataWater: {
        dayCurrent: ''
      },
      tongjiDataGas: {
        dayCurrent: ''
      },
      value1: this.getNowDate(),
      value2: this.getNowDate(),
      value3: this.getNowDate(),
    }
  },
  created(){
  },
  mounted(){
    
    window.onresize = function(){
      echarts.getInstanceByDom($('#nenghao-chart-1')[0]).resize()
      echarts.getInstanceByDom($('#nenghao-chart-2')[0]).resize()
      echarts.getInstanceByDom($('#nenghao-chart-3')[0]).resize()
      
    }
    this.createWebsocketConnect()
  
    this.getNenghaoPreviewByTongji()
  },
  methods: {
    /**
     * 获取能耗概览在线设备统计数据
     */
    getNenghaoPreviewByTongji(){
      API.nenghaoPreviewByTongji().then((res) => {
        this.tongjiDevData = res.data.data
        this.airDevice = this.tongjiDevData.airDevice
        this.powerDevice = this.tongjiDevData.powerDevice
        this.waterDevice = this.tongjiDevData.waterDevice
      })
    },
    createWebsocketConnect() {
      let _this = this
      let token = store.getters.access_token
      let headers = {
        'Authorization': 'Bearer ' + token
      }
      
      let wsTopic = "/user/topic/statIncrEnergyDataAndQoqWebsocket";
      stompClient = ws_socket.connection()

      stompClient.connect(
        headers, 
        (frame) => {
          console.log('websocket连接成功:' + frame)
          stompClient.subscribe(wsTopic, (response) => {
            let data = JSON.parse(response.body)
            let arr = ['power', 'water', 'gas']
            arr.forEach((item) => {
              _this['tongjiData' + item.slice(0,1).toUpperCase() + item.slice(1)].dayCurrent = data[item].day.current
              _this['tongjiData' + item.slice(0,1).toUpperCase() + item.slice(1)].dayLast = data[item].day.last
              _this['tongjiData' + item.slice(0,1).toUpperCase() + item.slice(1)].dayQoq = data[item].day.qoq

              _this['tongjiData' + item.slice(0,1).toUpperCase() + item.slice(1)].monthCurrent = data[item].month.current
              _this['tongjiData' + item.slice(0,1).toUpperCase() + item.slice(1)].monthLast = data[item].month.last
              _this['tongjiData' + item.slice(0,1).toUpperCase() + item.slice(1)].monthQoq = data[item].month.qoq

              _this['tongjiData' + item.slice(0,1).toUpperCase() + item.slice(1)].yearCurrent = data[item].year.current
              _this['tongjiData' + item.slice(0,1).toUpperCase() + item.slice(1)].yearLast = data[item].year.current
              _this['tongjiData' + item.slice(0,1).toUpperCase() + item.slice(1)].yearQoq = data[item].year.current
            })
          })
        },
        (error) => {
          console.log(error)
        }
      )

   
      
      
      let wsTopic2 = '/user/topic/statIncrEnergyDataAndHistogramWebsocket';
      stompClient2 = ws_socket.connection()

      stompClient2.connect(
        headers, 
        (frame) => {
          console.log('websocket连接成功:' + frame)
          stompClient2.subscribe(wsTopic2, (response) => {
            let data = JSON.parse(response.body)
            _this.loadChartData(data)
          })
        },
        (error) => {
          console.log(error)
        }
      )

      
    },
    loadChartData(data) {
      let arr = ['power', 'water', 'gas']
      arr.forEach((item, index) => {
        this.$refs['nh_chart_' + (index+1)].loadData({
          listData: data[item].Histogram
        })
      })
    },
    getNowDate(){
      let dateObj = getDateByType()
      return dateObj.year + '-' + dateObj.month + '-' + dateObj.date
    }
  },
  destroyed() {
    ws_socket.destroyConnection()
  }
  
}
</script>

<style lang="scss" scoped>

.preview-b {
  display: flex;
  justify-content: space-around;
  height: calc((100% - 10px) / 2);
  .preview-b-list {
    width: 3.125rem;
    border: 1px solid #084374;
    display: flex;
    .preview-b-list-l {
      flex: 1;
      background-color: #084374;
      line-height: 1.25rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .preview-b-list-r {
      flex: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      h3 {
        text-align: center;
        color: #00ecff;
        font-size: .225rem;
        margin-bottom: 5px;
      }
    }
    
  }
}
.left-warning {
  .warning-list {
    height: 100%;
    .warning-chart {
      .chart-block {
        height: calc(100% - .45rem);
      }
    }
  }
}
.height-98 {
  height: 98%;
}
.preview-bg {
  height: 71%;
  padding: 10px;
  // background-image: linear-gradient(0deg, #0b2b4c 0%, #031934 100%), linear-gradient(#060710, #09181f);
  // background-image: linear-gradient(0deg, 
	// 	#0a2949 0%, 
	// 	#122a48 100%), 
	// linear-gradient(
	// 	#0d1033, 
	// 	#0d1033);
  .height-50 {
    height: 50%;
  }
  .height-c {
    height: calc(100% - .45rem);
    .chart-height {
      height: 100%;
    }
  }
  .title-common-box {
    position: relative;
    border-bottom: none;
    border-top: none;
    background-image: linear-gradient(90deg, rgba(23, 72, 100, 0.64) 0%, #102a48 100%);
    .text-liner-bg {
      background: linear-gradient(to right, #00ebff, #102a48 30%);
    }
    ::v-deep.date-select {
      position: absolute;
      right: 100px;
      height: .45rem;
      width: 2.125rem;
      top: 0;
      .el-input__inner {
        height: .45rem;
        line-height: .45rem;
        background: #232d39;
        border: solid 1px rgba(8, 67, 116, 0.85);
      }
      .el-input__icon {
        line-height: .45rem;
      }
    }
    .export-btn {
      position: absolute;
      width: .8rem;
      text-align: center;
      line-height: .3rem;
      height: .3rem;
      background-image: linear-gradient(#008c99,  #008c99), linear-gradient(#5ebbb6, #5ebbb6);
      border-radius: 12px 0px 12px 0px;
      cursor: pointer;
      right: 5px;
      top: .075rem;
    }
  }
}
</style>