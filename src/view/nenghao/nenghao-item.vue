<template>
  <div class="pre-item height-100">
    <div class="container-bg height-top">
      <div class="height-100">
        <el-row class="pre-row-1  height-100" :gutter="10">
          <el-col :span="12" class="col-bg">
            <div class="title-common-box title-box-top ">
              <div class="text-common-1-level">
                <div class="text-left">分项能耗占比</div>
                <div class="text-shu">|</div>
                <div class="text-liner-bg"></div>
              </div>
              <!-- <el-date-picker
                class="date-select date-select-1"
                v-model="value1"
                type="daterange"
                range-separator="至"
                value-format="yyyy-MM-dd"
                @change="change1"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker> -->
            </div>
            <div class="item-9">
              <div class="item-9-left">
                <div class="chart-item height-100">
                  <div id="chart-item-1"></div>
                </div>
              </div>
              <div class="item-9-right">
                
                <div class="item-h" v-for="(item, index) in data" :key="index">
                  <div :class="'item-h-' + (index+1)">{{item.name}}用电</div>
                  <div>{{item.value}} kwh</div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="12" class="col-bg">
            <div class="title-common-box title-box-top ">
              <div class="text-common-1-level">
                <div class="text-left">分项能耗环比</div>
                <div class="text-shu">|</div>
                <div class="text-liner-bg"></div>
              </div>
            </div>
            <div class="item-y-block">
              <div class="item-y">
                <div>照明用电</div>
                <div>空调用电</div>
                <div>动力用电</div>
                <div>特殊用电</div>
              </div>
              <div class="item-x">
                <div>日环比<span>{{dataQoqZhaoming.dayQoq}} %</span></div>
                <div>日环比<span>{{dataQoqKongtiao.dayQoq}} %</span></div>
                <div>日环比<span>{{dataQoqDongli.dayQoq}} %</span></div>
                <div>日环比<span>{{dataQoqQita.dayQoq}} %</span></div>
              </div>
              <div class="item-x">
                <div>月环比<span>{{dataQoqZhaoming.monthQoq}} %</span></div>
                <div>月环比<span>{{dataQoqZhaoming.monthQoq}} %</span></div>
                <div>月环比<span>{{dataQoqZhaoming.monthQoq}} %</span></div>
                <div>月环比<span>{{dataQoqZhaoming.monthQoq}} %</span></div>
              </div>
              <div class="item-x">
                <div>年环比<span>{{dataQoqZhaoming.yearQoq}} %</span></div>
                <div>年环比<span>{{dataQoqZhaoming.yearQoq}} %</span></div>
                <div>年环比<span>{{dataQoqZhaoming.yearQoq}} %</span></div>
                <div>年环比<span>{{dataQoqZhaoming.yearQoq}} %</span></div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-row class="height-bottom" :gutter="5">
      <el-col :span="24">
        <div class="item-title-b">
          <div class="title-common-box title-box-top ">
            <div class="text-common-1-level">
              <div class="text-left">分项能耗环比</div>
              <div class="text-shu">|</div>
              <div class="text-liner-bg"></div>
            </div>
          </div>
          <div class="item-tab">
            <div :class="{ active: itemTabIndex == 1 }">照明用电</div>
            <div :class="{ active: itemTabIndex == 2 }">空调用电</div>
            <div :class="{ active: itemTabIndex == 3 }">动力用电</div>
            <div :class="{ active: itemTabIndex == 4 }">特殊用电</div>
          </div>
        </div>
      </el-col>
      <el-col :span="12" class="col-height-left">
        <div class="item-col-2-bg">
          <div class="item-9">
            <div class="item-9-left">
              <div id="chart-item-2"></div>
            </div>
            <div class="item-9-right">
              <!-- <el-date-picker
                class="date-select"
                v-model="value2"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker> -->
              <div class="item-h">
                <div class="item-h-1">照明和插座用电</div>
                <div>3950 kwh</div>
              </div>
              <div class="item-h">
                <div class="item-h-2">室外景观照明用电</div>
                <div>3950 kwh</div>
              </div>
              <div class="item-h">
                <div class="item-h-3">走廊和应急照明用电</div>
                <div>3950 kwh</div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12" class="col-height-left">
        <div class="item-col-2-bg">
          <div class="item-2-list">
            <div class="item-2-it">
              <p>今日能耗(kwh)</p>
              <h3>39540</h3>
            </div>
            <div class="item-2-it">
              <p>昨日能耗(kwh)</p>
              <h3>39540</h3>
            </div>
            <div class="item-2-it">
              <p>日环比</p>
              <h3>9%</h3>
            </div>
          </div>
          <div class="item-2-list">
            <div class="item-2-it">
              <p>本月能耗(kwh)</p>
              <h3>39540</h3>
            </div>
            <div class="item-2-it">
              <p>上月能耗(kwh)</p>
              <h3>39540</h3>
            </div>
            <div class="item-2-it">
              <p>日环比</p>
              <h3>9%</h3>
            </div>
          </div>
          <div class="item-2-list">
            <div class="item-2-it">
              <p>本年能耗(kwh)</p>
              <h3>39540</h3>
            </div>
            <div class="item-2-it">
              <p>上年能耗(kwh)</p>
              <h3>39540</h3>
            </div>
            <div class="item-2-it">
              <p>年环比</p>
              <h3>9%</h3>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from '@/components/chart/chart'
