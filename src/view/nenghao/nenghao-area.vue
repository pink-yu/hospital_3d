<template>
  <div class="nenghao-area">
    <div class="height-col p10">
      <div class="height-100">
        <el-row class="height-100" :gutter="5" >
            <el-col :span="8" class="height-100">
              <div class="area-col">
                <div class="title-common-box">
                  <div class="text-common-1-level">
                    <div class="text-left">电耗能个区域占比</div>
                    <div class="text-shu">|</div>
                    <div class="text-liner-bg"></div>
                  </div>
                
                  <nenghao-pick-date class="picker-b" @changeDate="changeDate1"/>
                  <div class="export-btn hvr-push el-icon-upload2">导出</div>
                </div>
                <nenghao-pie ref="pie-chart-1" class="pie-height" :pieIndex="1"/>
              </div>
            </el-col>
          
          <el-col :span="8" class="height-100">
            <div class="area-col">
              <div class="title-common-box">
                <div class="text-common-1-level">
                  <div class="text-left">水耗能个区域占比</div>
                  <div class="text-shu">|</div>
                  <div class="text-liner-bg"></div>
                </div>
                <nenghao-pick-date @changeDate="changeDate2"/>
              </div>
              <nenghao-pie ref="pie-chart-2" class="pie-height" :pieIndex="2"/>
            </div>
          </el-col>
          <el-col :span="8" class="height-100">
            <div class="area-col">
              <div class="title-common-box">
                <div class="text-common-1-level">
                  <div class="text-left">气耗能个区域占比</div>
                  <div class="text-shu">|</div>
                  <div class="text-liner-bg"></div>
                </div>
                <nenghao-pick-date @changeDate="changeDate3"/>
              </div>
              <nenghao-pie ref="pie-chart-3" class="pie-height" :pieIndex="3"/>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="height-col-67">
      <div class="height-100 container-bg">
        <el-row :gutter="20"  class="height-100">
          <div class="col-row-bg ">
            <el-col :span="7" class="height-100">
              <div class="height-50">
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
                <nenghao-bytime ref="bar-chart-1" :chartOption="chartOption" />
              </div>
              <nenghao-compare :tongjiData="tongjiDataPower" :unitType="unitType1" />
            </el-col>
            <el-col :span="7" class="height-100">
              <div class="height-50">
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
                <nenghao-bytime ref="bar-chart-2" :chartOption="chartOption2" />
              </div>
              <nenghao-compare :tongjiData="tongjiDataWater" :unitType="unitType2" />
            </el-col>
            <el-col :span="7" class="height-100">
              <div class="height-50">
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
                <nenghao-bytime ref="bar-chart-3" :chartOption="chartOption3" />
              </div>
              <nenghao-compare :tongjiData="tongjiDataGas" :unitType="unitType2" />
            </el-col>
            <el-col :span="3" class="height-100">
              <div class="font-s">楼层筛选</div>
              <div class="floor-con">
                <floor-dev-tree :treeData="treeData"  :callSource="callSource" :treeType="treeType"/>
              </div>
            </el-col>
          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>

import echarts from '@/components/chart/chart'
import NenghaoPie from './nenghao-area-pie.vue'
import NenghaoReport from './nenghao-report.vue'
import NenghaoPickDate from './nenghao-pick-date.vue'

import NenghaoBytime from '@/view/nenghao/nenghao-bytime'
import NenghaoCompare from '@/view/nenghao/nenghao-compare'
import FloorDevTree from '@/components/floor-dev-tree/floor-tree'

import API from '@/api/api'
import {getDateByType} from '@/util/util'

import { getNenghaoByTongjiByDay, getNenghaoByChartDataByDay } from '@/api/nenghao'

