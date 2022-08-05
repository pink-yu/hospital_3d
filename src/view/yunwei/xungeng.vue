<template>
  <div class="xungeng pre-item">
    <div class="xungeng-content animate__animated animate__fadeInDown">
      <div class="height-100 ">
        <el-row class="height-100" :gutter="10">
          <el-col :span="6" class="col-bg">
            <div class="title-common-box title-box-top ">
              <div class="text-common-1-level">
                <div class="text-left">巡检统计</div>
                <div class="text-shu">|</div>
                <div class="text-liner-bg"></div>
              </div>
            </div>
            <div class="preview-b">
              <div class="preview-b-list clearfix">
                <div class="preview-b-list-l fl">
                  <img src="../../../public/img/images/xjdsl.png" alt="">
                </div>
                <div class="preview-b-list-r">
                  <div class="box">
                    <p>巡检点数量</p>
                    <h3>40</h3>
                  </div>
                </div>
              </div>
              <div class="preview-b-list clearfix">
                <div class="preview-b-list-l fl">
                  <img src="../../../public/img/images/xjlxsl.png" alt="">
                </div>
                <div class="preview-b-list-r">
                  <div class="box">
                    <p>巡检路线数量</p>
                    <h3>15</h3>
                  </div>
                </div>
              </div>
              <div class="preview-b-list clearfix">
                <div class="preview-b-list-l fl">
                  <img src="../../../public/img/images/nxjjhsl.png" alt="">
                </div>
                <div class="preview-b-list-r">
                  <div class="box">
                    <p>年巡检计划数量</p>
                      <h3>248</h3>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="9" class="col-bg">
            <div class="title-common-box title-box-top ">
              <div class="text-common-1-level">
                <div class="text-left">今日巡检完成情况</div>
                <div class="text-shu">|</div>
                <div class="text-liner-bg"></div>
              </div>
            </div>
            <div class="item-y-block">
              <div class="preview-b">
                <div class="preview-b-list clearfix">
                  <div class="preview-b-list-l fl">
                    <img src="../../../public/img/images/xjdsl.png" alt="">
                  </div>
                  <div class="preview-b-list-r">
                    <div class="box">
                      <p>今日巡检总数</p>
                        <h3>23</h3>
                    </div>
                  </div>
                </div>
                <div class="preview-b-list clearfix">
                  <div class="preview-b-list-l fl">
                    <img src="../../../public/img/images/xjlxsl.png" alt="">
                  </div>
                  <div class="preview-b-list-r">
                    <div class="box">
                      <p>已完成</p>
                        <h3>15</h3>
                    </div>
                  </div>
                </div>
                <div class="preview-b-list clearfix">
                  <div class="preview-b-list-l fl">
                    <img src="../../../public/img/images/nxjjhsl.png" alt="">
                  </div>
                  <div class="preview-b-list-r">
                    <div class="box">
                        <p>未完成</p>
                        <h3>8</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xungeng-chart">
                <div id="xungeng-chart-1"></div>
                <p>完成率</p>
              </div>
            </div>
          </el-col>
          <el-col :span="9" class="col-bg">
            <div class="title-common-box title-box-top ">
              <div class="text-common-1-level">
                <div class="text-left">当月巡检完成情况</div>
                <div class="text-shu">|</div>
                <div class="text-liner-bg"></div>
              </div>
            </div>
            <div class="item-y-block">
              <div class="preview-b">
                <div class="preview-b-list clearfix">
                  <div class="preview-b-list-l fl">
                    <img src="../../../public/img/images/xjdsl.png" alt="">
                  </div>
                  <div class="preview-b-list-r">
                    <div class="box">
                      <p>当月巡检总数</p>
                        <h3>80</h3>
                    </div>
                  </div>
                </div>
                <div class="preview-b-list clearfix">
                  <div class="preview-b-list-l fl">
                    <img src="../../../public/img/images/xjlxsl.png" alt="">
                  </div>
                  <div class="preview-b-list-r">
                    <div class="box">
                      <p>已完成</p>
                        <h3>65</h3>
                    </div>
                  </div>
                </div>
                <div class="preview-b-list clearfix">
                  <div class="preview-b-list-l fl">
                    <img src="../../../public/img/images/nxjjhsl.png" alt="">
                  </div>
                  <div class="preview-b-list-r">
                    <div class="box">
                      <p>未完成</p>
                        <h3>15</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xungeng-chart">
                <div id="xungeng-chart-2"></div>
                <p>完成率</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="item-title-b">
        <div class="item-tab">
          <div class="hvr-wobble-horizontal" @click="itemTabIndex = 1" :class="{ active: itemTabIndex == 1 }">实时巡检</div>
          <div class="hvr-wobble-horizontal" @click="itemTabIndex = 2" :class="{ active: itemTabIndex == 2 }">巡检路线</div>
          <div class="hvr-wobble-horizontal" @click="itemTabIndex = 3" :class="{ active: itemTabIndex == 3 }">巡检计划</div>
        </div>
      </div>
    </div>
    <div class="xunjian-data animate__animated animate__fadeInLeft">
      <xunjian-tree  />
    </div>
    <div class="xunjian-main animate__animated animate__fadeInRight">
      <xunjian-detail/>
    </div>
    <div class="xunjian-plan animate__animated animate__fadeInLeft" v-if="itemTabIndex == 3">
      <xunjian-plan/>
    </div>
  </div>
