<template>
  <div class="com-b">
    <div class="com-b-item">
      <div class="com-b-list">
        <p>今日能耗({{unitType}})</p>
        <div>{{dayCurrent}}</div>
      </div>
      <div class="com-b-list">
        <p>昨日能耗({{unitType}})</p>
        <div>{{dayLast}}</div>
      </div>
      <div class="com-b-list">
        <p>日环比</p>
        <div class="red">{{dayQoq}}</div>
      </div>
    </div>
    <div class="com-b-item">
      <div class="com-b-list">
        <p>本月能耗({{unitType}})</p>
        <div>{{monthCurrent}}</div>
      </div>
      <div class="com-b-list">
        <p>上月能耗({{unitType}})</p>
        <div>{{monthLast}}</div>
      </div>
      <div class="com-b-list">
        <p>月环比</p>
        <div class="red">{{monthQoq}}</div>
      </div>
    </div>
    <div class="com-b-item">
      <div class="com-b-list">
        <p>本年度能耗({{unitType}})</p>
        <div>{{yearCurrent}}</div>
      </div>
      <div class="com-b-list">
        <p>上年度能耗({{unitType}})</p>
        <div>{{yearLast}}</div>
      </div>
      <div class="com-b-list">
        <p>年环比</p>
        <div class="red">{{yearQoq}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    unitType: {
      default: 'kwh',
      type: String
    },
    tongjiData: {}
  },
  data() {
    return {
      dayCurrent: '',
      dayLast: '',
      dayQoq: '',
      monthCurrent: '',
      monthLast: '',
      monthQoq: null,
      yearCurrent: '',
      yearLast: '',
      yearQoq: null,
    }
  },
  watch: {
    tongjiData: {
      handler(newV, oldV) {
        if(newV){
            this.dayCurrent = newV.dayCurrent
            this.dayLast = newV.dayLast
            this.dayQoq = isNaN(newV.dayQoq) ? 0 + '%' : parseFloat(newV.dayQoq) * 100 + '%'

            this.monthCurrent = newV.monthCurrent
            this.monthLast = newV.monthLast
            this.monthQoq = isNaN(newV.monthQoq) ? 0 + '%' : parseFloat(newV.monthQoq) * 100 + '%'
            
            this.yearCurrent = newV.yearCurrent
            this.yearLast = newV.yearLast
            this.yearQoq = isNaN(newV.yearQoq) ? 0 + '%' : parseFloat(newV.yearQoq) * 100 + '%'
          
        }
      },
      deep: true,
      immediate: true  
    }
  }
}
</script>

<style lang="scss" scoped>
.com-b {
  border-top: 1px solid;
  -o-border-image: url('../../../public/img/images/line01.png') 10 0 stretch;
  border-image: url('../../../public/img/images/line01.png') 10 0 stretch;
  border-bottom: 1px solid;
  margin-top: 5px;
    padding-bottom: 10px;
  .com-b-item {
    display: flex;
    justify-content: space-between;
    .com-b-list {
      p {
        text-align: center;
        margin: 10px 0;
      }
      div {
        width: 1.65rem;
        height: .45rem;
        background-color: #084374;
        font-weight: 700;
        text-align: center;
        line-height: .45rem;
        font-size: .225rem;
        color: #00ecff;
      }
      .red {
        color: red;
      }
    }
  }
}
</style>