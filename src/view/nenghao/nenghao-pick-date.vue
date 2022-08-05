<template>
    <div class="date-log">
      <el-popover popper-class="date-pop date-pop-month" >
        <el-date-picker
          v-model="value1"
          type="year"
          value-format="yyyy"
          @change="dateChange"
          placeholder="选择年">
        </el-date-picker>
        <el-button slot="reference" class="hvr-push ac-active">年</el-button>
      </el-popover>
      <el-popover popper-class="date-pop date-pop-month">
        <el-date-picker
          v-model="value2"
          type="month"
          value-format="yyyy-MM"
          @change="dateChange"
          placeholder="选择月">
        </el-date-picker>
        <el-button slot="reference" class="hvr-push">月</el-button>
      </el-popover>
      <el-popover popper-class="date-pop date-pop-day">
        <el-date-picker
          v-model="value3"
          type="date"
          value-format="yyyy-MM-dd"
          @change="dateChange"
          placeholder="选择日">
        </el-date-picker>
        <el-button slot="reference" class="hvr-push">日</el-button>
      </el-popover>
    </div>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: ''
    }
  },
  methods: {
    dateChange(value) {
      console.log(value)
      // EventBus.$emit('date-type',value)
      this.$emit('changeDate', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.date-log {
  position: absolute;
  top: .05rem;
  right: 10px;
  .el-button {
    height: .35rem;
    width: .35rem;
    line-height: .35rem;
    padding: 0;
    margin-left: 5px;
    background: #084374;
    border: none;
    color: #fff;
    border-radius: 0;
  }
  .hvr-push:hover {
    background: #008c99; 
  }
  .ac-active {
    background: #008c99; 
  }
}

</style>
<style lang="scss">
.date-pop{
  padding: 0!important;
  min-width: 100px!important;
  .el-date-editor.el-input {
    width: 100px;
  }
  .el-input--suffix .el-input__inner {
    padding-right: 0!important;
  }
}
.date-pop-day {
  min-width: 120px!important;
  .el-date-editor.el-input {
    width: 120px;
  }
}
</style>