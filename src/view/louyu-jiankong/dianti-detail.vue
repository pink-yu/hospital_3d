<template>
  <div class="dianti-detail p10 ">
    <div class="container-bg height-100">
      <div class="title-common-box title-box-top ">
        <div class="text-common-1-level">
          <div class="text-left">详细信息</div>
          <div class="text-shu">|</div>
          <div class="text-liner-bg"></div>
        </div>
        <div class="close hvr-bounce-in" @click="close">X</div>
      </div>
      <div class="top-tab">
        <div class="item-tab">
          <div class="hvr-wobble-horizontal" :class="{ active: itemTabIndex == 1 }" @click="cahnegTab(1)">设备信息</div>
          <div class="hvr-wobble-horizontal" :class="{ active: itemTabIndex == 2 }" @click="cahnegTab(2)">维保信息</div>
          <div class="hvr-wobble-horizontal" :class="{ active: itemTabIndex == 3 }" @click="cahnegTab(3)">维修信息</div>
          <div class="hvr-wobble-horizontal" :class="{ active: itemTabIndex == 4 }" @click="cahnegTab(4)">报警信息</div>
        </div>
      </div>
      <div class="info animate__animated"  :class="{animate__fadeInRight: itemTabIndex==1, animate__fadeOutRight: itemTabIndex!=1}"  >
        <el-row>
          <el-col :span="8">
            <div class="info-item clearfix">
              <div class="info-label fl">设备名称</div>
              <div class="info-name">{{devInfo.name}}</div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="info-item clearfix">
              <div class="info-label fl">设备编号</div>
              <div class="info-name">{{devInfo.powerid}}</div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="info-item clearfix">
              <div class="info-label fl">设备型号</div>
              <div class="info-name">{{devInfo.unmodel}}</div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="info-item clearfix">
              <div class="info-label fl">生产厂家</div>
              <div class="info-name"></div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="info-item clearfix">
              <div class="info-label fl">设备类型</div>
              <div class="info-name">{{typeName}}</div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="info-item clearfix">
              <div class="info-label fl">位置</div>
              <div class="info-name">{{devInfo.areaName}}</div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="info-item clearfix">
              <div class="info-label fl">运维部门</div>
              <div class="info-name"></div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="info-item clearfix">
              <div class="info-label fl">维保时间</div>
              <div class="info-name"></div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="info-item clearfix">
              <div class="info-label fl">安装时间</div>
              <div class="info-name"></div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="info-item clearfix">
              <div class="info-label fl">说明书</div>
              <div class="info-name info-more">
                <div class="hvr-wobble-vertical">shuomingshu.pdf</div>
                <div class="hvr-wobble-vertical">shuomingshu.pdf</div>
                <div class="hvr-wobble-vertical">shuomingshu.pdf</div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="info-item clearfix">
              <div class="info-label fl">图纸</div>
              <div class="info-name info-more">
                <div class="hvr-wobble-vertical">shuomingshu.dwg</div>
                <div class="hvr-wobble-vertical">shuomingshu.dwg</div>
                <div class="hvr-wobble-vertical">shuomingshu.dwg</div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="info-item clearfix">
              <div class="info-label fl">二维码</div>
              <div class="ewm ">
                <img class="hvr-bounce-in" src="../../../public/img/login/erweima.png" alt="">
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      
      <div class="info animate__animated" :class="{animate__fadeInRight: itemTabIndex==3, animate__fadeOutRight: itemTabIndex!=3}">
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
            prop="dealUser"
            label="维修人员"
            width="180">
          </el-table-column>
          <el-table-column
            prop="repairTime"
            label="维修时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="dealComment"
            label="维修内容">
          </el-table-column>
          
        </el-table>
      </div>
      <div class="info animate__animated" :class="{animate__fadeInRight: itemTabIndex==4, animate__fadeOutRight: itemTabIndex!=4}">
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
            prop="date"
            label="报警时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="报警类别"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="报警内容">
          </el-table-column>
          <el-table-column
            prop="status"
            label="处理结果">
            <template slot-scope="scope">
              <div v-if="scope.row.status==1" class="text-green">已处理</div>
              <div v-if="scope.row.status==0" class="text-yellow">已处理</div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { getDiantiInfo, getDiantiRepairInfo } from '@/api/dianti.js'