import API from '@/api/api'
import { getDateByType } from '../../util/util'
import { ws_socket } from '@/util/ws.js'
import store from '@/store'
export default {
  data() {
    return {
      itemTabIndex: 1,
      value1: '',
      value2: '',
      myChart: null,
      myChart1: null,
      data: [],
      dataQoqZhaoming: {},
      dataQoqKongtiao: {},
      dataQoqQita: {},
      dataQoqDongli: {}
    }
  },
  mounted() {
      this.initChart({
        element: 'chart-item-1',
        color: ['#4992ff', '#ff6e76', '#fddd60', '#58d9f9'],
        data: []
      })
      // this.initChart({
      //   element: 'chart-item-2',
      //   color: ['#4992ff', '#ff6e76', '#fddd60', '#58d9f9'],
      //   data: [
      //     { value: 1048, name: '照明和插座用电' },
      //     { value: 735, name: '室外景观照明用电' },
      //     { value: 448, name: '走廊和应急照明用电' }
      //   ]
      // })
      this.myChart.showLoading({
        text: 'loading',
        color: '#c23531',
        textColor: '#000',
        maskColor: 'rgba(255, 255, 255, 0.2)',
        zlevel: 0,
      })
    window.onresize = function(){
      echarts.getInstanceByDom($('#chart-item-1')[0]).resize()
      echarts.getInstanceByDom($('#chart-item-2')[0]).resize()
      
    }
    this.getNenghaoByItemByTimeTongji()
    this.createWebsocketConnect()
  },
  methods: {
    initChart(option) {
      this.myChart = echarts.init(document.getElementById(option.element))
      this.myChart.setOption({
        tooltip: {
          trigger: 'item',
          formatter:'{b}  {c}%'
        },
        color: option.color,
        series: [
          {
            type: 'pie',
            radius: [0, '50%'],
            center: ['50%', '50%'],
            left: -20,
            hoverAnimation: false,
            labelLine: {
              show: true,
              length2: 10
            },
            data: option.data,
            label: {
              show: true,
              position: 'outside',
              color: '#fff',
              padding: [2, -20],
              formatter: '{b} \n {d}%'
            }
          }
        ]
      })
    },
    getNenghaoByItemByTimeTongji(time){
      let params
      if(time) {
        params = {
          starttime: time[0],
          endtime: time[1],
          energytype: '1'
        }
      } else {
        let dateObj = getDateByType()
        let date = dateObj.year + '-' + dateObj.month + '-' + dateObj.date
        params = {
          energyType: '1',
          startTime: date,
          endTime: date,
        }
      }
      API.nenghaoByItemByTimeTongji(params).then((res) => {
        this.data = res.data.data
        this.loadData(res.data.data)
      })
    },
    change1(val){
      this.getNenghaoByItemByTimeTongji(val)
    },
    loadData(data) {
      const option = this.myChart.getOption()
      option.series[0].data = data
      this.myChart.hideLoading()
      this.myChart.setOption(option)
    },
    createWebsocketConnect() {
     
      let _this = this
      let token = store.getters.access_token
      let headers = {
        'Authorization': 'Bearer ' + token
      }
      
      let wsTopic = "/user/topic/statEnergyAmountByModelTypeQoqWebsocket"
      let stompClient = ws_socket.connection()

      stompClient.connect(
        headers, 
        (frame) => {
          console.log('websocket连接成功:' + frame)
          stompClient.subscribe(wsTopic, (response) => {
            console.log(JSON.parse(response.body))
            let data = JSON.parse(response.body)
            if(data.length != 0) {
              _this.dataQoqZhaoming = JSON.parse(response.body)[0]
              _this.dataQoqKongtiao = JSON.parse(response.body)[1]
              _this.dataQoqDongli = JSON.parse(response.body)[2]
              _this.dataQoqQita = JSON.parse(response.body)[3]
            }
            
          })
        },
        (error) => {
          console.log(error)
        }
      )
    }
  },
  destroyed() {

  }
}
</script>

<style lang="scss" scoped>

