<template>
  <div class="pre-item height-100">
    <div class="height-top">
      <div class="height-100">
        <el-row class="height-100" :gutter="10">
          <el-col :span="12" class="col-bg">
            <div class="title-common-box title-box-top ">
              <div class="text-common-1-level">
                <div class="text-left">月设备维保统计</div>
                <div class="text-shu">|</div>
                <div class="text-liner-bg"></div>
              </div>
            </div>
            <div class="item-y-block">
              <div class="item-9-left">
                <div class="box">
                  <p>月报修总量</p>
                  <h3>196</h3>
                </div>
              </div>
              <div class="item-9-middle">
                <div id="weibao-chart-1"></div>
              </div>
              <div class="item-9-right">
                <div class="item-h" v-for="(item, index) in data1" :key="index">
                  <div :class="'item-h-' + (index+1)">{{item.name}}</div>
                  <div>{{item.value}} </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="12" class="col-bg">
            <div class="title-common-box title-box-top ">
              <div class="text-common-1-level">
                <div class="text-left">年设备维保统计</div>
                <div class="text-shu">|</div>
                <div class="text-liner-bg"></div>
              </div>
            </div>
            <div class="item-y-block">
              <div class="item-9-left">
                <div class="box">
                  <p>年报修总量</p>
                  <h3>562</h3>
                </div>
              </div>
              <div class="item-9-middle">
                <div id="weibao-chart-2"></div>
              </div>
              <div class="item-9-right">
                <div class="item-h" v-for="(item, index) in data2" :key="index">
                  <div :class="'item-h-' + (index+1)">{{item.name}}</div>
                  <div>{{item.value}} </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-row class="height-bottom" >
      <el-col :span="24">
        <div class="item-title-b">
          <div class="title-common-box title-box-top ">
            <div class="text-common-1-level">
              <div class="text-left">设备维保列表</div>
              <div class="text-shu">|</div>
              <div class="text-liner-bg"></div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="24" class="col-height-left">
        <div class="item-col-2-bg">
            <el-table
            :data="tableData1"
            :fit="true"
            height="470"
            stripe
            style="width: 100%">
            <el-table-column
              prop="date"
              label="序号"
              type="index"
              width="90">
            </el-table-column>
            <el-table-column
              prop="source"
              label="维保来源"
              width="180">
            </el-table-column>
            <el-table-column
              prop="person"
              label="维保人">
            </el-table-column>
            <el-table-column
              prop="devtype"
              label="设备类型">
            </el-table-column>
            <el-table-column
              prop="remark"
              label="位置描述">
            </el-table-column>
            <el-table-column
              prop="memo"
              label="维保内容">
            </el-table-column>
            <el-table-column
              prop="status"
              label="维保状态">
              <template slot-scope="scope">
                <div v-if="scope.row.status == 0" class="text-green">已完成</div>
                <div v-if="scope.row.status == 1" class="text-yellow">未完成</div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from '@/components/chart/chart'
export default {
  components: {
  },
  data() {
    return {
      itemTabIndex: 1,
      myChart1: null,
      myChart2: null,
      data1: [
        {
          name: '已处理',
          value: 156
        },
        {
          name: '未处理',
          value: 15
        },
        {
          name: '处理中',
          value: 25
        }
      ],
      data2: [
        {
          name: '已处理',
          value: 536
        },
        {
          name: '未处理',
          value: 12
        },
        {
          name: '处理中',
          value: 14
        }
      ],
      tableData1: [
        {
          source: '巡检',
          person: '李主任',
          devtype: '监控',
          remark: '急救中心大厅',
          memo: '摄像头红外闪烁，没有录像内容',
          status: 0
        },
        {
          source: '电话登记',
          person: '李主任',
          devtype: '照明',
          remark: '护士站',
          memo: '灯泡不亮',
          status: 1
        }
      ]
    }
  },
  mounted() {
      this.initChart({
        element: 'weibao-chart-1',
        data: this.data1,
        index: 1
      })
      this.initChart({
        element: 'weibao-chart-2',
        data: this.data2,
        index: 2
      })
      // this.initChart({
      //   element: 'xungeng-chart-2',
      //   data: [],
      //   index: 2
      // })
      // this.myChart1.showLoading({
      //   text: 'loading',
      //   color: '#c23531',
      //   textColor: '#000',
      //   maskColor: 'rgba(255, 255, 255, 0.2)',
      //   zlevel: 0,
      // })
  },
  methods: {
    initChart(option) {
      this['myChart' + option.index] = echarts.init(document.getElementById(option.element))
      this['myChart' + option.index].setOption({
        tooltip: {
          trigger: 'item',
          formatter:'{b}  {d}%'
        },
        series: [
          {
            type: 'pie',
            radius: ['20%', '90%'],
            center: ['50%', '50%'],
            roseType: 'area',
            hoverAnimation: false,
            data: option.data,
            label: {
              show: true,
              position: 'outside',
              color: '#fff',
              padding: [2, -20],
              formatter: '{b} \n {d}%',
              rich: {

              }
            }
          }
        ]
      })
    }
  },
  destroyed() {

  }
}
</script>

<style lang="scss" scoped>
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
 .item-y-block {
    height: calc(100% - .45rem);
    background-image: linear-gradient(0deg,
        #0a2949 0%,
        #122a48 100%),
      linear-gradient(#0d1033,
        #0d1033);
    display: flex;
    justify-content: center;
    align-items: center;
    .item-9-right {
      .item-h {
        margin-top: 10px;

        div:last-child {
          margin-left: 10px;
          padding-left: 10px;
          width: 1.75rem;
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
      }
    }
    .item-9-middle {
      height: 100%;
    }
    .item-9-left {
      width: 2.25rem;
      height: 1.7rem;
      border: solid 1px #084374;
      display: flex;
      justify-content: center;
      align-items: center;
      .box {
        text-align: center;
        p {
          margin: 10px 0;
        }
        h3 {
          font-size: .3rem;
          color: #00eeff;
        }
      }
    }
  }
  .col-height-left {
    height: calc(100% - 0.725rem - 12px);
    margin-top: 2px;
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
  }

  .item-col-2-bg {
    height: 100%;
    background-image: linear-gradient(0deg,
        #0a2949 0%,
        #122a48 100%),
      linear-gradient(#0d1033,
        #0d1033);
  }
}
#weibao-chart-1,#weibao-chart-2 {
  height: 100%;
  width: 5.625rem;
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
::v-deep.el-table {
  background-color: transparent;
  height: 100%!important;
  .el-table__header-wrapper {
    .el-table__header {
      color: #1111;
      thead {
        tr {
          th {
            background-color: #0B1E33;
            color: #00eeff;
          }
          th.is-leaf{
            border-bottom: none;
          }
        }
      }
    }
  }
  .el-table__body-wrapper {
    .el-table__body {
        tr {
          background-color: #112a48;
          color: #00eeff;
          td {
            border-bottom: none;
          }
        }
        tr:hover>td {
          background-color: transparent;
        }
        .el-table__row--striped {
          td {
            background-color: #0a1d32;
          }
        }
        .el-table__row--striped:hover {
          td {
            background-color: #0a1d32;
          }
        }
      }
  }
  &:before {
    height: 0;
  }
}
</style>
