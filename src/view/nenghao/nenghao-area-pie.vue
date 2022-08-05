<template>
  <div class="pie-chart">
    <div :id="'chart_pie_index' + pieIndex" class="pei-chart-h"></div>
  </div>
</template>

<script>
import echarts from '@/components/chart/chart'
export default {
  props: {
    pieIndex: {
      default: 1,
      type: Number
    }
  },
  data() {
    return {
      myChart: null
    }
  },
  mounted(){
    let _this = this
    this.initChart({
      element: 'chart_pie_index' + this.pieIndex,
      color: ['#4992ff', '#ff6e76', '#fddd60', '#58d9f9'],
      data: []
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
      this.myChart.hideLoading();
      this.myChart.setOption(option)
    },
    initChart(option, element) {
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
            radius: ['50%', '70%'],
            center: ['50%', '50%'],
            left: -40,
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
              formatter: '{b} \n {d}%',
              rich: {

              }
            }
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.pei-chart-h {
  height: 100%;
}
</style>