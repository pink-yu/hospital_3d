<template>
    <div :id="'nenghao-chart-' + chartOption.chart_index" class="chart-height"></div>
</template>
<script>
import echarts from '@/components/chart/chart'
export default {
  props: {
    chartOption: {
      chart_index: {
        default: 1,
        type: Number
      },
      chart_type: {
        default: 'power',
        type: String
      },
      chartData: {
        default: [],
        type: Array
      }
    }
  },
  data() {
    return {
      textTitle: 'kwh',
      seriesTitleObj: {
        'power': '用电量',
        'water': '用水量',
        'gas': '用气量'
      },
      seriesTitle: '',
      myChart: null
    }
  },
  watch: {
    'chartOption.chart_type': {
      handler(newV, oldV) {
        if(newV == 'power') {
          this.textTitle = 'kwh'
          this.seriesTitle = '用电量'
        } else if(newV == 'water' || newV == 'gas') {
          this.textTitle = 'm³'
        }
        this.seriesTitle = this.seriesTitleObj[newV]
      },
      immediate: true  
    }
  },
  mounted(){
    let _this = this
    this.initChart({
      color: ['#00e9ff', '#394042'],
      element: 'nenghao-chart-' + this.chartOption.chart_index
    })
    this.myChart.showLoading({
      text: 'loading',
      color: '#c23531',
      textColor: '#000',
      maskColor: 'rgba(255, 255, 255, 0.2)',
      zlevel: 0,
    })
  },
  methods: {
    loadData(data) {
      const option = this.myChart.getOption()
      option.series[0].data = data.listData
      this.myChart.hideLoading()
      this.myChart.setOption(option)
    },
    initChart(option) {
      this.myChart = echarts.init(document.getElementById(option.element))
      this.myChart.setOption({
        title: {
          text: this.textTitle,
          textStyle: {
            fontSize: 12,
            align: 'center',
            color: '#fff'
          },
          top: 5
        },
        grid: {
          left: 30,
          top: 30,
          bottom: 20,
          right: 10
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        xAxis: {
          type: 'category',
          data: ['00', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24'],
          axisLabel: {
            show: true,
            color: '#999'
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#0ba2b6'
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
            name: this.seriesTitle,
            type: 'bar',
            barWidth: 8,
            // label: {
            //   show: true,
            //   position: 'top',
            //   color: '#00ecff'
            // },
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
            data: []
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-height {
  height: 2.5rem;
}
.col-row-bg {
  .chart-height {
    height: 2rem;
  }
}
.height-c {
  .chart-height {
    height: 100%;
  }
}
.nenghao-area{
  .chart-height {
    height: calc(100% - 0.45rem);
  }
}
@media screen and (min-height: 865px) and (max-height: 1080px){
  .chart-height {
    height: 3.5rem;
  }
  .col-row-bg {
    .chart-height {
      height: 3rem;
    }
  }
}

</style>