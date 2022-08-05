<template>
  <div class="common-content left-c animate__animated animate__fadeInLeft">
    <div class="flex-1">
      <div class="title-common-box">
        <div class="text-common-1-level">
          <div class="text-left">楼宇信息</div>
          <div class="text-shu">|</div>
          <div class="text-liner-bg"></div>
        </div>
      </div>
      <div class="flex-height flex-bg">平原县第一人民医院</div>
      <div class="flex-height flex-b">
        <div>
          <h3>公共建筑</h3>
          <p>建筑功能</p>
        </div>
        <div>
          <h3>39850</h3>
          <p>建筑面积(㎡)</p>
        </div>
        <div>
          <h3>13</h3>
          <p>建筑层数</p>
        </div>
      </div>
    </div>
    <div class="flex-2">
      <div class="title-common-box">
        <div class="text-common-1-level">
          <div class="text-left">能耗信息</div>
          <div class="text-shu">|</div>
          <div class="text-liner-bg"></div>
        </div>
      </div>
      <div class="flex-2-50">
        <div class="height-50 flex-h">
          <div class="flex-c"><img src="../../../public/img/images/dwmjhd.png" alt=""></div>
          <div class="flex-c">
            <h3>39850</h3>
            <p>建筑能耗指标(kgce/m2.a)</p>
          </div>
        </div>
        <div class="height-50 flex-y">
          <div>
            <h3>958</h3>
            <p>日(kgce)</p>
          </div>
          <div>
            <h3>3558</h3>
            <p>月(kgce)</p>
          </div>
          <div>
            <h3>9568</h3>
            <p>年(kgce)</p>
          </div>
        </div>
      </div>
      <div class="flex-2-50">
        <div class="height-50 flex-h">
          <div class="flex-c"><img src="../../../public/img/images/dwmjhd.png" alt=""></div>
          <div class="flex-c">
            <h3>39850</h3>
            <p>建筑电耗指标(KW.h/m2.a)</p>
          </div>
        </div>
        <div class="height-50 flex-y">
          <div>
            <h3>958</h3>
            <p>日(KW.h)</p>
          </div>
          <div>
            <h3>3558</h3>
            <p>月(KW.h)</p>
          </div>
          <div>
            <h3>9568</h3>
            <p>年(KW.h)</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-3">
      <div class="title-common-box">
        <div class="text-common-1-level">
          <div class="text-left">当日分项能耗</div>
          <div class="text-shu">|</div>
          <div class="text-liner-bg"></div>
        </div>
      </div>
      <div class="flex-t">
        <div>
          <h3><span>58</span>kwh</h3>
          <p>照明</p>
        </div>
        <div>
          <h3><span>38</span>kwh</h3>
          <p>空调</p>
        </div>
        <div>
          <h3><span>68</span>kwh</h3>
          <p>动力</p>
        </div>
        <div>
          <h3><span>588</span>kwh</h3>
          <p>特殊</p>
        </div>
      </div>
    </div>
    <div class="flex-4">
      <div class="title-common-box">
        <div class="text-common-1-level">
          <div class="text-left">当日区域能耗</div>
          <div class="text-shu">|</div>
          <div class="text-liner-bg"></div>
        </div>
      </div>
      <div id="shouye-chart-1"></div>
    </div>
  </div>
</template>

<script>
import echarts from '@/components/chart/chart'
window.onresize = function(){
  setTimeout(() => {
    echarts.getInstanceByDom($('#shouye-chart-1')[0]).resize()
  },800)
}
export default {
  mounted(){
    this.initChart({
      color: ['#00e9ff', '#394042'],
      element: 'shouye-chart-1',
      data: [{ value: 145 }, { value: 75 }]
    })
    
  },
  methods: {
    initChart(option) {
      this.myChart = echarts.init(document.getElementById(option.element))
      this.myChart.setOption({
        title: {
          text: 'kwh',
          textStyle: {
            fontSize: 12,
            align: 'center',
            color: '#fff'
          },
          top: 5
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          left: 30,
          top: 30,
          bottom: 20,
          right: 10
        },
        xAxis: {
          type: 'category',
          data: ['1F', '2F', '3F', '3.5F', '4F', '5F', '6F', '7F', '8F', '9F', '10F', '11F','12F'],
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
            name: '用电量',
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
                value: 10
              },
              {
                value: 6.8
              },
              {
                value: 15.8
              },
              {
                value: 12.5
              },
              {
                value: 25
              },
              {
                value: 14
              },
              {
                value: 19
              },
              {
                value: 30
              },
              {
                value: 26.4
              },
              {
                value: 51
              },
              {
                value: 40
              },
              {
                value: 37
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
.left-c {
  display: flex;
  flex-direction:column;
  border-radius: 0rem .25rem 0rem 0rem;
	border: solid .0125rem rgba(0, 204, 255, 0.47);
  background-color: rgba(24, 49, 80, 0.6);
  .flex-1 {
    flex: 2;
    .flex-height {
      height: calc((100% - .45rem) / 2);
      padding: 0 .125rem;
    }
    .flex-b{
      display: flex;
      justify-content: space-around;
      div{
        background-color: #084374;
        height: 100%;
        text-align: center;
        box-shadow:  0 0 5px 3px #2B9BCF inset;
        padding: .25rem 0;
        h3 {
          color: #00ecff;
          margin-bottom: .1rem;
          font-size: .225rem;
        }
      }
      div:nth-child(1){
        width: 2.5rem;
      }
      div:nth-child(2){
        width: 1.425rem;
      }
      div:nth-child(3){
        width: 1.125rem;
      }
    }
    .flex-bg {
      background: url('../../../public/img/images/tyybg.png') 50%/100% no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 .125rem;
      font-size: .3rem;
    }
  }
  .flex-2 {
    flex: 3;
    .flex-2-50 {
      height: calc((100% - .45rem) / 2);
      padding: .125rem;
      border-top: 1px solid;
      -o-border-image: url('../../../public/img/images/line01.png') 10 0 stretch;
      border-image: url('../../../public/img/images/line01.png') 10 0 stretch;
      .flex-h{
        border: solid 1px #02aed7;
      }
      .flex-c{
        display: inline-block;
        height: 100%;
        vertical-align: middle;
        position: relative;
        img {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
        }
        &:first-child{
          width: 15%;
          background-color: #084374;
        }
        &:last-child{
          width: 85%;
          text-align: center;
          border-left: 1px solid #02aed7;
          padding: 10px 0;
          h3 {
            font-size: .225rem;
            color: #00ecff;
          }
        }
      }
      .flex-y {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 15px 0;
        h3 {
          color:#00ecff;
          text-decoration: underline;
          margin-bottom: 5px;
        }
      }
    }
  }
  .flex-3 {
    flex: 1;
    .flex-t {
      height: calc(100% - .45rem);
      display: flex;
      justify-content: space-around;
      align-items: center;
      span {
        color: #00ecff;
        margin-right: 5px;
      }
      h3 {
        margin-bottom: 5px;
      }
    }
  }
  .flex-4 {
    flex: 2;
    #shouye-chart-1 {
      height: calc(100% - .45rem);
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