.title-common-box {
  position: relative;
  ::v-deep .date-select-1 {
    position: absolute;
    top: 3px;
    right: 10px;
  }
  .el-range-editor.el-input__inner {
    width: 220px;
    height: 30px;
    line-height: 30px;
  }
  ::v-deep .el-date-editor .el-range__icon {
    line-height: 20px;
  }
  ::v-deep .el-date-editor .el-range-separator{
    line-height: 20px;
  }
}
.title-common-box .text-common-1-level .text-liner-bg {
  background: linear-gradient(to right, #00ebff, #102a48 30%);
}

.pre-item {
  padding-left: 10px;
  padding-right: 10px;
  .height-top {
    height: 34%;
  }
  .height-bottom {
    height: 66%;
  }
  .col-bg {
    height: 100%;
  }

  .item-9 {
    height: calc(100% - .45rem);
    display: flex;
    justify-content: space-between;
    background-image: linear-gradient(0deg,
        #0a2949 0%,
        #122a48 100%),
      linear-gradient(#0d1033,
        #0d1033);

    .item-9-left {
      flex: 1;
    }

    .item-9-right {
      padding-top: 15px;
      flex: 1;

      .item-h {
        margin-top: 10px;

        div:last-child {
          margin-left: 10px;
          padding-left: 10px;
          width: 2.3rem;
          font-size: .225rem;
          color: #00ecff;
          background-image: linear-gradient(#084374,
              #084374),
            linear-gradient(#58d9f9,
              #58d9f9);
        }

        display: flex;
        height: .375rem;
        line-height: .375rem;

        div:first-child {
          position: relative;
          padding-left: 20px;

          &:before {
            content: '';
            position: absolute;
            width: .1875rem;
            height: .1875rem;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
          }
        }

        .item-h-1::before {
          background: #4992ff;
        }

        .item-h-2::before {
          background: #ff6e76;
        }

        .item-h-3::before {
          background: #fddd60;
        }

        .item-h-4::before {
          background: #58d9f9;
        }
      }
    }
  }

  .item-y-block {
    height: calc(100% - 28px);
    background-image: linear-gradient(0deg,
        #0a2949 0%,
        #122a48 100%),
      linear-gradient(#0d1033,
        #0d1033);
    padding-top: 10px;

    .item-y,
    .item-x {
      display: flex;
      justify-content: space-around;
      text-align: center;
    }

    .item-y {
      margin-bottom: 10px;
    }

    .item-x {
      margin-bottom: 18px;

      div {
        width: 1.65rem;
        height: .45rem;
        line-height: .45rem;
        ;
        text-align: left;
        padding-left: 10px;
        background-color: #084374;
        position: relative;

        span {
          position: absolute;
          right: 5px;
          color: #f43f3f;
          font-size: .225rem;
          font-weight: 700;
        }
      }
    }
  }

  .col-height-left {
    height: calc(100% - 0.725rem - 10px);
  }
  .item-title-b {
    margin-top: 10px;
    height: .725rem;
    background-image: linear-gradient(0deg, #0a2949 0%, #122a48 100%), linear-gradient(#0d1033, #0d1033);
    box-shadow: 0px 0px 0px 0px#ffffff;
    line-height: 0.725rem;
    position: relative;

    .title-common-box {
      padding: 0 6px;
    }

    .text-shu {
      height: inherit !important;
    }

    .item-tab {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);

      div {
        display: inline-block;
        width: 2.05rem;
        height: .4375rem;
        background-image: linear-gradient(90deg, #174864 0%, #11314b 100%);
        text-align: center;
        line-height: .4375rem;
        cursor: pointer;
      }
      div:hover {
        background-image: linear-gradient(#0d5d88,
            #0d5d88),
          linear-gradient(#ffffff,
            #ffffff);
      }

      div.active {
        background-image: linear-gradient(#0d5d88,
            #0d5d88),
          linear-gradient(#ffffff,
            #ffffff);
      }
    }
  }

  .item-col-2-bg {
    height: 100%;
    background-image: linear-gradient(0deg,
        #0a2949 0%,
        #122a48 100%),
      linear-gradient(#0d1033,
        #0d1033);
    .item-h {
      margin-top: 10px;
      height: .6rem!important;
      line-height: .6rem!important;
      div:first-child{
        flex: 1;
      }
      div:last-child {
        text-align: center;
        margin-right: 70px;
        padding-left: 10px;
        width: 2.3rem;
        font-size: .225rem;
        height: .6rem;
        line-height: .6rem;
        color: #00ecff;
        background-image: linear-gradient(#084374,
            #084374),
          linear-gradient(#58d9f9,
            #58d9f9);
      }

    }
    .item-2-list {
      display: flex;
      justify-content: space-around;
      margin-bottom: 10px;
      
      .item-2-it {
        width: 3.4625rem;
        height: 1.5rem;
        border: solid 1px #084374;
        line-height: .5rem;
        text-align: center;
        p {
          margin-top: 20px
        }
        h3 {
          font-size: .225rem;
          color: #00ebff;
        }
      }
    }
  }
  .item-col-2-bg:first-child {
    margin-right: 2px;
  }
  .item-col-2-bg:last-child {
    margin-left: 2px;
  }
}



#chart-item-1 {
  height: 100%;
  width: 100%;
}

#chart-item-2 {
  height: 100%;
  width: 100%;
}

.title-common-box {
  background-image: linear-gradient(0deg,
      #0a2949 0%,
      #122a48 100%),
    linear-gradient(#0d1033,
      #0d1033);
  border-bottom: none;
  border-top: none;
}

::v-deep.date-select  {
  margin-bottom: 20px;
  background-color: #232d39;
  border: solid 1px rgba(8, 67, 116, 0.85);
  .el-range-input {
    background-color: #232d39;
    color: #fff;
  }
  .el-range-separator {
    color:#fff;
  }
}
</style>