export default {
  components: {
    NenghaoPie,
    NenghaoReport,
    NenghaoBytime,
    NenghaoCompare,
    FloorDevTree,
    NenghaoPickDate
  },
  data(){
    return {
      visible: false,
      callSource: 'nenghao-area-tree',
      chartOption: {
        chart_index: 4,
        chart_type: 'power'
      },
      chartOption2: {
        chart_index: 5,
        chart_type: 'water'
      },
      chartOption3: {
        chart_index: 6,
        chart_type: 'gas'
      },
      treeData: [],
      treeType: 'floor',
      unitType1: 'kwh',
      unitType2: 'm³',
      floortype: '37140001010010',
      dataType: null,
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
  mounted(){
    let _this = this
    window.onresize = function(){
      echarts.getInstanceByDom($('#nenghao-chart-4')[0]).resize()
      echarts.getInstanceByDom($('#nenghao-chart-5')[0]).resize()
      echarts.getInstanceByDom($('#nenghao-chart-6')[0]).resize()
      echarts.getInstanceByDom($('#chart_pie_index1')[0]).resize()
      echarts.getInstanceByDom($('#chart_pie_index2')[0]).resize()
      echarts.getInstanceByDom($('#chart_pie_index3')[0]).resize()
    }
    this.init()
    this.initTongji()
    this.getFloorAndDeviceInfo()
    // 获取楼层id
    EventBus.$on('checkedFloorData', function(data) {
      _this.floortype = data
      _this.initTongji()
    })
  },
  methods: {
    /**
     * type 1  获取水电气当日能耗
     */
    init(){
      let date = this.getNowDate()
      this.getNenghaoByFloorByDatetype('1', date)
      this.getNenghaoByFloorByDatetype('2', date)
      this.getNenghaoByFloorByDatetype('3', date)
    },
    initTongji() {
      this.getNenghaoTongji('1')
      this.getNenghaoTongji('2')
      this.getNenghaoTongji('3')
    },
    getNenghaoByFloorByDatetype(type, date){
      API.nenghaoAreaByFloorByDatetype({
        energyType: type,
        date: date
      }).then((res) => {
        let data = res.data.data
        this.$refs['pie-chart-' + type].loadData({
          listData: data
        })
        
      })
    },
    getNenghaoTongji(type) {
      let _this = this 
      let date = this.getNowDate()
      let arr = ['Power', 'Water', 'Gas']
      getNenghaoByTongjiByDay({
        energyType: type,
        date: date,
        floorNo: _this.floortype
      }).then((res) => {
        let data = res.data.data

        _this['tongjiData' + arr[type - 1]].dayCurrent = data.day.current
        _this['tongjiData' + arr[type - 1]].monthCurrent = data.month.current
        _this['tongjiData' + arr[type - 1]].yearCurrent = data.year.current

        _this['tongjiData' + arr[type - 1]].dayLast = data.day.last
        _this['tongjiData' + arr[type - 1]].monthLast = data.month.last
        _this['tongjiData' + arr[type - 1]].yearLast = data.year.last

        _this['tongjiData' + arr[type - 1]].dayQoq = data.day.qoq
        _this['tongjiData' + arr[type - 1]].monthQoq = data.month.qoq
        _this['tongjiData' + arr[type - 1]].yearQoq = data.year.qoq

        _this['tongjiData' + arr[type - 1]].type = arr[type - 1]
        console.log(_this.tongjiDataPower)
			}).catch(() => {
				
			})
      getNenghaoByChartDataByDay({
        energyType: type,
        date: date,
        floorNo: _this.floortype
      }).then((res) => {
				
        let data = res.data.data
        _this.$refs['bar-chart-' + type].loadData({
          listData: data.Histogram
        })
			}).catch(() => {
				
			})
      
    },
    getFloorAndDeviceInfo(){
      API.floorAndDeviceInfo().then((res) => {
        this.treeData = res.data.data.children
        console.log(this.treeData)
      })
    },
    changeDate3(val) {
      this.getNenghaoByFloorByDatetype('3', val)
      
    },
    changeDate2(val) {
      this.getNenghaoByFloorByDatetype('2', val)
      
    },
    changeDate1(val) {
      this.getNenghaoByFloorByDatetype('1', val)
    },
    getNowDate(){
      let dateObj = getDateByType()
      return dateObj.year + '-' + dateObj.month + '-' + dateObj.date
    }
  }
}
</script>

<style lang="scss" scoped>
.title-common-box .text-common-1-level .text-liner-bg {
  background: linear-gradient(to right, #00ebff, #102a48 30%);
}
.area-col {
  height: 100%;
  background-image: linear-gradient(0deg, 
		#0a2949 0%, 
		#122a48 100%), 
	linear-gradient(
		#0d1033, 
		#0d1033);
  .pie-height {
    height: calc(100% - 36px);
  }
}
.height-col-67 {
  height: 67%;
  
  padding: 10px;
  padding-top: 0;
}
.col-row-bg {
  height: 100%;
}
.nenghao-area {
  height: 100%;
  .title-common-box {
    position: relative;
     border-bottom: none;
    border-top: none;
    background-image: linear-gradient(90deg, rgba(23, 72, 100, 0.64) 0%, #102a48 100%);
    .picker-b {
      right: 100px;
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
  }
  .height-col {
    height: 33%;
  }
}
.font-s {
  font-size: .2rem;
  margin-bottom: 5px;
  margin-top: 10px;
}
.floor-con {
  border: solid 1px #04add6;
  margin-right: 10px;
  height: 6.1rem;
}
</style>