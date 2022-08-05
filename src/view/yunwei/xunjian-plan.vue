<template>
  <div class="plane">
    <div class="item-title-b">
      <div class="title-common-box title-box-top ">
        <div class="text-common-1-level">
          <div class="text-left">巡检信息列表</div>
          <div class="text-shu">|</div>
          <div class="text-liner-bg"></div>
        </div>
      </div>
    </div>
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
        prop="xjdname"
        label="计划名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="xjdname"
        label="巡检类型"
        width="180">
      </el-table-column>
      <el-table-column
        prop="xjdname"
        label="巡检路线"
        width="180">
      </el-table-column>
      <el-table-column
        prop="xjdname"
        label="巡检周期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="xjdname"
        label="巡检人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="xjdname"
        label="预计开始时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="xjdname"
        label="预计结束时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="xjdname"
        label="备注"
        width="180">
      </el-table-column>
    </el-table>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      tableData1: [
        {
          xjdname: '1号巡检点',
          nfcid: 'E455240RTY',
          memo: '机房重要巡检点',
          xjtype: '设备',
          xjdev: '高压配电柜',
          sxname: '/'
        },
        {
          xjdname: '2号巡检点',
          nfcid: 'B598826522',
          memo: '机房重要巡检点',
          xjtype: '事项',
          xjdev: '高压配电柜房间清洁',
          sxname: '地面清洁'
        },
        {
          xjdname: '3号巡检点',
          nfcid: 'A454440RTY',
          memo: '机房重要巡检点',
          xjtype: '设备',
          xjdev: '高野配电柜',
          sxname: '/'
        },{
          xjdname: '4号巡检点',
          nfcid: 'E455240RTY',
          memo: '机房重要巡检点',
          xjtype: '设备',
          xjdev: '高压配电柜',
          sxname: '/'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.plane {
  height: 100%;
  .item-title-b {
    margin-bottom: 1px;
  }
  .title-common-box {
    border-bottom: none;
    border-top: none;
    background-image: linear-gradient(0deg, #0a2949 0%, #122a48 100%), linear-gradient(#0d1033, #0d1033);
    .text-liner-bg {
      background: linear-gradient(to right, #00ebff, #102a48 30%)!important;
    }
  }
  .item-title-b {
    
  }
}
::v-deep.el-table {
  background-color: rgba(15, 37, 64, 0.9)!important;
  height: calc(100% - .45rem)!important;
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