import { DEVTYPE } from '@/mock/mock_constant.js'
export default {
  props: ['devId'],
  data() {
    return {
      itemTabIndex: 1,
      devInfo: {},
      typeName: '',
      tableData1: []
    }
  },
  mounted(){
    getDiantiInfo({id: this.devId}).then((res)=> {
      
      if(res.data.data) {
        this.devInfo = res.data.data
        this.typeName = DEVTYPE[this.devInfo.devtype]
      }
      
    })
  },
  methods: {
    cahnegTab(index) {
      this.itemTabIndex = index
      if(index == 3) {
        getDiantiRepairInfo({id: this.devId}).then((res)=> {
          this.tableData1 = res.data.data
          this.tableData1.push(
            {
              dealUser: '王小明',
              repairTime: '2022-7-23 17:35:11',
              dealComment: '电梯定期巡检',
              date: '2022-7-12 08:36:02',
              name: '三级告警',
              address: '超载',
              status: 1
            }
          )
          this.tableData1.push({
            dealUser: '张工',
            repairTime: '2022-7-13 17:35:11',
            dealComment: '电梯定期巡检',
            date: '2022-7-08 08:36:02',
            name: '三级告警',
            address: '电梯门合不严实',
            status: 0  
          })
          this.tableData1.push({
            dealUser: '王小明',
            repairTime: '2022-7-23 17:35:11',
            dealComment: '电梯定期巡检',
            date: '2022-7-12 08:36:02',
            name: '三级告警',
            address: '超载',
            status: 1
          })
        })
      }
    },
    close() {
      EventBus.$emit('closeDianti')
    }
  }
}
</script>


<style lang="scss" scoped>
.dianti-detail {
  position: absolute;
  z-index: 10;
  background: #0B1E33;
  width: calc(100% -20px);
  left: 10px;
  right: 10px;
  top: 60px;
  bottom: 75px;
  .container-bg {
    padding-top: 0;
    .top-tab {
      height: 58px;
      background: linear-gradient(#183150, #183150), 	linear-gradient(	#0d1033, #0d1033);
    }
    .item-tab {
      margin-top: 12px;
      margin-left: .125rem;
      display: inline-block;
      background-image: linear-gradient(90deg, #174864 0%, #11314b 100%);
      div {
        display: inline-block;
        width: 164px;
        height: 35px;
        font-size: 16px;
        text-align: center;
        line-height: 35px;
        cursor: pointer;
        color: #00eeff;
      }
      div:hover {
        background-image: linear-gradient(#0d5d88,
            #0d5d88),
          linear-gradient(#ffffff,
            #ffffff);
      }

      div.active {
        color: #fff;
        background-image: linear-gradient(#0d5d88,
            #0d5d88),
          linear-gradient(#ffffff,
            #ffffff);
      }
    }
    .info {
      padding-top: 20px;
      padding-left: 10px;
      padding-right: 10px;
      position: absolute;
      width: calc(100% - 20px);
      
    }
    .info-item {
      margin-bottom: 20px;
      .info-label {
        width: 1.25rem;
        line-height: .45rem;
        height: .45rem;
        padding-left: 20px;
        color: #00eeff;
      }
      .info-name {
        margin-left: 1.5rem;
        width: 3rem;
        height: .45rem;
        padding-left: 10px;
        line-height: .45rem;
        color: #fff;
        background-image: linear-gradient(	#084374, 	#084374),	linear-gradient(#58d9f9);
      }
      .info-more {
        min-height: .45rem;
        height: inherit;
        div {
          cursor: pointer;
        }
      }
      .ewm {
        margin-left: 1.5rem;
      }
    }
  }
}
.title-common-box {
  border-bottom: none;
  border-top: none;
  position: relative;
  background-image: linear-gradient(
		#1d3551, 
		#1d3551), 
	linear-gradient(
		#2bc3cf, 
		#2bc3cf);
  .text-common-1-level {
    .text-liner-bg {
      background: linear-gradient(to right, #00ebff, #102a48 30%);
    }
  }
  .close {
    position: absolute;
    right: 0;
    top: .0625rem;
    font-size: 18px;
    cursor: pointer;
    color: #999;
    padding: 0 .0625rem;
    &:hover {
      color: #eee;
    }
  }
}
::v-deep.el-table {
  background-color: transparent;
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