</template>

<script>
import echarts from '@/components/chart/chart'
import XunjianTree from './xunjian-tree.vue'
import XunjianDetail from './xunjian-detail.vue'
import XunjianPlan from './xunjian-plan.vue'

export default {
  components: {
    XunjianTree,
    XunjianDetail,
    XunjianPlan
  },
  data() {
    return {
      itemTabIndex: 1,
      myChart1: null,
      myChart2: null
    }
  },
  mounted() {
    this.percent1 = '65%'
    this.initChart({
      element: 'xungeng-chart-1',
      data: [
        {
          name: '已完成',
          value: 15
        },
        {
          name: '未完成',
          value: 8
        }
      ],
      index: 1
    })
    this.percent2 = '81%'
    this.initChart({
      element: 'xungeng-chart-2',
      data: [
        {
          name: '已完成',
          value: 65
        },
        {
          name: '未完成',
          value: 15
        }
      ],
      index: 2
    })
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
      let _this = this
      this['myChart' + option.index] = echarts.init(document.getElementById(option.element))
      this['myChart' + option.index].setOption({
        tooltip: {
          trigger: 'item',
          formatter:'{b}  {d}%'
        },
        graphic: [
          {
            type:'text',
            left:'center',
            top:'center',
            style:{
              text: _this['percent' + option.index],
              textAlign: 'center',
              textVerticalAlign : 'bottom',//垂直居中
              fill: '#4992FF',
              width: 100,
              height: 100,
              font: '20px "STHeiti"'
            }
          }
        ],
        color: ['#4992FF','#58D9F9'],
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '40%'],
            label: {
              show: false
            },
            hoverAnimation: false,
            data: option.data
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
.xungeng {
  .xungeng-content {
    width: calc(100% - .875rem);
    margin-left: .875rem;
    position: absolute;
    z-index: 10;
    top: 70px;
    padding: 0 10px;
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
      .preview-b {
        flex: 1;
      }
      .xungeng-chart {
        flex: 1;
        position: relative;
        p {
          position: absolute;
          width: 100%;
          text-align: center;
          bottom: 5px;
          font-size: .175rem;
        }
      }
    }
    .col-height-left {
      height: calc(100% - 0.725rem - 12px);
      margin-top: 2px;
    }
    .item-col-2-bg {
      height: 100%;
      background-image: linear-gradient(0deg,
          #0a2949 0%,
          #122a48 100%),
        linear-gradient(#0d1033,
          #0d1033);
    }
    .item-title-b {
      margin-top: 5px;
      .item-tab {
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
  }
  .xunjian-data {
    width: 3.125rem;
    height: calc(100% - 2.625rem - 0.4375rem - 70px);
    border: solid 1px #04add6;
    position: absolute;
    top: calc(2.625rem + 0.4375rem + 70px);
    left: calc(0.875rem + 10px);
    z-index: 11;
    background: rgba(15,37,64,.7);
  }
  .xunjian-main {
    width: 7rem;
    height: calc(100% - 2.625rem - 0.4375rem - 70px);
    border: solid 1px #04add6;
    position: absolute;
    top: calc(2.625rem + 0.4375rem + 70px);
    right: 10px;
    z-index: 11;
    background: rgba(15,37,64,.7);
  }
  .xunjian-plan{
    height: calc(100% - 2.625rem - 0.4375rem - 70px);
    position: absolute;
    top: calc(2.625rem + 0.4375rem + 70px);
    z-index: 11;
    width: calc(100% - 0.875rem);
    margin-left: 0.875rem;
    padding: 0 10px;
  }
}
.preview-b {
  padding: 0 10px 10px 10px;
  background: #0a2949;
  height: calc(100% - .45rem);
  .preview-b-list {
    border: 1px solid #084374;
    .preview-b-list-l {
      background-color: #084374;
      width: .5rem;
      height: .5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .preview-b-list-r {
      .box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: .5rem;
        padding: 0 10px;
      }
      h3 {
        text-align: center;
        color: #00ecff;
        font-size: .225rem;
      }
    }
    &:not(:last-child) {
      margin-bottom: 9px;
    }
  }
}
.title-common-box .text-common-1-level .text-liner-bg {
  background: linear-gradient(to right, #00ebff, #102a48 30%);
}
#xungeng-chart-1 {
  height: 100%;
  width: 100%;
}

#xungeng-chart-2 {
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
